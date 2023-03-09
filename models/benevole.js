const mongoose  =require('mongoose');

const schema = mongoose.Schema


const Benevoleschema = new schema({
    num_dossier:{
        type:String,
        required:true,
        value:"CRTGHV"
        
       },
   nom:{
    type:String,
    required:true
   },
   prenom:{
    type:String,
    required:true
   },
   sexe:{
    type:String,
    required:true
   },
   nom_pere:{
    type:String,
    required:true
   },
   nom_prenom_mere:{
    type:String,
    required:true
   },
//    
   num_tele_parents:{
    type:Number,
   },
//    
   date_n:{
    type:Date,
    required:true
   },
   lieu_n:{
    type:String
   },
   adresse:{
    type:String,
    required:true
   },
   cin:{
    type:Number,
    
   },
   Annee_volontariat:{
    type:Number,
    
   },
   profession:{
    type:String    
   },
   num_tele:{
    type:Number,
   },
   email:{
    type:String,
    
   },
   niveau:{
    type:String,
    
   },
   diplome:{
    type:String,
    
   },
   certificat_crt:{
      type:String,
      
     },
   nom_etablisement:{
    type:String,
    
   },
   loisir:{
    type:String,
    
   },
   secouriste:{
      type:String,
      
     },


   image:{
    type:String,

   },
//   admin 
     commentaire:{
      type:String,
      
     },
     nb_participation:{
      type:String,
      
     }
    //  

    //  
   
   

}
)

const benevole = mongoose.model('benevole',Benevoleschema)
module.exports = benevole

// module.exports = Person = mongoose.model('person',Userchema)