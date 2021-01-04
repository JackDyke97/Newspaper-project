const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
//so we use cors every time
app.use(cors());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,POST, PUT, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(bodyParser.urlencoded({extended: false}))

app.use(bodyParser.json())
//connecting to our mongoose database
const myConnectionString =
  "mongodb+srv://admin:admin@cluster0.rrthq.mongodb.net/newspaper?retryWrites=true&w=majority";
mongoose.connect(myConnectionString, { useNewUrlParser: true });
//creating our schema
const Schema = mongoose.Schema;;
//defining our schema 
var articleSchema = new Schema({
    title: String,
    author: String,
    text: String,
    image: String
})
//creating a new model for out database
var ArticleModel = mongoose.model("article", articleSchema)

//calling our api/Article page
 app.get("/api/articles", (req, res) => {
ArticleModel.find((err, data)=>{
  res.json(data);
});;
});

//method thats reads data from the database and display, edit and delete different parts of our app
app.get("/api/articles/:id", (req, res) => {
    console.log(req.params.id);

     ArticleModel.findById(req.params.id, (err, data) =>{
       res.json(data);
     })
})

app.put('/api/articles/:id', (req, res)=>{
  console.log("Update Article: "+req.params.id);
  console.log(req.body);

  ArticleModel.findByIdAndUpdate(req.params.id,req.body, {new:true},
    (err,data)=>{
      res.send(data);
    })
})

app.delete('/api/articles/:id', (req, res)=>{
  console.log("Delete Article: "+req.params.id);

  ArticleModel.findByIdAndDelete(req.params.id, (err, data)=> {
      res.send(data);
    }
)
  });

//post method that logs a message and the data that we put in on our create page
app.post('/api/articles', (req, res) => {
    console.log('Article posted');
    console.log(req.body)
    console.log(req.body.title);
    console.log(req.body.author);
    console.log(req.body.text);
    console.log(req.body.image);
//creating our Article model
ArticleModel.create({
    title: req.body.title,
    author: req.body.author,
    text: req.body.text,
    image: req.body.image
});

  res.send("Item added");
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});