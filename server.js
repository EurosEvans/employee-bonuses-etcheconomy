const express = require('express');
require('dotenv').config();
//const db=require('db')


const app = express();

const bodyParser = require('body-parser');
const logger = require('morgan');

const mongoose = require('mongoose');


//const solc = require('solc');
let web3 = require('web3');

let Tx=require('ethereumjs-tx');



let sgMail = require('@sendgrid/mail');

//let web3 = new Web3();


bonusAddress = "0x9ae200aa2c0314ef9ed217225bad5784941f9560";

bonusABI = [ { "constant": false, "inputs": [ { "name": "bonusType", "type": "string" }, { "name": "bonusTarget", "type": "uint256" }, { "name": "bonusEndYear", "type": "uint256" }, { "name": "bonusEndMonth", "type": "uint256" }, { "name": "bonusEndDay", "type": "uint256" }, { "name": "bonusToken", "type": "string" }, { "name": "bonusAmount", "type": "uint256" }, { "name": "bonusName", "type": "string" }, { "name": "ineq", "type": "uint256" } ], "name": "addBonus", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "k1", "type": "uint256" } ], "name": "addK", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "wallet", "type": "address" }, { "name": "token", "type": "bytes32" }, { "name": "payment", "type": "uint256" } ], "name": "addPaymentDetail", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "wallet", "type": "address" } ], "name": "addWallet", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "wallet", "type": "address" }, { "name": "bonusName", "type": "string" } ], "name": "addWalletBonus", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "wallet", "type": "address" }, { "name": "emailAddress", "type": "string" } ], "name": "addWalletEmail", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "payable": true, "stateMutability": "payable", "type": "fallback" }, { "constant": true, "inputs": [ { "name": "", "type": "bytes32" } ], "name": "Bonuses", "outputs": [ { "name": "bonusName", "type": "bytes32" }, { "name": "bonusType", "type": "bytes32" }, { "name": "bonusTarget", "type": "uint256" }, { "name": "bonusEndYear", "type": "uint256" }, { "name": "bonusEndMonth", "type": "uint256" }, { "name": "bonusEndDay", "type": "uint256" }, { "name": "bonusToken", "type": "bytes32" }, { "name": "bonusAmount", "type": "uint256" }, { "name": "bonusExists", "type": "bool" }, { "name": "ineq", "type": "uint8" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "uint256" } ], "name": "BonusNamesArray", "outputs": [ { "name": "bonusName", "type": "bytes32" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "uint256" } ], "name": "BonusNamesBytes", "outputs": [ { "name": "", "type": "bytes32" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "x", "type": "bytes32" } ], "name": "bytes32ToString", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "pure", "type": "function" }, { "constant": true, "inputs": [], "name": "getBonusNames", "outputs": [ { "name": "", "type": "bytes32[]" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "mybonusname", "type": "string" } ], "name": "getFreeWallets", "outputs": [ { "name": "", "type": "address[]" }, { "name": "", "type": "uint256" }, { "name": "", "type": "uint256" }, { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "mybonusname", "type": "string" } ], "name": "getFreeWalletsx", "outputs": [ { "name": "", "type": "address[]" }, { "name": "", "type": "uint256" }, { "name": "", "type": "uint256" }, { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "bonusname", "type": "string" } ], "name": "getNumberWalletBonusAllocations", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "getNumberWallets", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "wallet", "type": "address" } ], "name": "getWalletBonuses", "outputs": [ { "name": "bonusNames", "type": "bytes32[]" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "getWallets", "outputs": [ { "name": "", "type": "address[]" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "wallet", "type": "address" }, { "name": "bonusName", "type": "string" }, { "name": "targetReached", "type": "uint256" }, { "name": "endYear", "type": "uint256" }, { "name": "endMonth", "type": "uint256" }, { "name": "endDay", "type": "uint256" } ], "name": "isBonusPayable", "outputs": [ { "name": "payBonus", "type": "bool" }, { "name": "bonusAmount", "type": "uint256" }, { "name": "bonusToken", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "address" }, { "name": "", "type": "bytes32" } ], "name": "PaymentDetails", "outputs": [ { "name": "totalPaid", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "source", "type": "string" } ], "name": "stringToBytes32", "outputs": [ { "name": "result", "type": "bytes32" } ], "payable": false, "stateMutability": "pure", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "address" }, { "name": "", "type": "bytes32" } ], "name": "WalletBonuses", "outputs": [ { "name": "bonusExists", "type": "bool" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "address" }, { "name": "", "type": "uint256" } ], "name": "WalletBonusLists", "outputs": [ { "name": "bonusname", "type": "bytes32" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "address" } ], "name": "WalletDetails", "outputs": [ { "name": "walletEmailAddress", "type": "bytes32" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "uint256" } ], "name": "Wallets", "outputs": [ { "name": "", "type": "address" } ], "payable": false, "stateMutability": "view", "type": "function" } ]

