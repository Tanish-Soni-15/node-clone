import {Product} from '../model/product.js'
const getproducts=async (req,res)=>{
    const products=await Product.find();
    res.json(products);
    
   }
const getproduct=async (req,res)=>{
    const id=req.params.id;
    const product=await Product.findById(id);
    res.json(product);
   }
const createproduct=async (req,res)=>{
    try{
    const product=new Product(req.body)

    const savedProduct= await product.save()
    res.json(savedProduct);
    }
    catch(err){
        res.send(err)
        res.status(500);
    }
}
const replace=async (req,res)=>{
    const id =req.params.id;
    try{
      const doc = await Product.findOneAndReplace({_id:id},req.body,{new:true});
      res.json(doc);
    }
    catch(err){
      res.send(err);
    }
}
const update=async (req,res)=>{
    const id =req.params.id;
    try{
      const doc = await Product.findOneAndUpdate({_id:id},req.body,{new:true});
      res.json(doc);
    }
    catch(err){
      res.send(err);
    }
}
const deletep=async (req,res)=>{
    const id =req.params.id;
    try{
      const doc = await Product.findOneAndReplace({_id:id});
      res.json(doc);
    }
    catch(err){
      res.send(err);
    }
}

export {getproduct,getproducts,update,replace,deletep,createproduct};
