const mongoose  =require('mongoose');

const schema = mongoose.Schema


const Evenementschema = new schema({
   
   name:{
    type:String,
    required:true
   },
   description:{
    type:String,
    required:true
   },
   image:{
    type:[String]
       
   },
   startDate:{
    type:String,
    
   },
   endDate:{
    type:String,
    
   }
}
)

const evenement = mongoose.model('evenement',Evenementschema)
module.exports = evenement

// module.exports = Person = mongoose.model('person',Userchema)