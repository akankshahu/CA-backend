const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    Username:{
        type:String,
        required:true,
    },

    Email:{
        type:String,
        required:true,

    },
    Password:{
        type:String,
        
    }
});

module.exports=model.mongoose("user",userSchema);