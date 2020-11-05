const User = require('../models/User')
const bcrypt = require('bcryptjs')



module.exports = {
    register: async(req,res,next) => {
        const {name,email,password} = req.body
        user = await new User({name ,email , password })
        
        await user.save().then((user)=> {
           return res.status(200).json({message: 'User created' , user,password})
          })

    },


}