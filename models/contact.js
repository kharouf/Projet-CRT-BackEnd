const mongoose  =require('mongoose');

const schema = mongoose.Schema


const Contactschema = new schema({
   name:{
    type:String,
    required:true
   },
   phone:{
    type:Number,
    required:true
   },
   favoriteFoods:{
    type:[String]
   } 

}
)

const contact = mongoose.model('contact',Contactschema)
module.exports = contact

// module.exports = Person = mongoose.model('person',contactchema)