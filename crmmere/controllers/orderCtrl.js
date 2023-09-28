import asyncHandler from "express-async-handler";

export const createOrderCtrl = asyncHandler(async (req, res) => {
    res.json({
        msg:"Order Ctrl"
    })
})