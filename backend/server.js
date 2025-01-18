import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRouter.js";
import userRouter from "./routes/userRouter.js";
import 'dotenv/config';
import cartRouter from "./routes/cartRouter.js";
import orderRouter from "./routes/orderRouter.js";
import path from "path";

// App Config
const app = express();
const port = process.env.PORT||4000;
const __dirname= path.resolve()

// Middleware
app.use(express.json());
app.use(cors({
    origin: [
        "https://fullstack-food-delivary-admin.onrender.com", // Allow Admin Origin
        "https://fullstack-food-delivary-frontend.onrender.com" // Allow Frontend Origin (if needed)
    ],
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
    credentials: true // Allow cookies if required
}))

if(process.env.NODE_ENV==="production"){
// Serve frontend static files
app.use("/frontend", express.static(path.join(__dirname, "../frontend/dist")));
    
// Serve admin static files
app.use("/admin", express.static(path.join(__dirname, "../admin/dist")));

// Frontend fallback for single-page application
app.get("/frontend/*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist", "index.html"));
});

// Admin fallback for single-page application
app.get("/admin/*", (req, res) => {
    res.sendFile(path.join(__dirname, "../admin/dist", "index.html"));
});}
// Database Connection
connectDB();

// API Endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

// Test Endpoint
app.get("/", (req, res) => {
    res.send("API Working");
});

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Internal Server Error" });
});

// Start Server
app.listen(port,() => {
    console.log(`Server started on http://localhost:${port}`);
});


