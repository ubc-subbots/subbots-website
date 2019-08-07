// const emailCreds = require(__dirname + '/../../secrets/email_cred.json');
// const config = require(__dirname + '/../../../../config.js');
const CONSTANTS = require(__dirname + '/../../constants.json');
const db = require(__dirname + '/../../mongodb.js').getDB();
const nodemailer = require("nodemailer");

JoinController = async (req, res) => {
    const params = {
        first_name,
        last_name,
        email,
        year,
        team,
        reason
    } = req.body;
    
    // if (!emailCreds) {
    //     res.json({status: false, message: "ERROR: Failed to load credentials"});
    //     return;
    // }

    // Create a SMTP transporter object
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    //First, attempt to send email to team lead
    try {
        var subbotRes = await emailDetailsToTeamLeadAndSubbots(params, transporter);
    } catch (error) {
        res.json({status: false, message: "ERROR: Unexpected asynchronous exception", error: error});
        return;
    }
    
    //If failure, abort
    if (!subbotRes.status) {
        res.json(subbotRes);
        return;
    }

    //Else, attempt to send confirmation to signee
    try {
        var signeeRes = await emailConfirmationToSignee(params, transporter);
    } catch (error) {
        res.json({
            status: false,
            message: "ERROR: Unexpected asynchronous expection on signee email. Team lead email was succesfully sent however",
            error: error
        });
        return;
    }

    var saveRes = await save(params);

    //If database error
    if (!saveRes.status){
        res.json(saveRes);
    }
    res.json({signee_email: signeeRes, subbot_email: subbotRes});
};

async function emailConfirmationToSignee(params, transporter) {
    // Message object
    let message = {
        from: `${process.env.EMAIL_NAME} <${process.env.EMAIL_USER}>`,
        to: `${params.first_name} ${params.last_name} <${params.email}>`,
        subject: 'Thanks for your interest!',
        text: `Hi ${params.first_name} ${params.last_name}!\n\n(TODO: Create actual html email)`
        // html: '<p><b>Hello</b> to myself!</p>'
    };
    
    try {
        const res = await transporter.sendMail(message);
        return {status: true, res: res};
    } catch (error) {
        return {
            status: false, 
            message: "ERROR: Failed to send email to signee",
            params: params,
            error: error
        };
    }
}

async function emailDetailsToTeamLeadAndSubbots(params, transporter) {
    var teamLeadName = "";
    var teamLeadEmail = 0;

    switch (params.team.toUpperCase()) {
        case CONSTANTS.ELECTRICAL_TEAM:
            teamLeadEmail = process.env.ELEC_LEAD_EMAIL;
            teamLeadName=process.env.ELEC_LEAD_NAME
            break;
        case CONSTANTS.MECHANICAL_TEAM:
            teamLeadEmail = process.env.MECH_LEAD_EMAIL;
            teamLeadName=process.env.MECH_LEAD_NAME
            break;
        case CONSTANTS.SOFTWARE_TEAM:
            teamLeadEmail = process.env.SOFTWARE_LEAD_EMAIL;
            teamLeadName=process.env.SOFTWARE_LEAD_NAME
            break;        
    }

    if (!teamLeadEmail) {
        return {
            status: false, 
            message: "ERROR: Team lead email not found. Aborting email...",
            params: params
        };
    }

    // Message object
    let message = {
        from: `${process.env.EMAIL_NAME} <${process.env.EMAIL_USER}>`,
        to: ` ${teamLeadName} <${teamLeadEmail}>`,
        cc: `${process.env.EMAIL_NAME} <${process.env.EMAIL_USER}>`,
        subject: 'Someone has requested to join Subbots',
        text: `(TODO: Create actual html email)`
        // html: '<p><b>Hello</b> to myself!</p>'
    };

    try {
        const res = await transporter.sendMail(message);
        return {status: true, res: res};
    } catch (error) {
        return {
            status: false, 
            message: "ERROR: Failed to send email to subbots and team lead",
            params: params,
            error: error
        };
    }
}

function save(join_form){
    return new Promise((resolve, reject) => {
        db.collection("join-forms").insertOne(join_form, (error, result) => {
            if (error) resolve({
                status: false,
                message: "ERROR: Failed to save the join form to the db",
                error: error
            });
            resolve({ status: true });
        });
    });
}

//Used for testing
function sendEtheralEmail(req, res) {
    const {
        first_name,
        last_name,
        email,
        year,
        team,
        reason
    } = req.body;

    nodemailer.createTestAccount((err, account) => {
        if (err) {
            console.error('Failed to create a testing account. ' + err.message);
            return process.exit(1);
        }

        // Create a SMTP transporter object
        let transporter = nodemailer.createTransport({
            host: account.smtp.host,
            port: account.smtp.port,
            secure: account.smtp.secure,
            auth: {
                user: account.user,
                pass: account.pass
            }
        });

        // Message object
        let message = {
            from: 'UBC Subbots <sender@example.com>',
            to: `${first_name} ${last_name} <${email}>`,
            subject: 'Thanks for your interest!',
            text: 'Woah'
            // html: '<p><b>Hello</b> to myself!</p>'
        };

        transporter.sendMail(message, (err, info) => {
            if (err) {
                console.log('Error occurred. ' + err.message);
                return process.exit(1);
            }
    
            console.log('Message sent: %s', info.messageId);
            // Preview only available when sending through an Ethereal account
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
            res.send("email sent!");
        });
    });
}

module.exports = JoinController;