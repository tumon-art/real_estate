import dbConnect from "../../lib/dbConnect";
import User from "../../models/User"

export default async function handler (req, res) {
    const { method } = req

    await dbConnect()

    switch (method) {
        // GET REQ
        case 'GET':
            try{
                const users = await User.find({});
                res.status(200).json({success:true, data:users})
            } catch(err){
                res.status(400).json({success:false})
            }
            break

        // POST REQ
        case 'POST':
            try{
                const user = await User.create(req.body);
                res.status(201).json({ success: true, data: user })
            } catch(err){
                res.status(400).json({ success: false })
            }
            break
        
        default:
            res.status(400).json({ success: false })
            
            break
    }
}