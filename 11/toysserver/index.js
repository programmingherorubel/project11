const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const express = require('express')
const cors = require('cors')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 9000
const uri = `mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASSWORD}@cluster0.tdolxqi.mongodb.net/?retryWrites=true&w=majority`;


app.use(cors())
app.use(express.json())




const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // await client.connect();
    
    const database = client.db("Toys");
    const toysCollection = database.collection("addtoys");
    // indexing 
    const indexKey = {name: 1,sallerName: 1}
    const indexOptions = {maltipleFinding:'webfinding'}
    // const result = await toysCollection.createIndex(indexKey,indexOptions);

      app.get('/searchvalue/:text',async(req,res)=>{
        const searchText = req.params.text
        const result = await toysCollection.find({
          $or:[
            {name:{$regex:searchText ,$options:"i"}},
            {sallerName:{$regex:searchText ,$options:"i"}}
          ]
        }).toArray()
        res.send(result)
      })


      app.post('/addtoys',async(req,res)=>{
        const addtoys = req.body 
        addtoys.createdAt = new Date()
        const result = await toysCollection.insertOne(addtoys)
        console.log(result)
        res.send(result)
      })

      app.get('/addtoys',async(req,res)=>{
        const allToys = await toysCollection.find().sort({createdAt: -1}).toArray()
        res.send(allToys)
      })
      app.get('/addtoys/:id',async(req,res)=>{
        const id = req.params.id
        const query = {_id:new ObjectId(id)}
        const sigleToys = await toysCollection.findOne(query)
        res.send(sigleToys)
      })


     
      app.get('/mytoys/:email',async(req,res)=>{
        console.log(req.params.sort)
        const query = {email:req.params.email}
        const singleEmailInfo = await toysCollection.find(query).sort({price:-1}).toArray()
        res.send(singleEmailInfo)
      })

      app.delete('/mytoys/:id',async(req,res)=>{
        const id = req.params.id 
        const query = {_id:new ObjectId(id)}
        const result = await toysCollection.deleteOne(query)
        res.send(result)
      })


      app.put('/addtoys/:id',async(req,res)=>{
          const id = req.params.id
          const update = req.body 
          const query = {_id:new ObjectId(id)}
          const options = {upsert:true}
          const updateDocuments = {
              $set:{
                name:update.name,
                sallerName:update.sallerName,
                category:update.category,
                price:update.price,
                quantity:update.quantity, 
                description:update.description,
                ratings:update.ratings, 
                imgUrl:update.imgUrl
              }
            
          } 
          const result = await toysCollection.updateOne(query,updateDocuments,options)
          res.send(result)
      })

      // ekhane limit dekhate hobe , ei data all toys e dekhano hoise 
      app.get('/alltoys',async (req,res)=>{
        const information = await toysCollection.find({}).sort().limit(20).toArray()
        res.send(information)
      })

  
      await client.db("admin").command({ ping: 1 });
    console.log('database Connected')
  } finally {
    // delete 
    // await client.close();
  }
}
run().catch(console.dir);



app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})