const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const logger = require('morgan');

const mongoose = require('mongoose');

const solc = require('solc');
let Web3 = require('web3');

let web3 = new Web3();


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

var walletSchema = new mongoose.Schema({
  Wallet : { type: String, default: null },
  Email : { type: String, default: null}
});
var bonusnameSchema = new mongoose.Schema({
  BonusName : { type: String, default: null },
});

var codeSchema = new mongoose.Schema({
  Code : { type: String, default: null },
  Type : { type: String, default: null},
  Target : {type: String, default: null},
  Address : {type: String, default: null},
  cABI : {type: String, default: null},
  Bytecode : {type: String, default: null},
  Hash : { type: String, default: null, uniq: true }
});

var codeDB = mongoose.model("codes", codeSchema);
var walletDB = mongoose.model("wallets", walletSchema);
var bonusnameDB = mongoose.model("bonusnames", bonusnameSchema);


app.post("/api/save_code", function(req, res){
  var data = req.body.data;
  var type = req.body.type;
  var target = req.body.target;
  var address = req.body.address;
//  var cabi = req.body.cabi;
//  var bytecode = req.body.bytecode;
//  var hash = req.body.hash;


  var result = solc.compile(data, 1);
  var hash = web3.sha3(data);
  var bytecode = result.contracts[":greeter"].bytecode;
  var cabi = result.contracts[":greeter"].interface;

  var codeCreate = new codeDB({
    Code : data,
    Type : type,
    Target : target,
    Address : address,
    cABI : cabi,
    Bytecode : bytecode,
    Hash : hash
  });

  codeDB.findOne({ Hash : hash}, function(err, doc){
    if(doc == null){
      codeCreate.save(function(err, doc){
        if(err) throw err;

         res.json({ message: "Saved", doc : doc, type: 'success'});
      });
    }else{
         res.json({ message: "Data exists", doc : doc, type: 'error'});
    }
  });
});

app.post("/api/save_wallet", function(req, res){
  var wallet = req.body.wallet;
  var email = req.body.email;

  var walletCreate = new walletDB({
    Wallet : wallet,
    Email : email,
  });

  walletDB.findOne({ Wallet : wallet}, function(err, doc){
    if(doc == null){
      walletCreate.save(function(err, doc){
        if(err) throw err;

         res.json({ message: "Saved Wallet", doc : doc, type: 'success'});
      });
    }else{
         res.json({ message: "Wallet exists", doc : doc, type: 'error'});
    }
  });
});


app.post("/api/save_bonusname", function(req, res){
  var bonusname = req.body.bonusname;

  var bonusnameCreate = new bonusnameDB({
    BonusName : bonusname
  });

  bonusnameDB.findOne({ BonusName : bonusname}, function(err, doc){
    if(doc == null){
      bonusnameCreate.save(function(err, doc){
        if(err) throw err;

         res.json({ message: "Saved Bonus Name", doc : doc, type: 'success'});
      });
    }else{
         res.json({ message: "Name exists", doc : doc, type: 'error'});
    }
  });
});


app.post("/api/update_code", function(req, res){
  var hash = req.body.hash;
  var address = req.body.address;

  var query = { Hash : hash};
  codeDB.findOne({ Hash : hash}, function(err, doc){
    if(doc != null){
      codeDB.update(query,{Address: address}, function(err, doc){
        if(err) throw err;
         res.json({ message: "Updated", doc : doc, type: 'success'});
      });
    }else{
         res.json({ message: "No Record", doc : doc, type: 'error'});
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

     res.json({ message: "Displayed Code", doc : doc, type: 'success' });
  });
});

app.post("/api/get_allcontracts", function(req, res){
//  var hash = req.body.hash;
  codeDB.find( function(err, doc){
    if(err) res.json({ message: "Error", error: err, type: 'error' });

     res.json({ message: "Contracts Read", doc : doc, type: 'success' });
  });
});

app.post("/api/get_bonusnames", function(req, res){
//  var hash = req.body.hash;
  bonusnameDB.find( function(err, doc){
    if(err) res.json({ message: "Error", error: err, type: 'error' });

     res.json({ message: "Bonuses Read", doc : doc, type: 'success' });
  });
});

app.post("/api/get_wallets", function(req, res){
//  var hash = req.body.hash;
  walletDB.find( function(err, doc){
    if(err) res.json({ message: "Error", error: err, type: 'error' });

     res.json({ message: "Wallets Read", doc : doc, type: 'success' });
  });
});


app.use(express.static(__dirname + "/public" ));

app.listen(3000, function(){
  console.log("App starts at port :" +3000);
});
