import dbConnect from "../../lib/dbConnect";
import Data from "../../models/"

export default async function handler (req, res) {
    const { method } = req

    await dbConnect()

    switch (method) {
        // GET REQ
        case 'GET':
            try{
                const array = await Data.find({});
                res.status(200).json({success:true, data:array })
            } catch(err){
                res.status(400).json({success:false})
            }
            break

        // POST REQ
        case 'POST':
            try{ console.log(req.body)
                const array = await Data.create(req.body);
                res.status(201).json({ success: true, data: array })
            } catch(err){
                res.status(400).json({ success: false })
            }
            break
        
        default:
            res.status(400).json({ success: false })
            
            break
    }
}