const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

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


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.get('/api/articles', (req, res) =>{

  const myArticles =  [
    {
      "Title": "The Spider-man Menace",
      "Author": "Jack Dyke",
      "Text": "Hello There",
      "Image": "https://i.guim.co.uk/img/media/892fa5c71f29ce088247397726f32ca83b8231d0/79_0_3386_2031/master/3386.jpg?width=700&quality=85&auto=format&fit=max&s=d73c05f7beca6832352059611aa2a4af"
    }
  ];
  res.json({articles:myArticles});
})

//post method that logs a message and the data that we put in on our create page
app.post('/api/articles', (req, res) => {
  console.log('Article posted');
  console.log(req.body)
  console.log(req.body.title);
  console.log(req.body.author);
  console.log(req.body.text);
  console.log(req.body.image);
  //creating our Article model
  // ArticleModel.create({
  //   title: req.body.title,
  //   author: req.body.author,
  //   text: req.body.text,
  //   image: req.body.image
  // });
  res.send("Item added");
});

app.listen(port, () =>{
  console.log(`app listening at http:localhost:${port}`)
})