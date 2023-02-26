const express = require('express')

const contactRouter = express.Router()

const contact = require('../models/contact')



// POST New contact
contactRouter.post('/add', async (req, res) => {

    try {
        const newcontact = new contact (req.body)
        const result= await newcontact.save()
        res.send({ contact:result, message: 'Contact Added ' })
        
    } catch (error) {
        console.log(error)
    }

}
)
// Get All contacts
contactRouter.get('/', async (req, res) => {

    try {
        const result= await contact.find()
        
        res.send({ contact:result, message: 'All Contact is  GETED ' })
        
    } catch (error) {
        console.log(error)
    }

}
)

// Get Contact by id
contactRouter.get('/:id', async (req, res) => {

    try {
        const result= await contact.find({ _id:req.params.id} ) 
        
        
        res.send({ contact:result, message: ' Contact GETED'+ " "+ req.params.id })

        
    } catch (error) {
        console.log(error)
    }

}
)
// Delete contact By id
contactRouter.delete('/:id', async (req, res) => {

    try {
        const result= await contact.findByIdAndDelete({ _id:req.params.id} ) 
        
        
        res.send({  message: ' Contact Deleted'+ " "+ req.params.id })

        
    } catch (error) {
        console.log(error)
    }

}
)
// Update contact BY id

contactRouter.put('/:id', async (req, res) => {

    try {
        const result= await contact.findByIdAndUpdate(
            { _id:req.params.id} ,
            { $set:{...req.body}}) 
        
        
        res.send({ contact:result, message: ' Contact Updated'+ " "+ req.params.id })

        
    } catch (error) {
        console.log(error)
    }

}
)
module.exports = contactRouter