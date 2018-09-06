const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const logger = require('morgan');

const mongoose = require('mongoose');

const solc = require('solc');

mongoose.connect('mongodb://127.0.0.1:27017/mydb');

app.use(function(req, res, next){
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization, x-access-token');
  next();
});


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.get("/api/ping", function(req, res){
  res.json({ messaage: "pong" });
});

var codeSchema = new mongoose.Schema({
  Code : { type: String, default: null },
  Hash : { type: String, default: null, uniq: true }
});

var codeDB = mongoose.model("codes", codeSchema);

app.post("/api/save_code", function(req, res){
  var data = req.body.data;
  var hash = req.body.hash;

  var codeCreate = new codeDB({
    Code : data,
    Hash : hash
  });

  codeDB.findOne({ Hash : hash}, function(err, doc){
    if(doc == null){
      codeCreate.save(function(err, doc){
        if(err) throw err;

         res.json({ message: "Successfully saved", doc : doc, type: 'success'});
      });
    }else{
         res.json({ message: "Data exists", doc : doc, type: 'error'});
    }
  });
});

app.get("/api/codes", function(req, res){
  codeDB.find({}, function(err, doc){
    if(err) res.json({ message: "Error", error: err, type: 'error' });

     res.json({ message: "All Code", doc : doc, type: 'success' });
  });
});

app.post("/api/get_info", function(req, res){
  var hash = req.body.hash;
  codeDB.findOne({ Hash : hash}, function(err, doc){
    if(err) res.json({ message: "Error", error: err, type: 'error' });

     res.json({ message: "All Code", doc : doc, type: 'success' });
  });
});

app.use(express.static(__dirname + "/public" ));

app.listen(3000, function(){
  console.log("App starts at port :" +3000);
});
