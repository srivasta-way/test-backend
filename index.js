import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app = express();

app.use(cors({
    origin: `${process.env.FRONTEND_URL}` || 'http://localhost:5173',
}));
const port = process.env.PORT ||5000;

app.get("/",(req,res)=>{
    res.send("server is running...");
})

app.get("/api/get-data",(req,res)=>{
    res.json({name:'monu',age:30,city:'delhi'})
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})
