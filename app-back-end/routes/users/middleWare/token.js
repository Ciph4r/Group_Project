const jwt = require('jsonwebtoken');


module.exports = {

    createJwtToken: async(user) => {
        let payload = {
            id: user._id,
            email: user.email,
        }
        let jwtToken = await jwt.sign(payload, process.env.SECRET_KEY, {expiresIn: 360000});
        return jwtToken;
    }

}