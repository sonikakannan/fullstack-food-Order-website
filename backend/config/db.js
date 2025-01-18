import mongoose from "mongoose";

export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://sonikakannan66:Bn7z9eJ0JZjUbpko@cluster0.j12hb.mongodb.net/food-delivary').then(()=>console.log("DB connected")
    )
}