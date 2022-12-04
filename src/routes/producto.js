const express = require('express')
productoSchema=require('../models/producto');

const router=express.Router()



//routes
router.post("/producto",(req,res)=>{
	const producto=productoSchema(req.body)
	producto.save()
	.then(data=>res.json(data))
	.catch(error=>res.json({message:error}))
})


router.get("/producto", (req, res) => {
	productoSchema.find()
		.then(data => res.json(data))
		.catch(error => res.json({ message: error }))
})



router.get("/producto/:cod", (req, res) => {
	const {cod}=req.params
	productoSchema.findOne({codigo:cod})
		.then(data => res.json(data))
		.catch(error => res.json({ message: error }))
})



router.put("/producto/:cod", (req, res) => {
	const { cod } = req.params
	const producto={...req.body}
	delete producto.codigo;
	console.log(producto);
	productoSchema.updateOne({codigo:cod}, {$set:producto})
		.then(data => res.json(data))
		.catch(error => res.json({ message: error }))
})


router.delete("/producto/:cod", (req, res) => {
	const { cod } = req.params
	productoSchema.deleteOne({ codigo: cod })
		.then(data => res.json(data))
		.catch(error => res.json({ message: error }))
})





module.exports=router