import { MongoClient } from "mongodb" ;

async function handler(req, res) {
    if (req.method ==='POST'){
        const data =req.body;
        
        const client = await MongoClient.connect("mongodb+srv://morf:11121377@cluster0.in7cw8o.mongodb.net/meetup?retryWrites=true&w=majority")
        
        const db = client.db();
        
        const meetupsCollection = db.collection('meetup');
        
        const result = await meetupsCollection.insertOne(data)
    
        console.log(result);

        client.close();

        res.status(201).json({ massege:"meetup inserted" });

    }
}

export default handler;