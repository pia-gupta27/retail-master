
/*
import { User } from './models';
import { connectToDB } from './utils';

export const fetchUsers = async () => {
    try {
        connectToDB(); // Await the connection
        const users = await User.find(); // Fetch users
        return users;
    } catch (err) {
        console.log(err); 
        throw new Error("Failed to fetch users!");
    }
};
*/

/*
import { User } from './models';
import { connectToDB } from './utils';

export const fetchUsers = async (q,page) => {

    const regex = new RegExp(q,"i");
    const ITEM_PER_PAGE = 2

  try {
    await connectToDB(); // Await the connection
    
    console.log("Connected to DB, fetching users..."); // Add this line for confirmation

    const count = await User.find({username:{$regex:regex}}).countDocuments();
    const users = await User.find({username:{$regex:regex}}).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page-1)); // Fetch users
    console.log("Users fetched:", users); // Add this line to print fetched users
    return {count,users};
  } catch (err) {
    console.log(err); 
    throw new Error("Failed to fetch users!");
  }
};
*/

import { Transaction, User } from './models';
import { Product } from './models';
import { Outlet } from './models';
import { connectToDB } from './utils';

export const fetchUsers = async (q, page) => {
  const regex = new RegExp(q, "i");
  const ITEM_PER_PAGE = 5;

  try {
    await connectToDB(); // Await the connection
    console.log("Connected to DB, fetching users...");

    const count = await User.find({ username: { $regex: regex } }).countDocuments();
    const users = await User.find({ username: { $regex: regex } })
                            .limit(ITEM_PER_PAGE)
                            .skip(ITEM_PER_PAGE * (page - 1));
    
    console.log("Users fetched:", users);
    return { count, users };
  } catch (err) {
    console.error("Error in fetchUsers:", err); 
    throw new Error("Failed to fetch users!");
  }
};

export const fetchProducts = async (q, page) => {
    const regex = new RegExp(q, "i");
    const ITEM_PER_PAGE = 5;
  
    try {
      await connectToDB(); // Await the connection
      console.log("Connected to DB, fetching products...");
  
      const count = await Product.find({ item: { $regex: regex } }).countDocuments();
      const products = await Product.find({ item: { $regex: regex } })
                              .limit(ITEM_PER_PAGE)
                              .skip(ITEM_PER_PAGE * (page - 1));
      
      console.log("Products fetched:", products);
      return { count, products };
    } catch (err) {
      console.error("Error in fetchProducts:", err); 
      throw new Error("Failed to fetch products!");
    }
  };


  export const fetchOutlets = async (q, page) => {
    const regex = new RegExp(q, "i");
    const ITEM_PER_PAGE = 5;
  
    try {
      await connectToDB(); // Await the connection
      console.log("Connected to DB, fetching outlets...");
  
      const count = await Outlet.find({ name: { $regex: regex } }).countDocuments();
      const outlets = await Outlet.find({ name: { $regex: regex } })
                              .limit(ITEM_PER_PAGE)
                              .skip(ITEM_PER_PAGE * (page - 1));
      
      console.log("Outlets fetched:", outlets);
      return { count, outlets };
    } catch (err) {
      console.error("Error in fetchOutlets:", err); 
      throw new Error("Failed to fetch outlets!");
    }
  };


  export const fetchTransactions = async (q, page) => {
    const regex = new RegExp(q, "i");
    const ITEM_PER_PAGE = 5;
  
    try {
      await connectToDB(); // Await the connection
      console.log("Connected to DB, fetching transactions...");
  
      const count = await Transaction.find({ cust: { $regex: regex } }).countDocuments();
      const transactions = await Transaction.find({ cust: { $regex: regex } })
                              .limit(ITEM_PER_PAGE)
                              .skip(ITEM_PER_PAGE * (page - 1));
      
      console.log("Transactions fetched:", transactions);
      return { count, transactions };
    } catch (err) {
      console.error("Error in fetchTransactions:", err); 
      throw new Error("Failed to fetch transactions!");
    }
  };



  export const fetchUser = async (id) => {
  
    try {
      await connectToDB(); // Await the connection
  
      const user = await User.findById(id);
      return user;

    } catch (err) {
      console.log(err); 
      throw new Error("Failed to fetch user!");
    }
  };


  export const fetchProduct = async (id) => {
  
    try {
      await connectToDB(); // Await the connection
  
      const product = await Product.findById(id);
      return product;

    } catch (err) {
      console.log(err); 
      throw new Error("Failed to fetch product!");
    }
  };

  export const fetchOutlet = async (id) => {
  
    try {
      await connectToDB(); // Await the connection
  
      const outlet = await Outlet.findById(id);
      return outlet;

    } catch (err) {
      console.log(err); 
      throw new Error("Failed to fetch outlet!");
    }
  };


  export const fetchTransaction = async (id) => {
  
    try {
      await connectToDB(); // Await the connection
  
      const transaction = await Transaction.findById(id);
      return transaction;

    } catch (err) {
      console.log(err); 
      throw new Error("Failed to fetch transaction!");
    }
  };