const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000
require('dotenv').config()


// middle wares
app.use(cors());
app.use(express.json());






const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.feigjta.mongodb.net/?retryWrites=true&w=majority`;
console.log(uri)
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run(){
    try{
        const allProjects = client.db('allProjects').collection('allProjects');
        


        app.get('/allProjects', async (req, res) => {
            let query = {};
            const cursor = allProjects.find(query);
            const result = await cursor.toArray();
            res.send(result);
        })

        app.get('/allProjects/:id', async (req, res) => {
            const id  = req.params.id ;
            const query = {_id: ObjectId(id)} ;
            const result = await allProjects.findOne(query);
            res.send(result);
        })
    }
    finally{

    }
}

run().catch(err => console.error(err))











app.get('/' , (req, res) => {
    res.send('running server personal portfolio')
})


app.listen(port , () => {
    console.log(`listening personal portfolio at ${port}`)
})