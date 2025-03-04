const express=require('express');
const mongoose=require('mongoose');
const app=express();
const port=3000;

function calculateage(dob){
    const today=new Date();
    const birthdate=new Date(dob);
    if(isNaN(birthdate)){
        return null;

    }
    let age=today.getFullYear()-birthdate.getFullYear();
    const monthdiff=today.getMonth()-birthdate.getDate.getMonth();
    if(monthdiff<0 ||(monthdiff==0  && today.getDay()<birthdate.getDay())
    ){
age--;

}return age;


}

app.get('/signup',(req,res)=>{
    const {Username,Email,Password,dob}=req.query;
res.json(Username,Email,Password,dob);

if(!Username){
    res.status(400).json("Username cannot be empty!");

}
if(!Email){
    res.status(400).json("Email cannot be empty!");

}
if(Password){
    Password.length>=8 && Password.length<=16;
    res.status(200).json("created");
}
else{
    res.status(400).json("Password length should be greater than 8 or less than or equal to 16");
}
});



app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});