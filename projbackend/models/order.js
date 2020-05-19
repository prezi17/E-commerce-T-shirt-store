const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema;


const ProductCartSchema = new mongoose.Schema( { 
    PRODUCT: {
        type: ObjectId,
        ref: "Product"
    },
    name: String,
    count: Number,
    price: Number

})


const ProductCart = mongoose.model("ProductCart", ProductCartSchema)

const orderSchema = new mongoose.Schema( { 

    products: [ProductCartSchema],    //the product/s which is/are inside cart
    transaction_id: {},
    amount: {
        type: Number
    },
    address: String, 
    updated: Date,
    user: {
        tyoe: ObjectId,
        ref: "User"
    }


}, {timestamps: true })

const order = mongoose.module("Order", orderSchema)

module.exports = { order, ProductCart } 