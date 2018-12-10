var express = require("express");
var app = express();
var bodyParser       = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/api/makePayment",function(req,res){

  var payAmount = req.body.payAmount; //n//
  var payeeAccount = req.body.payeeAccount; //n
  var freqPayment = req.body.freqPayment; //n

Eos = require('eosjs')

// Default configuration
config = {
  chainId: 'cf057bbfb72640471fd910bcb67639c22df9f92470936cddc1ade0e2f2e7dc4f', // 32 byte (64 char) hex string
  keyProvider: ['5Hy8sLWjr1pqUUTLs4CfoAjBu74MfKyQMQL8x6w9rawbcfEchGH'], // WIF string or array of keys..
  httpEndpoint: 'http://127.0.0.1:8888',
  expireInSeconds: 60,
  broadcast: true,
  verbose: false, // API activity
  sign: true,
  authorization: 'john11@active'
}

eos = Eos(config)
payAmountStr = payAmount + '.0000 ETCH';
//res.json({ message:payAmountStr, message1:payeeAccount});

eos.transfer('john11', payeeAccount, payAmountStr, '', function (err, result) {
    if (err) {
	    res.json({ message:err});
    } else {
	    res.json({message:result});
    }

});



});

app.listen(3000, function(){
    console.log('listening on *:3000');
});
