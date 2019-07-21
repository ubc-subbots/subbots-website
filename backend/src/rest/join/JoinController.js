const emailCreds = require(__dirname + '/../../secrets/email_cred.json');
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
    
    if (!emailCreds) {
        res.json({status: false, message: "ERROR: Failed to load credentials"});
    }

    let [signeeRes, subbotRes] = await Promise.all([
        sendSigneeToSubbots(params),
        sendConfirmToSingee(params)
    ]);

    res.json({signee_email: signeeRes, subbot_email: subbotRes});
};

async function sendConfirmToSingee(params) {

    // Create a SMTP transporter object
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: emailCreds.user,
            pass: emailCreds.pass
        }
    });

    // Message object
    let message = {
        from: `${emailCreds.name} <${emailCreds.user}>`,
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

async function sendSigneeToSubbots(params) {
    //TODO: Send email to main subbots email, plus respective team lead
    return {status: true};
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