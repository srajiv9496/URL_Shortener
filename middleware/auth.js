const {setUser, getUser} = require("../service/auth")

async function restrictToLoggedinUserOnly(req, res, next) {
    const userUid = req.cookies?.uid;

    if (!userUid) return res.redirect("/login");
    const user = getUser(userUid);

    if (!user) return res.redirect("/login");

    req.user = user;
    next();
}

async function checkAuth(req, res, next) {
    const userUid = req.cookies?.uid;

    const user = getUser(userUid);

    req.user = user;
    next();
}

// Ensure this is properly exported
module.exports = {
    restrictToLoggedinUserOnly,
    checkAuth,
};
