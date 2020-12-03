const Users = require('../../users/models/User')


module.exports = {
    /////check if all fiend are filled
    validateRegister: async (req,res,next) => {
        const { 
            firstName,
            lastName,
            phone,
            email,
            password} = req.body
                let user = await Users.findOne({email})
                if (!email||!password || !firstName || !lastName){
                    return res.status(400).json({
                        status: 'error',
                        message: 'All field must be filled'
                      });
                    };
                if(!email.includes('@') || !email.includes('.') ){
                    return res.status(400).json({
                        status: 'error',
                        message: 'Use a valid Email'
                      });
                    }
                if(password.length < 6 ){
                    return res.status(400).json({
                        status: 'error',
                        message: 'Password must be 6 character or longer'
                      });
                    }
                if(user){
                    
                    return res.status(409).json({
                        status: 'error',
                        message: 'Email Already Exist!'
                        });
                    };
        next() ;
    },
}