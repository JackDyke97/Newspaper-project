const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const path = require('path');

//allows us to use cors
app.use(cors());
//allows the use of database functions
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,POST, PUT, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//configuration lines for where we find out build folder and static files
app.use(express.static(path.join(__dirname,'../build')));
app.use('/static', express.static(path.join(__dirname, 'build//static')))

//allows the use of bodyParser middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
//Connecting to the mongoose db
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

//caling our api/articles page
app.get('/api/articles', (req, res) => {
  ArticleModel.find((err, data) => {
    res.json(data);
  });;
});

//method thats reads data from the database
app.get("/api/articles/:id", (req, res) => {
  console.log(req.params.id);

  ArticleModel.findById(req.params.id, (err, data) => {
    res.json(data);
  })
})
//allows us to update the data from our database
app.put('/api/articles/:id', (req, res) => {
  console.log("Update Article: "+req.params.id);
  console.log(req.body);

  ArticleModel.findByIdAndUpdate(req.params.id, req.body, {new:true},
    (err, data) => {
      res.send(data);
    })
})
//allows us to delete data from our database
app.delete('/api/articles/:id', (req, res) => {
  console.log("Delete Article: " + req.params.id);
  ArticleModel.findByIdAndDelete(req.params.id, (err, data) => {
    res.send(data);
  } )
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

//send the index.html file when it gets a html get request
app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname+'/../build/index.html'));
});

//so our app is listening at the port we assigned
app.listen(port, () => {
  console.log(`app listening at http:localhost:${port}`)
})