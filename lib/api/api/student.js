import { connectDB } from "../lib/db"

export default async function handler(req,res){

const db = await connectDB()

if(req.method === "GET"){

const students = await db.collection("students").find().toArray()

students.forEach(s=>{

const total =
s.mathematics +
s.english +
s.kiswahili +
s.integratedScience +
s.agriculture +
s.socialStudies +
s.pretechnicalStudies +
s.creativeArts +
s.religiousStudies

s.total = total
s.mean = total / 9

})

students.sort((a,b)=>b.total-a.total)

students.forEach((s,i)=> s.rank = i+1)

res.json(students)

}

if(req.method === "POST"){

await db.collection("students").insertOne(req.body)

res.json({message:"Saved"})

}

}
