import express from 'express'
import  {getproduct,getproducts,update,replace,deletep,createproduct} from '../controller/product.js';
const Productsrouter=express.Router();

Productsrouter.get('/',getproducts)
.get('/:id',getproduct)
.post('/',createproduct) 
.put('/:id',replace)
.patch('/:id',update)
.delete('/:id',deletep)

export {Productsrouter};
