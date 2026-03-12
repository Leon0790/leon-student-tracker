import { connectDB } from "../lib/db"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export default async function handler(req,res){

const db = await connectDB()

if(req.method === "POST"){

const {email,password} = req.body

const teacher = await db.collection("teachers").findOne({email})

if(!teacher) return res.status(401).json({error:"User not found"})

const valid = await bcrypt.compare(password, teacher.password)

if(!valid) return res.status(401).json({error:"Invalid password"})

const token = jwt.sign({id:teacher._id},"secret")

res.json({token})

}

}