payEtchAddress="0xd2195e67eb1ee37803d47bb8d5ab5c1a4bd91f70";

payEtchABI=[ { "constant": false, "inputs": [ { "name": "_apiKeyHash", "type": "bytes32" } ], "name": "payEtch", "outputs": [ { "name": "success", "type": "bool" } ], "payable": true, "stateMutability": "payable", "type": "function" }, { "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "constant": true, "inputs": [ { "name": "", "type": "bytes32" } ], "name": "ApprovedWallets", "outputs": [ { "name": "ClientWalletAddress", "type": "address" }, { "name": "keyExists", "type": "bool" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "address" } ], "name": "ClientWallets", "outputs": [ { "name": "clientBalance", "type": "uint256" }, { "name": "clientAccount", "type": "bool" }, { "name": "apiKeyHash", "type": "bytes32" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "walletAddress", "type": "address" } ], "name": "getBalance", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "walletAddress", "type": "address" } ], "name": "getClientBalance", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "mywallet", "outputs": [ { "name": "", "type": "address" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [ { "name": "", "type": "address" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "uint256" } ], "name": "validAPIKeys", "outputs": [ { "name": "", "type": "bytes32" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "authKey", "type": "bytes32" } ], "name": "validKey", "outputs": [ { "name": "", "type": "bool" }, { "name": "", "type": "address" } ], "payable": false, "stateMutability": "view", "type": "function" } ]


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

var userSchema = new mongoose.Schema({
  UserName : { type: String, default: null },
  EmailAddress : { type: String, default: null},
  Password : {type: String, default: null},
  Employee: {type: Boolean, default: null},
  Employer: {type: Boolean, default: null}
});

var codeDB = mongoose.model("codes", codeSchema);
var walletDB = mongoose.model("wallets", walletSchema);
var bonusnameDB = mongoose.model("bonusnames", bonusnameSchema);
var usersDB = mongoose.model("users", userSchema);

app.post("/api/save_code", function(req, res){
  var data = req.body.data;
  var type = req.body.type;
  var target = req.body.target;
  var address = req.body.address;
//  var cabi = req.body.cabi;
//  var bytecode = req.body.bytecode;
//  var hash = req.body.hash;


  var result = solc.compile(data, 1);
   web3local = new Web3();
  var hash = web3local.sha3(data);
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

app.post("/api/reguser", function(req, res){
  var username = req.body.username;
  var emailaddress = req.body.emailaddress;
  var password = req.body.password;
  var employee = req.body.employee;
  var employer = req.body.employer;

  var userCreate = new usersDB({
    UserName : username,
    EmailAddress : emailaddress,
    Password : password,
    Employee : employee,
    Employer : employer
  });

  usersDB.findOne({ UserName : username}, function(err, doc){
    if(doc == null){
      userCreate.save(function(err, doc){
        if(err) throw err;

         res.json({ message: "User Created", doc : doc, type: 'success'});
      });
    }else{
         res.json({ message: "Already Exists", doc : doc, type: 'error'});
    }
  });
});

app.post("/api/loginuser", function(req, res){
  var username = req.body.username;
  var password = req.body.password;

  usersDB.findOne({ $and: [{ UserName : username}, {Password : password} ]}, function(err, doc){
    if(doc == null){
         res.json({ message: "Login details are incorrect", doc : doc, type: 'error'});
    }else{
         res.json({ message: "Correct", doc : doc, type: 'correct'});
    }
  });
});


app.post("/api/checkuser", function(req, res){
  var username = req.body.username;


  usersDB.findOne({ UserName : username}, function(err, doc){
    if(doc == null){
         res.json({ message: "Login details are incorrect", doc : doc, type: 'error'});
    }else{
         res.json({ message: "Correct", doc : doc, type: 'correct'});
    }
  });
});


app.post("/api/get_info", function(req, res){
  var hash = req.body.hash;
  codeDB.findOne({ Hash : hash}, function(err, doc){
    if(err) res.json({ message: "Error", error: err, type: 'error' });

     res.json({ message: "Displayed Code", doc : doc, type: 'success' });
  });
});

app.post("/api/checkAuthKey",function(req,res){

  var authKey = req.body.authkey; //n
  var myAddress = "0x334701738C59229fa72801Ff18466D1D788fcA4B";
  var infuraApiKey =process.env.INFURA_API_KEY;
  var web3js = new web3(new web3.providers.HttpProvider("https://kovan.infura.io/v3/"+infuraApiKey));
  web3js.eth.defaultAccount = myAddress;
  var privateKey=new Buffer(process.env.PRIVATE_KEY, 'hex');
  var apiKeyHash = web3js.sha3(authKey);

  var contractEtch =  web3js.eth.contract(payEtchABI).at(payEtchAddress);

  var rTxn = {
      "to":payEtchAddress,
      "data":contractEtch.validKey.getData(apiKeyHash)}
  web3js.eth.call(rTxn, function(err, result) {

      if (!err) {
        outcome = result[65];
        outcomen=parseInt(outcome);
        if (outcomen==1) {
            res.json({ message2:apiKeyHash, approved:"yes", outcome:outcomen});
        } else {
            res.json({ message2:apiKeyHash, approved:"no", outcome:outcomen});
        }
      } else {
        outcome =false;
        res.json({ message1:apiKeyHash, error1:err, outcome1:outcome});
      }
  })





});

app.post("/api/addWalletEmail",function(req,res){

   var wallet = req.body.wallet; //n//
   var emailaddress = req.body.emailaddress; //n
   var authKey = req.body.authkey; //n
   var myAddress = "0x334701738C59229fa72801Ff18466D1D788fcA4B";
   var infuraApiKey =process.env.INFURA_API_KEY;
   var web3js = new web3(new web3.providers.HttpProvider("https://kovan.infura.io/v3/"+infuraApiKey));
   web3js.eth.defaultAccount = myAddress;
   var privateKey=new Buffer(process.env.PRIVATE_KEY, 'hex');
   var contractABI =bonusABI;
   var contractAddress =bonusAddress;
   //creating contract object
   var contract =  web3js.eth.contract(contractABI).at(contractAddress);
   var count;
   var nounce;
   var errcode="";
   var apiKeyHash = web3js.sha3(authKey);

   var contractEtch =  web3js.eth.contract(payEtchABI).at(payEtchAddress);


     var rTxn = {
         "to":payEtchAddress,
         "data":contractEtch.validKey.getData(apiKeyHash)}
     web3js.eth.call(rTxn, function(err, result) {
       if (!err) {
         outcome = result[65];
         outcomen=parseInt(outcome);
         if (outcomen==1) {

           web3js.eth.getTransactionCount(myAddress, function(err1, result1) {
             nounce=result1;
             var nounceHex = web3js.toHex(nounce);
             var rawTransaction = {
               "from":myAddress,
               "gasPrice":web3js.toHex(2*1e9),
               "gasLimit":web3js.toHex(920000),
               "to":contractAddress,
               "data":contract.addWalletEmail.getData(wallet, emailaddress),
               "nonce":nounceHex}
             var transaction = new Tx(rawTransaction);
             transaction.sign(privateKey);

             var serializedTx = transaction.serialize();
             web3js.eth.sendRawTransaction('0x'+serializedTx.toString('hex'),
             function(err2, hash) {
                 if (!err2) {
                   res.json({ message:hash});
                 } else {
                   res.json({ message:err2});
                 }
              })
             })


         } else {
            res.json({ message:"invalid auth"});
         }
        } else {
            res.json({ message:err});
        }
   })




});


app.post("/api/assignWalletBonus1",function(req,res){

     var wallet = req.body.wallet; //n//
   var bonusname = req.body.bonusname;  //n
   var emailaddress = req.body.emailaddress; //n
     res.json({ message:wallet, bonusname: bonusname, emailaddress: emailaddress});
});

//web3 = new Web3("https://ropsten.infura.io/v3/"+infuraApiKey);



app.post("/api/assignWalletBonus",function(req,res){

   var wallet = req.body.wallet; //n//
   var bonusname = req.body.bonusname;  //n
   var emailaddress = req.body.emailaddress; //n
   var authKey = req.body.authkey; //n

   var myAddress = "0x334701738C59229fa72801Ff18466D1D788fcA4B";

   var infuraApiKey =process.env.INFURA_API_KEY;
  // var privateKey = process.env.PRIVATE_KEY;

   var web3js = new web3(new web3.providers.HttpProvider("https://kovan.infura.io/v3/"+infuraApiKey));

   web3js.eth.defaultAccount = myAddress;
   var privateKey=new Buffer(process.env.PRIVATE_KEY, 'hex');

//   var toAddress = 'ADRESS_TO_SEND_TRANSACTION';

   //contract abi is the array that you can get from the ethereum wallet or etherscan
   var contractABI =bonusABI;
   var contractAddress =bonusAddress;
   //creating contract object
   var contract =  web3js.eth.contract(contractABI).at(contractAddress);
   var count;
   var nounce;
   var errcode="";

   var apiKeyHash = web3js.sha3(authKey);

   var contractEtch =  web3js.eth.contract(payEtchABI).at(payEtchAddress);


     var rTxn = {
         "to":payEtchAddress,
         "data":contractEtch.validKey.getData(apiKeyHash)}
     web3js.eth.call(rTxn, function(errx, resultx) {
       if (!errx) {
         outcome = resultx[65];
         outcomen=parseInt(outcome);
         if (outcomen==1) {

           web3js.eth.getTransactionCount(myAddress, function(err, result) {
                nounce=result;
                var nounceHex = web3js.toHex(nounce);
                var rawTransaction = {"from":myAddress,
                "gasPrice":web3js.toHex(2*1e9),
                "gasLimit":web3js.toHex(920000),
                "to":contractAddress,
                "data":contract.addWalletBonus.getData(wallet, bonusname),
                "nonce":nounceHex}

                var transaction = new Tx(rawTransaction);
                transaction.sign(privateKey);

                var serializedTx = transaction.serialize();
                web3js.eth.sendRawTransaction('0x'+serializedTx.toString('hex'), function(err1, hash) {
                   if (!err1) {
                       res.json({ message:hash});
                  }
                   else
                      res.json({ message:err1});
                });
           })

         } else {
            res.json({ message:"invalid auth"});
         }
        } else {
            res.json({ message:errx});
        }
   })


});


app.post("/api/addBonus",function(req,res){

 var token = req.body.token; //n//
  var bonus = req.body.bonus;  //n
  var target = req.body.target; //n
  var bonusName = req.body.bonusName; //n
  var bonusType = req.body.bonusType; //n
  var day = req.body.day;
  var month = req.body.month;
  var year = req.body.year;
  var ineq = req.body.ineq;
  var authKey = req.body.authkey; //n

   var myAddress = "0x334701738C59229fa72801Ff18466D1D788fcA4B";

   var infuraApiKey =process.env.INFURA_API_KEY;
  // var privateKey = process.env.PRIVATE_KEY;

   var web3js = new web3(new web3.providers.HttpProvider("https://kovan.infura.io/v3/"+infuraApiKey));

   web3js.eth.defaultAccount = myAddress;
   var privateKey=new Buffer(process.env.PRIVATE_KEY, 'hex');

//   var toAddress = 'ADRESS_TO_SEND_TRANSACTION';

   //contract abi is the array that you can get from the ethereum wallet or etherscan
   var contractABI =bonusABI;
   var contractAddress =bonusAddress;
   //creating contract object
   var contract =  web3js.eth.contract(contractABI).at(contractAddress);
   var count;
   var nounce;
   var errcode="";

   var apiKeyHash = web3js.sha3(authKey);

   var contractEtch =  web3js.eth.contract(payEtchABI).at(payEtchAddress);


   var rTxn = {
       "to":payEtchAddress,
       "data":contractEtch.validKey.getData(apiKeyHash)}
   web3js.eth.call(rTxn, function(errx, resultx) {
     if (!errx) {
       outcome = resultx[65];
       outcomen=parseInt(outcome);
       if (outcomen==1) {

         web3js.eth.getTransactionCount(myAddress, function(err, result) {
              nounce=result;
              var nounceHex = web3js.toHex(nounce);
              var rawTransaction = {"from":myAddress,
              "gasPrice":web3js.toHex(2*1e9),
              "gasLimit":web3js.toHex(920000),
              "to":contractAddress,
              "data":contract.addBonus.getData(bonusType, target, year, month, day, token, bonus, bonusName, ineq),
              "nonce":nounceHex}
              var transaction = new Tx(rawTransaction);
              transaction.sign(privateKey);
              var serializedTx = transaction.serialize();
              web3js.eth.sendRawTransaction('0x'+serializedTx.toString('hex'), function(err1, hash) {
                 if (!err1) {
                    res.json({ message:hash});
                }
                 else
                    res.json({ message:err1});
              });
         })

       } else {
          res.json({ message:"invalid auth"});
       }
      } else {
          res.json({ message:errx});
      }
   })










});

app.post("/api/addBonusT",function(req,res){

    var token = req.body.token; //n
    var bonus = req.body.bonus;  //n
    var target = req.body.target; //n
    var bonusName = req.body.bonusName; //n
    var bonusType = req.body.bonusType; //n
    var day = req.body.day;
    var month = req.body.month;
    var year = req.body.year;
    var ineq = req.body.ineq;


    var myAddress = "0x334701738C59229fa72801Ff18466D1D788fcA4B";

    var infuraApiKey = "xxx";
            var web3js = new web3(new web3.providers.HttpProvider("https://kovan.infura.io/v3/"+infuraApiKey));
            web3js.eth.defaultAccount = myAddress;
            var privateKey=new Buffer(process.env.PRIVATE_KEY, 'hex');

            var toAddress = 'ADRESS_TO_SEND_TRANSACTION';

            //contract abi is the array that you can get from the ethereum wallet or etherscan
            var contractABI =bonusABI;
            var contractAddress =bonusAddress;
            //creating contract object
            var contract =  web3js.eth.contract(contractABI).at(contractAddress);
            var count;
            var nounce;

           web3js.eth.getTransactionCount(myAddress, function(err, result) {
               console.log("result == " +result);
               nounce=result;
               var nounceHex = web3js.toHex(nounce);

                var rawTransaction = {"from":myAddress,
                "gasPrice":web3js.toHex(2*1e9),
                "gasLimit":web3js.toHex(920000),
                "to":contractAddress,
    //            "value":"0x0",
                "data":contract.addBonus.getData(bonusType, target, year, month, day, token, bonus, bonusName, ineq),
                "nonce":nounceHex}

                //creating tranaction via ethereumjs-tx
                var transaction = new Tx(rawTransaction);
                //signing transaction with private key
                transaction.sign(privateKey);
          var errcode;
               var serializedTx = transaction.serialize();
               web3js.eth.sendRawTransaction('0x'+serializedTx.toString('hex'), function(err1, hash) {
               if (!err1)
                  errorcode=hash;
               else errorcode=err1;
               });


            })




    });


app.post("/api/sendmail", function(req, res){

  var emailfrom = req.body.emailfrom;
  var emailto = req.body.emailto;
  var subject = req.body.subject;
  var text = req.body.text;

var s = '<p>'+text+'</p>';
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    //  sgMail.setApiKey(key);
      const msg = {
      to: emailto,
      from: emailfrom,
      subject: subject,
      text: text,
      html: s,
      };
      sgMail.send(msg);

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
  console.log("App starts at port :" +80);
});
