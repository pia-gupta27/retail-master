"use server"

import { redirect } from "next/navigation";
import { Product, User, Outlet, Transaction } from "./models";
import { connectToDB } from "./utils";
import { revalidatePath } from "next/cache";
import bcrypt from "bcrypt"
import { signIn } from "../auth";

export const addUser = async (formData) => {
    const {username, email, password, phone, address, isAdmin, isActive} =
    Object.fromEntries(formData);

    try{
        connectToDB(); 

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            phone,
            address,
            isAdmin,
            isActive 
        });

        await newUser.save();
    } catch (err){
        console.log(err);
        throw new Error("Failed to create user!");
    }

    revalidatePath("/dashboard/users")
    redirect("/dashboard/users")

};


export const addProduct = async (formData) => {
   
    const {item, cat, price, stock, fat, identifier, weight} =
    Object.fromEntries(formData);

    try{
        connectToDB(); 

        const newProduct = new Product({
            item, 
            cat, 
            price, 
            stock, 
            fat, 
            identifier, 
            weight
        });

        await newProduct.save();
    } catch (err){
        console.log(err);
        throw new Error("Failed to create product!");
    }

    revalidatePath("/dashboard/products")
    redirect("/dashboard/products")

};


export const addOutlet = async (formData) => {
   
    const {name, type, location, identifier, est, size} =
    Object.fromEntries(formData);

    try{
        connectToDB(); 

        const newOutlet = new Outlet({
            name, 
            type, 
            location, 
            identifier, 
            est, 
            size
        });

        await newOutlet.save();
    } catch (err){
        console.log(err);
        throw new Error("Failed to create outlet!");
    }

    revalidatePath("/dashboard/outlets")
    redirect("/dashboard/outlets")

};


export const addTransaction = async (formData) => {
   
    const {cust, status, email, amount, date, products, phone} =
    Object.fromEntries(formData);

    try{
        connectToDB(); 

        const newTransaction = new Transaction({
            cust,
            phone,
            products, 
            status, 
            email, 
            amount, 
            date
        });

        await newTransaction.save();
    } catch (err){
        console.log(err);
        throw new Error("Failed to create transaction!");
    }

    revalidatePath("/dashboard/transactions")
    redirect("/dashboard/transactions")

};


export const deleteUser = async (formData) => {
   
    const {id} =
    Object.fromEntries(formData);

    try{
        connectToDB(); 

        await User.findByIdAndDelete(id);
    } catch (err){
        console.log(err);
        throw new Error("Failed to delete user!");
    }

    revalidatePath("/dashboard/user")

};


export const deleteProduct = async (formData) => {
   
    const {id} =
    Object.fromEntries(formData);

    try{
        connectToDB(); 

        await Product.findByIdAndDelete(id);
    } catch (err){
        console.log(err);
        throw new Error("Failed to delete product!");
    }

    revalidatePath("/dashboard/products")

};


export const deleteOutlet = async (formData) => {
   
    const {id} =
    Object.fromEntries(formData);

    try{
        connectToDB(); 

        await Outlet.findByIdAndDelete(id);
    } catch (err){
        console.log(err);
        throw new Error("Failed to delete outlet!");
    }

    revalidatePath("/dashboard/outlet")

};

export const deleteTransaction = async (formData) => {
   
    const {id} =
    Object.fromEntries(formData);

    try{
        connectToDB(); 

        await Transaction.findByIdAndDelete(id);
    } catch (err){
        console.log(err);
        throw new Error("Failed to delete transaction!");
    }

    revalidatePath("/dashboard/transactions")

};


export const updateUser = async (formData) => {
    const {id,username, email, password, phone, address, isAdmin, isActive} =
    Object.fromEntries(formData);

    try{
        connectToDB(); 

        const updateFields = {
            username, 
            email, 
            password, 
            phone, 
            address, 
            isAdmin, 
            isActive,

        }

        Object.keys(updateFields).forEach(
            (key) =>
                (updateFields[key]==="" || undefined) && delete updateFields[key]
        );

        await User.findByIdAndUpdate(id, updateFields);

    } catch (err){
        console.log(err);
        throw new Error("Failed to update user!");
    }

    revalidatePath("/dashboard/users")
    redirect("/dashboard/users")

};


export const updateProduct = async (formData) => {
    const {id,item, cat, price, stock, fat, identifier, weight} =
    Object.fromEntries(formData);

    try{
        connectToDB(); 

        const updateFields = {
            item, 
            cat, 
            price, 
            stock, 
            fat, 
            identifier, 
            weight,

        }

        Object.keys(updateFields).forEach(
            (key) =>
                (updateFields[key]==="" || undefined) && delete updateFields[key]
        );

        await Product.findByIdAndUpdate(id, updateFields);

    } catch (err){
        console.log(err);
        throw new Error("Failed to update product");
    }

    revalidatePath("/dashboard/products")
    redirect("/dashboard/products")

};


export const updateOutlet = async (formData) => {
    const {id, name, type, location, identifier, est, size} =
    Object.fromEntries(formData);

    try{
        connectToDB(); 

        const updateFields = {
            name, 
            type, 
            location, 
            identifier, 
            est, 
            size,
        }

        Object.keys(updateFields).forEach(
            (key) =>
                (updateFields[key]==="" || undefined) && delete updateFields[key]
        );

        await Outlet.findByIdAndUpdate(id, updateFields);

    } catch (err){
        console.log(err);
        throw new Error("Failed to update outlet");
    }

    revalidatePath("/dashboard/outlets")
    redirect("/dashboard/outlets")

};


export const updateTransaction = async (formData) => {
    const {id,cust, status, email, amount, date, products, phone} =
    Object.fromEntries(formData);

    try{
        connectToDB(); 

        const updateFields = {
            cust, 
            status, 
            email, 
            amount, 
            date, 
            products, 
            phone

        }

        Object.keys(updateFields).forEach(
            (key) =>
                (updateFields[key]==="" || undefined) && delete updateFields[key]
        );

        await Transaction.findByIdAndUpdate(id, updateFields);

    } catch (err){
        console.log(err);
        throw new Error("Failed to update transaction");
    }

    revalidatePath("/dashboard/transactions")
    redirect("/dashboard/transactions")

};


export const authenticate = async (prevState,formData) =>{
    const {username, password} = Object.fromEntries(formData);

    try {
        const response = await signIn("credentials", { redirect: false, username, password });
        if (response?.ok) {
            // Redirect to dashboard upon successful login
            redirect("/dashboard");
        } else {
            return "Wrong Credentials!";
        }
    } catch (err) {
        return "Wrong Credentials!";
    }
    
};


/*try{
    await signIn("credentials",{username,password});
}   catch(err){
    return "Wrong Credentials!";
}*/