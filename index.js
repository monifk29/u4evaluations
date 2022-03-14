const express = require("express");
const mongoose = require("mongoose");

const app = express();

const connect = () =>{
    return mongoose.connect("mongodb+srv://monif:Finom1234@cluster0.gocvx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
};

//schema
//user schema

const UserSchema = new mongoose.Schema({
    firstName:{type: String, required: true} ,
    middleName :{type: String,required:false} ,
    lastName: {type: String, required: true} ,
    age : {type : Number,required:true},
    email : {type: String, required: true,unique:true} ,
    address : {type: String, required: true} ,
    gender : {type: String,required:false,default:"Female"} ,
    type : {type:String,required:false},
    createdAt: {type:String,required:true},
    updatedAt: {type:String,required:true}
});

//model

const User = mongoose.model("user",UserSchema);



const BranchDetailSchema = new mongoose.Schema({
    name :{type:String,required:true},
address: {type:String,required:true},
IFSC : {type:String,required:true},
MICR : {type:Number,required:true},
createdAt : {type:String,required:true},
updatedAt : {type:String,required:true},

});
const BranchDetail = mongoose.model("branchDetail",BranchDetailSchema);

const MasterAccountSchema = new mongoose.Schema({
    balance : {type:Number,required:true},
createdAt :{type:String,required:true},
updatedAt :{type:String,required:true},
});

const MasterAccount = mongoose.model("masterAccount",MasterAccountSchema);


const SavingsAccountSchema = new mongoose.Schema({
    account_number:{type:Number,required:true,unique:true} ,
balance :{type:Number,required:true},
interestRate :{type:Number,required:true},
createdAt :{type:String,required:true},
updatedAt :{type:String,required:true},
});

const SavingsAccount = mongoose.model("savingsAccount",SavingsAccountSchema);


const FixedAccountSchema = new mongoose.Schema({

    account_number: {type: String, required: true,unique:true},
balance:{type: Number, required: true},
interestRate :{type: String, required: true},
startDate : {type: String, required: true},
maturityDate : {type: String, required: true},
createdAt :{type:String,required:true},
updatedAt :{type:String,required:true}
});

const FixedAccount = mongoose.model("fixedAccount",FixedAccountSchema);




//crud









app.listen(5000, async () =>{
    try{
        app.connect();
    }
    catch(err){
        console.log("error :",err);
    }
});