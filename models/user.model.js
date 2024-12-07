const mongoose=require("mongoose")

const userSchema= new mongoose.Schema({
    username:{
     type:String,
     required:true,
     trim:true,
     lowercase:true,
     unique:true,
     minLength:[3,"user must be at least 3 char long"],
    },
    email:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        unique:true,
        minLength:[13,"email must be at least 13 char long"],
    },
    password:{
        type:String,
        required:true,
        trim:true,
        minLength:[5,"Password must be at least 5 char long"],
    },

})


const user=mongoose.model('user',userSchema)

module.exports=user;