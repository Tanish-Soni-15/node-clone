import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'

const server=express();
import { Productsrouter } from './Router/product.js';
// env.ts
import dotenv from 'dotenv'
dotenv.config()
console.log(process.env.DATABS_URL)
//C R U D Operation
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect(process.env.DATABS_URL);
  console.log("Database Connected");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

server.use(cors());
console.log(process.env.DB_PASSWORD);
server.use(express.json())
console.log(process.env.PUBLIC_DIR)
server.use(express.static(process.env.PUBLIC_DIR))
server.use('/api/products/',Productsrouter);
server.use('*',(req,res)=>{
  res.sendFile('C:\\Users\\lenovo\\Desktop\\Nodejs revision\\dist\\index.html')
})
//for Read
server.listen(8080,()=>{
    console.log("Started server");
})

