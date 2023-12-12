const express=require('express');

const deep=require('../Controllers/deep.json')


const homepage=(req,res)=>{
    res.send(deep)
}


module.exports={homepage}