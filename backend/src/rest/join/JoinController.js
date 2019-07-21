const emailCreds = require(__dirname + '/../../secrets/email_cred.json');
const nodemailer = require("nodemailer");

JoinController = (req, res) => {
    // sendEtheralEmail(req, res);  
    sendProductionEmail(req, res);
};

function sendProductionEmail(req, res) {
    if (!emailCreds) {
        res.json({status: false, message: "ERROR: Failed to load credentials"});
    }

    const {
        first_name,
        last_name,
        email,
        year,
        team,
        reason
    } = req.body;

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
        to: `${first_name} ${last_name} <${email}>`,
        subject: 'Thanks for your interest!',
        text: `Hi ${first_name} ${last_name}!\n\n(TODO: Create actual html email)`
        // html: '<p><b>Hello</b> to myself!</p>'
    };

    transporter.sendMail(message, (err, info) => {
        if (err) {
            res.json({
                status: false, 
                message: "ERROR: Failed to send email",
                error: err.message
            });
        }

        res.json({status: true, email_id: info.messageId});
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