import dbConnect from "../../lib/dbConnect";
import Users from "../../models/users"

export default async function handler (req, res) {
    const { method } = req

    await dbConnect()

    switch (method) {
        // GET REQ
        case 'GET':
            try{

                const data = await Users.find({});
                res.status(200).json({success:true, data:data })
            } catch(err){
                res.status(400).json({success:false})
                
            }
            break

        // POST REQ
        case 'POST':
            try{ 
                const data = await Data.create(req.body);
                res.status(201).json({ success: true, data: data })
            } catch(err){
                res.status(400).json({ success: false })
            }
            break
        
        default:
            res.status(400).json({ success: false })
            
            break
    }
}