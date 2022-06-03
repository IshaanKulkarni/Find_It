import PostMessage from "../models/postMessage.js";


export const getpost=async(req,res)=>{
    try{
        const postMesssages= await PostMessage.find();
        console.log(postMesssages);
        res.status(200).json(postMesssages)
    } catch(error){
        res.status(404).json({message: error.message});
    }
}

export const createpost= async(req,res)=>{
    const body=req.body;
    const newpost=new PostMessage(post);
    try{
        await newpost.save()
        res.status(201).json(newpost);
    }catch(error){
        res.status(409).json({message: error.message});
    }
}