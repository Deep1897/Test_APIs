const express=require("express")
const router=express.Router();
const {homepage}=require('../Controllers/userController.js')


router.get("/",homepage)



module.exports=router;