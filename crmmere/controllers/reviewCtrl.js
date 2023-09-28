import asyncHandler from "express-async-handler";
import Review from "../model/Review.js";
import Product from "../model/Product.js";

export const  createReviewCtrl = asyncHandler(async (req, res) => {
    const {product,message,rating} = req.body 
    // //1. Find the product
    const {productID} = req.params
    const productFound = await Product.findById(productID).populate("reviews")
    if(!productFound){
        throw new Error("Product Not Found")
    }
    const hasReviewed = productFound?.reviews.find((review)=>{
        return review?.user?.toString() === req?.userAuthId?.toString()
    })
    if(hasReviewed){
        throw new Error("You have already reviewed this product")
    }
    
    //ckeck if the user already reviewed this product
    //creat review 
    const review = await Review.create({
        message,
        rating,
        product:productFound?._id,
        user:req.userAuthId
    })
    //push the review into the product
    productFound.reviews.push(review?._id)
    //save the product
    await productFound.save()
    //send response
    res.json({
        success:true,
        message:"Review created successfully",
    })
    
})

