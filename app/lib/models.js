import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required: true,
        unique: true,
        min: 3,
        max: 20,
    },

    email:{
        type:String,
        required: true,
        unique: true,
    },

    password:{
        type:String,
        required: true,
    },

    img: {
        type: String,
    },

    isAdmin: {
        type: Boolean,
        default: false,
    },

    isActive: {
        type: Boolean,
        default: true,
    },

    phone: {
        type: String,
    },

    address: {
        type: String,
    },

},
    {timestamps:true}

);


const productSchema = new mongoose.Schema({
    item:{
        type:String,
        required: true,
        unique: true,
    },

    price:{
        type: Number,
        required: true,
        min: 0,
    },

    stock:{
        type: Number,
        required: true,
        min: 0,
    },

    img: {
        type: String,
    },

    identifier:{
        type: String,
        required: true,
        min: 5,
        max: 5,
    },

    weight:{
        type: String,
        required: true,
        min: 2,
    },

    cat:{
        type: String,
        required: true,
        min: 2,

    },

    fat:{
        type: String,
        required: true,
        min: 2,

    },


},
    {timestamps:true}

);


const outletSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
        unique: true,
    },


    est:{
        type: Number,
        required: true,
        min: 0,
    },

    identifier:{
        type: String,
        required: true,
        min: 6,
        max: 6,
    },

    size:{
        type: String,
        required: true,
        min: 2,
    },

    location:{
        type: String,
        required: true,
        min: 2,
    },

    type:{
        type: String,
        required: true,
        min: 2,
    },


},
    {timestamps:true}

);


const transactionSchema = new mongoose.Schema({
    cust:{
        type:String,
        required: true,
        unique: true,
    },

    img: {
        type: String,
    },

    email:{
        type:String,
        required: true,
        unique: true,
    },

    phone: {
        type: String,
    },

    amount:{
        type: Number,
        required: true,
        min: 0,
    },

    date:{
        type: Date,
        required: true,
  
    },


    products:{
        type: String,
        required: true,
        min: 1,
    },

    status:{
        type: String,
        required: true,
        min: 1,

    },


},
    {timestamps:true}

);

export const User = mongoose.models.User || mongoose.model("User",userSchema);
export const Product = mongoose.models.Product || mongoose.model("Product",productSchema);
export const Outlet = mongoose.models.Outlet || mongoose.model("Outlet",outletSchema);
export const Transaction = mongoose.models.Transaction || mongoose.model("Transaction",transactionSchema);