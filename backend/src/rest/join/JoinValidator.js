JoinValidator = (req, res, next) => {
    const {
        first_name,
        last_name,
        email,
        year,
        team,
        reason
    } = req.body;

    if (!first_name) {
        res.json({
           status: false,
           code: 400,
           error: "empty_first_name" 
        });
    }

    if (!last_name) {
        res.json({
           status: false,
           code: 400,
           error: "empty_last_name" 
        });
    }
    
    if (!email) {
        res.json({
           status: false,
           code: 400,
           error: "empty_email_name" 
        });
    }

    if (!validateEmail(email)) {
        res.json({
            status: false,
            code: 400,
            error: "invalid_email" 
         });
    }

    if (!year) {
        res.json({
            status: false,
            code: 400,
            error: "empty_year" 
         });
    }

    if (!['1', '2', '3', '4'].includes(year)) {
        res.json({
            status: false,
            code: 400,
            error: "invalid_year" 
         });
    }

    if (!team) {
        res.json({
            status: false,
            code: 400,
            error: "empty_team" 
         });
    }

    //TODO: Setup enum for teams

    next();
};


function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

module.exports = JoinValidator;