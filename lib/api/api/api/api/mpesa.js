export default async function handler(req,res){

if(req.method === "POST"){

const {phone, amount} = req.body

// STK push request would be sent here
// using Safaricom Daraja API credentials

res.json({
message:"STK Push initiated",
phone,
amount
})

}

}
