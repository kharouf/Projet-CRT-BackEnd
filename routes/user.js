const express = require('express')
const userRouter = express.Router()
// hash password
const bcrypt = require('bcrypt');
// token
const jwt = require('jsonwebtoken');
const user = require("../models/User")
// middlware
const {loginRules,registerRules,validation} = require("../middleware/auth_validator")
const isAuth = require("../middleware/passport")







// Register
userRouter.post('/register',registerRules(),validation, async (req, res) => {
const {name,lastName,email,password,isAdmin,isBenevole}= (req.body)
    try {
        const newuser = new user({name,lastName,email,password,isAdmin,isBenevole})
         // check if the email exist
         const emailExist = await user.findOne({email})
         if (emailExist) {
             return res.status(400).send({message: 'Email already exist'})
         }
        // hash password 
        const salt = await bcrypt.genSalt(10)
        newuser.password = await bcrypt.hash(newuser.password, salt)
         // create a token
        
         const token = await jwt.sign({id: newuser._id}, process.env.JWT_SECRET, {expiresIn: 3600})
        // save the user 
       const newUserToken=  await newuser.save()
        res.status(200).send({newUserToken, message: 'User registered successfully' , token: `Bearer ${token}`})

    } catch (error) {
        console.log(error)
        res.status(500).send("can not save user")

        
    }

}
)
// login
userRouter.post('/login', loginRules(),validation, async (req, res) => {
    const {email,password}= (req.body)
    try {
        // find if the user exist
        const userLogin = await user.findOne({email})
        if (!userLogin) {
            return res.status(400).send({message: 'User not found'})
        }
        // check if the password is correct
        const isEqual = await bcrypt.compare(password, userLogin.password)
        
        if (!isEqual) {
            return res.status(400).send({message: 'Password is incorrect'})
        }
        // create a token
        const token = await jwt.sign({id: userLogin._id}, process.env.JWT_SECRET, {expiresIn: 3600})
        // !console.log(token)
        
        
    
        // send the userLogin
        res.status(200).send({userLogin, message: 'User logged in successfully', token: ` Bearer ${token}`})
        
    }
          
     catch (error) {
        console.log(error)
        res.status(500).send({msg:"can not get the user"})
    }

})
// Get  user
userRouter.get('/current', isAuth(), (req, res) => 
   res.status(200).send(req.user)
)

module.exports = userRouter
