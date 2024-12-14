const jwt = require("jsonwebtoken");
const secret = "Rajiv@123";
// const sessionIdToUserMap = new Map();

function setUser(user){
    // sessionIdToUserMap.set(id, user);
    return jwt.sign({
        _id: user._id,
        email: user.email,
        role: user.role,
    }, 
        secret
    );
};

function getUser(token){
    // return sessionIdToUserMap.get(id);
    try{
        return jwt.verify(token, secret);
    }
    catch(error){
        return null;
    }
}

module.exports = {
    setUser,
    getUser,
}