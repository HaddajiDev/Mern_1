const express = require("express");
const ProductModal = require("../models/product");

const productRouter = express.Router();

//add product
productRouter.post("/add", async(request, result) =>{
    try {
        let newproduct = new ProductModal(request.body);
        let res = await newproduct.save();
        result.send({product: res, msg: "product added"});
    } catch (error) {
        console.log(error);
    }
});

//get all products
productRouter.get("/", async function(request, result) {
    try {
        let products = await ProductModal.find();
        result.send({ products: products, msg: "All products" });
    } catch (error) {
        console.log(error);
    }
});


//get one product
productRouter.get("/:id", async function(request, result) {
    try {
        let product = await ProductModal.findById(request.params.id);
        result.send({ product: product, msg: "product found" });
    } catch (error) {
        console.log(error);
    }
});

//delete product
productRouter.delete("/:id", async function(request, result) {
    try {
        await ProductModal.findByIdAndDelete(request.params.id);
        result.send({ msg: "product deleted" });
    } catch (error) {
        console.log(error);
    }
});

//Update product
productRouter.put("/:id", async function(request, result) {
    try {
        await ProductModal.findByIdAndUpdate({ _id: request.params.id }, { $set: {...request.body } });
    } catch (error) {
        console.log(error);
    }
})


module.exports = productRouter;