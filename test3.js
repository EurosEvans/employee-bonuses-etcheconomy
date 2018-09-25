//       if(data.type == 'success'){
var exampleSource = "";
var optimize = 1;
var compiler;
var web3provider;
//var mongoose=require('mongoose');

address = "0x1e229638a668cac94bc6269fe7b0cb177ee9de70";

abi = [ { "constant": false, "inputs": [ { "name": "bonusType", "type": "string" }, { "name": "bonusTarget", "type": "uint256" }, { "name": "bonusEndYear", "type": "uint256" }, { "name": "bonusEndMonth", "type": "uint256" }, { "name": "bonusEndDay", "type": "uint256" }, { "name": "bonusToken", "type": "string" }, { "name": "bonusAmount", "type": "uint256" }, { "name": "bonusName", "type": "string" }, { "name": "ineq", "type": "uint256" } ], "name": "addBonus", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "k1", "type": "uint256" } ], "name": "addK", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "wallet", "type": "address" }, { "name": "token", "type": "bytes32" }, { "name": "payment", "type": "uint256" } ], "name": "addPaymentDetail", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "wallet", "type": "address" } ], "name": "addWallet", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "wallet", "type": "address" }, { "name": "bonusName", "type": "string" } ], "name": "addWalletBonus", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "wallet", "type": "address" }, { "name": "emailAddress", "type": "string" } ], "name": "addWalletEmail", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "payable": true, "stateMutability": "payable", "type": "fallback" }, { "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "constant": true, "inputs": [ { "name": "", "type": "bytes32" } ], "name": "Bonuses", "outputs": [ { "name": "bonusName", "type": "bytes32" }, { "name": "bonusType", "type": "bytes32" }, { "name": "bonusTarget", "type": "uint256" }, { "name": "bonusEndYear", "type": "uint256" }, { "name": "bonusEndMonth", "type": "uint256" }, { "name": "bonusEndDay", "type": "uint256" }, { "name": "bonusToken", "type": "bytes32" }, { "name": "bonusAmount", "type": "uint256" }, { "name": "bonusExists", "type": "bool" }, { "name": "ineq", "type": "uint8" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "uint256" } ], "name": "BonusNamesArray", "outputs": [ { "name": "bonusName", "type": "bytes32" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "uint256" } ], "name": "BonusNamesBytes", "outputs": [ { "name": "", "type": "bytes32" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "x", "type": "bytes32" } ], "name": "bytes32ToString", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "pure", "type": "function" }, { "constant": true, "inputs": [], "name": "getBonusNames", "outputs": [ { "name": "", "type": "bytes32[]" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "getNumberWallets", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "wallet", "type": "address" } ], "name": "getWalletBonuses", "outputs": [ { "name": "bonusNames", "type": "bytes32[]" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "getWallets", "outputs": [ { "name": "", "type": "address[]" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "wallet", "type": "address" }, { "name": "bonusName", "type": "string" }, { "name": "targetReached", "type": "uint256" }, { "name": "endYear", "type": "uint256" }, { "name": "endMonth", "type": "uint256" }, { "name": "endDay", "type": "uint256" } ], "name": "isBonusPayable", "outputs": [ { "name": "payBonus", "type": "bool" }, { "name": "bonusAmount", "type": "uint256" }, { "name": "bonusToken", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "address" }, { "name": "", "type": "bytes32" } ], "name": "PaymentDetails", "outputs": [ { "name": "totalPaid", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "source", "type": "string" } ], "name": "stringToBytes32", "outputs": [ { "name": "result", "type": "bytes32" } ], "payable": false, "stateMutability": "pure", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "address" }, { "name": "", "type": "bytes32" } ], "name": "WalletBonuses", "outputs": [ { "name": "bonusExists", "type": "bool" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "address" }, { "name": "", "type": "uint256" } ], "name": "WalletBonusLists", "outputs": [ { "name": "bonusname", "type": "bytes32" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "address" } ], "name": "WalletDetails", "outputs": [ { "name": "walletEmailAddress", "type": "bytes32" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "uint256" } ], "name": "Wallets", "outputs": [ { "name": "", "type": "address" } ], "payable": false, "stateMutability": "view", "type": "function" } ]

var rewardDate;

var selectedDate;

var selectedCheckDate;

function myBonusLink() {
  window.location.replace('http://test.moynet.co/employee.html');
}

function memberLoginLink() {
    window.location.replace('http://test.moynet.co/employer.html');
}

function selectEmployeeBonus() {
    var bonusname = document.getElementById("employeebonuses").value;

    getMyBonusBlockchain(bonusname);



  //  <td><label type="input" id="mybonustype"></label></td>
  //  <td><label type="input" id="mybonusdate"></label></td>
  //  <td><label type="input" id="mybonustarget"></label></td>
  //  <td><label type="input" id="mybonuspayable"></label></td>
  //  <td><label type="input" id="mybonustoken"></label></td>


}

function employeeBonus() {
    var myWallet = document.getElementById("employeeWallet").value;

    getEmployeeBonusesBlockchain(myWallet);
    getEmployeeBlockchain(myWallet);
}


function getSourceCode() {
    return document.getElementById("source").value;
}

function selIndDom() {
    document.getElementById("selBonusType").value="Individual";
}

function selTeamDom() {
    document.getElementById("selBonusType").value="Team";
}

function selCompanyDom() {
    document.getElementById("selBonusType").value="Company";
}


function selIndDom2() {
    document.getElementById("selBonusType2").value="Individual";
}

function selTeamDom2() {
    document.getElementById("selBonusType2").value="Team";
}

function selCompanyDom2() {
    document.getElementById("selBonusType2").value="Company";
}





function addBonusCondition() {
  var token = document.getElementById("selToken").value;
  var bonus = document.getElementById("selBonus").value;
  var targetEntry = document.getElementById("selTarget").value;
  var bonusName = document.getElementById("selBonusName").value;
  var bonusType = document.getElementById("selBonusType").value;
  var target = targetEntry;

if (token == "ETH") {
    target=  web3.toWei(targetEntry);
}


  ineq = 1;
  if (bonusType=="Team") {
    ineq = 0;
  }

//  var selDate = document.getElementById("datepicker").value;
  var arrayDate;
  document.getElementById("eMessage").style.visibility="hidden";
  document.getElementById("eMessage").innerHTML="";

  if (selectedDate!=undefined && selectedDate!=null) {
    arrayDate = selectedDate.split("/");
  } else {
    document.getElementById("eMessage").style.visibility="visible";
    document.getElementById("eMessage").innerHTML="Date Wrong";
    document.getElementById("eMessage").classList.add("alert-danger");
    document.getElementById("eMessage").classList.remove("alert-info");
  }
  var day; var month; var year;
  if (arrayDate!=undefined && arrayDate!=null) {
      if (arrayDate.length > 2) {
          month = arrayDate[0];
          day = arrayDate[1];
          year = arrayDate[2];
      } else {
        document.getElementById("eMessage").style.visibility="visible";
        document.getElementById("eMessage").innerHTML="Date Wrong";
        document.getElementById("eMessage").classList.add("alert-danger");
        document.getElementById("eMessage").classList.remove("alert-info");
      }
  } else {
    document.getElementById("eMessage").style.visibility="visible";
    document.getElementById("eMessage").innerHTML="Date Wrong";
    document.getElementById("eMessage").classList.add("alert-danger");
    document.getElementById("eMessage").classList.remove("alert-info");
  }


  var eBonus = checkBonusNameData(token, bonus, target, bonusName, bonusType);

if (eBonus) {
    savebonusname(bonusName);
    document.getElementById("eMessage").style.visibility="visible";
    document.getElementById("eMessage").innerHTML="Bonus Condition added";
    document.getElementById("eMessage").classList.remove("alert-danger");
    document.getElementById("eMessage").classList.add("alert-info");
    saveBonusBlockchain(token, bonus, target, bonusName,
      bonusType, day, month, year, ineq);
} else {
  document.getElementById("eMessage").style.visibility="visible";
  document.getElementById("eMessage").innerHTML="Values are wrong";
  document.getElementById("eMessage").classList.add("alert-danger");
  document.getElementById("eMessage").classList.remove("alert-info");

}


}

function isValid(testStr) {
  if (testStr == "") return false;
  if (testStr == undefined) return false;
  if (testStr == null) return false;
  return true;
}






function addBonusCondition2() {
  var token = document.getElementById("selToken2").value;
  var bonus = document.getElementById("selBonus2").value;
  var target = document.getElementById("selTarget2").value;
  var bonusName = document.getElementById("selBonusName2").value;
  var bonusType = document.getElementById("selBonusType2").value;

  ineq = 1;
  if (bonusType=="Team") {
    ineq = 0;
  }

//  var selDate = document.getElementById("datepicker").value;
  var arrayDate;
  document.getElementById("eMessage2").style.visibility="hidden";
  document.getElementById("eMessage2").innerHTML="";

  if (rewardDate!=undefined && rewardDate!=null) {
    arrayDate = rewardDate.split("/");
  } else {
    document.getElementById("eMessage2").style.visibility="visible";
    document.getElementById("eMessage2").innerHTML="Date Wrong";
    document.getElementById("eMessage2").classList.add("alert-danger");
    document.getElementById("eMessage2").classList.remove("alert-info");
  }
  var day; var month; var year;
  if (arrayDate!=undefined && arrayDate!=null) {
      if (arrayDate.length > 2) {
          month = arrayDate[0];
          day = arrayDate[1];
          year = arrayDate[2];
      } else {
        document.getElementById("eMessage2").style.visibility="visible";
        document.getElementById("eMessage2").innerHTML="Date Wrong";
        document.getElementById("eMessage2").classList.add("alert-danger");
        document.getElementById("eMessage2").classList.remove("alert-info");
      }
  } else {
    document.getElementById("eMessage2").style.visibility="visible";
    document.getElementById("eMessage2").innerHTML="Date Wrong";
    document.getElementById("eMessage2").classList.add("alert-danger");
    document.getElementById("eMessage2").classList.remove("alert-info");
  }


  var eBonus = checkBonusNameData(token, bonus, target, bonusName, bonusType);

if (eBonus) {
    savebonusname(bonusName);
    document.getElementById("eMessage2").style.visibility="visible";
    document.getElementById("eMessage2").innerHTML="Bonus Condition added";
    document.getElementById("eMessage2").classList.remove("alert-danger");
    document.getElementById("eMessage2").classList.add("alert-info");
    saveBonusBlockchain(token, bonus, target, bonusName,
      bonusType, day, month, year, ineq);
} else {
  document.getElementById("eMessage2").style.visibility="visible";
  document.getElementById("eMessage2").innerHTML="Values are wrong";
  document.getElementById("eMessage2").classList.add("alert-danger");
  document.getElementById("eMessage2").classList.remove("alert-info");

}


}

function isValid(testStr) {
  if (testStr == "") return false;
  if (testStr == undefined) return false;
  if (testStr == null) return false;
  return true;
}




















function checkBonusNameData(token,
  bonus, target, bonusName, bonusType) {

   if (!isValid(token)) return false;
   if (!isValid(bonus)) return false;
   if (!isValid(target)) return false;
   if (!isValid(bonusName)) return false;
   if (!isValid(bonusType)) return false;

   if (isNaN(bonus)) return false;
   if (isNaN(target)) return false;
   return true;

}

function selDate2() {

//    $( "#datepicker" ).datepicker();
      rewardDate = document.getElementById("datepicker2").value;
      //dd/mm/yyyy

}


function selDate() {

//    $( "#datepicker" ).datepicker();
      selectedDate = document.getElementById("datepicker").value;
      //dd/mm/yyyy

}
function selCheckDate() {

//    $( "#datepicker" ).datepicker();
      selectedCheckDate = document.getElementById("datepickercheck").value;
      //dd/mm/yyyy

}


function marryWallet() {

   var bonusName = document.getElementById("displayBonusName").innerHTML;
   var readwallet = document.getElementById("readwallet").innerHTML;
   assignWalletBonus(readwallet, bonusName);
}

function selectContract() {
    var mycontractHash = document.getElementById("contracts").value;
    checkSourceCode(mycontractHash);
}
function selectWallet() {
    var wallet = document.getElementById("wallets").value;
    document.getElementById("readwallet").innerHTML = wallet;
}
function selectBonusName() {
    var bonusname = document.getElementById("listBonusNames").value;
  //  document.getElementById("readwallet").value = wallet;
    getBonusBlockchain(bonusname);

}


function getBonusBlockchain(bonusname) {
  web3 = new Web3(web3.currentProvider);
  web3provider=web3;
  web3provider=new Web3(web3.currentProvider);
  web3.eth.defaultAccount = web3.eth.accounts[0];

  var bonusnameBytes32 = web3.fromAscii(bonusname);

  var contract = web3.eth.contract(abi);
  var instanceContract = contract.at(address);

  instanceContract.Bonuses(
       bonusnameBytes32
     , function (e, result){
        console.log(result);
        var x = popBonusFields(result, web3);
  });

}

function getMyBonusBlockchain(bonusname) {
  web3 = new Web3(web3.currentProvider);
  web3provider=web3;
  web3provider=new Web3(web3.currentProvider);
  web3.eth.defaultAccount = web3.eth.accounts[0];

  var bonusnameBytes32 = web3.fromAscii(bonusname);

  var contract = web3.eth.contract(abi);
  var instanceContract = contract.at(address);

  instanceContract.Bonuses(
       bonusnameBytes32
     , function (e, result){
        console.log(result);
        var x = popMyBonusFields(result, web3);
  });

}


//getWalletBonusesBlockchain

function selectWalletBonuses() {
  var bonus =document.getElementById("walletbonuses").value;
  document.getElementById("checkbonus").innerHTML=bonus;

}

function getWalletBonusesBlockchain(wallet) {
  web3 = new Web3(web3.currentProvider);
  web3provider=web3;
  web3provider=new Web3(web3.currentProvider);
  web3.eth.defaultAccount = web3.eth.accounts[0];

  var contract = web3.eth.contract(abi);
  var instanceContract = contract.at(address);
  document.getElementById("checkbonus").innerHTML="";
  instanceContract.getWalletBonuses(
       wallet
     , function (e, result){
        console.log(result);
        populateWalletBonuses(wallet, result, web3);
  });

}

function getEmployeeBonusesBlockchain(wallet) {
  web3 = new Web3(web3.currentProvider);
  web3provider=web3;
  web3provider=new Web3(web3.currentProvider);
  web3.eth.defaultAccount = web3.eth.accounts[0];

  var contract = web3.eth.contract(abi);
  var instanceContract = contract.at(address);
  //document.getElementById("checkbonus").innerHTML="";
  instanceContract.getWalletBonuses(
       wallet
     , function (e, result){
        console.log(result);
        populateEmployeeBonuses(result, web3);
  });

}

function getWalletBlockchain(wallet) {
  web3 = new Web3(web3.currentProvider);
  web3provider=web3;
  web3provider=new Web3(web3.currentProvider);
  web3.eth.defaultAccount = web3.eth.accounts[0];

  var contract = web3.eth.contract(abi);
  var instanceContract = contract.at(address);

  instanceContract.WalletDetails(
       wallet
     , function (e, result){
        console.log(result);
        var emailaddr= web3.toAscii(result);
        document.getElementById("allwalletemail").innerHTML = emailaddr;
  });

}

function getMyWalletBlockchain(wallet) {
  web3 = new Web3(web3.currentProvider);
  web3provider=web3;
  web3provider=new Web3(web3.currentProvider);
  web3.eth.defaultAccount = web3.eth.accounts[0];

  var contract = web3.eth.contract(abi);
  var instanceContract = contract.at(address);

  instanceContract.WalletDetails(
       wallet
     , function (e, result){
        console.log(result);
        var emailaddr= web3.toAscii(result);
        document.getElementById("mywalletemail").innerHTML = emailaddr;
  });

}



function getEmployeeBlockchain(wallet) {
  web3 = new Web3(web3.currentProvider);
  web3provider=web3;
  web3provider=new Web3(web3.currentProvider);
  web3.eth.defaultAccount = web3.eth.accounts[0];

  var contract = web3.eth.contract(abi);
  var instanceContract = contract.at(address);

  instanceContract.WalletDetails(
       wallet
     , function (e, result){
        console.log(result);
        var emailaddr= web3.toAscii(result);
        document.getElementById("employeeemail").innerHTML = emailaddr;
  });

}


function popBonusFields(result, web3) {

    if (result==undefined) return false;
    if (result==null) return false;
    if (result.length > 10) return false;

    var bonusName;
    var bonusName32 = result[0]; //
    if (isValid(bonusName32)) bonusName = web3.toAscii(bonusName32);
    var bonusType;
    var bonusType32 = result[1];
    if (isValid(bonusType32)) bonusType = web3.toAscii(bonusType32);

    var bonusTarget = result[2]; //
    var bonusEndYear = result[3];
    var bonusEndMonth = result[4];
    var bonusEndDay = result[5];

    var bonusToken;
    var bonusToken32 = result[6]; //
    if (isValid(bonusToken32)) bonusToken = web3.toAscii(bonusToken32);

    var bonusAmount = result[7]; //
    var bonusExists = result[8];
    var bonusIneq = result[9];

    var bonusDate = bonusEndDay + "/"+bonusEndMonth+"/"+bonusEndYear;
    document.getElementById("displayBonusName").innerHTML = bonusName;
    document.getElementById("displayBonusType").innerHTML = bonusType;
    document.getElementById("displayBonusTarget").innerHTML = bonusTarget;
    document.getElementById("displayBonusPayable").innerHTML = bonusAmount;
    document.getElementById("displayBonusToken").innerHTML = bonusToken;
    document.getElementById("displayBonusDate").innerHTML = bonusDate;

if ((bonusIneq) == 1) {
    ineqStr="Greater Than";
} else {
    ineqStr="Less Than";
}

var IFString = "IF " + bonusType + " Target " + ineqStr + " " + bonusTarget;
var BeforeString = "Before " + bonusDate;
var ThenString = "Then pay " + bonusAmount + " " + bonusToken;

document.getElementById("ifstring").innerHTML = IFString;
document.getElementById("beforestring").innerHTML = BeforeString;
document.getElementById("thenstring").innerHTML = ThenString;

    return true;

}

function popMyBonusFields(result, web3) {

    if (result==undefined) return false;
    if (result==null) return false;
    if (result.length > 10) return false;

    var bonusName;
    var bonusName32 = result[0]; //
    if (isValid(bonusName32)) bonusName = web3.toAscii(bonusName32);
    var bonusType;
    var bonusType32 = result[1];
    if (isValid(bonusType32)) bonusType = web3.toAscii(bonusType32);

    var bonusTarget = result[2]; //
    var bonusEndYear = result[3];
    var bonusEndMonth = result[4];
    var bonusEndDay = result[5];

    var bonusToken;
    var bonusToken32 = result[6]; //
    if (isValid(bonusToken32)) bonusToken = web3.toAscii(bonusToken32);

    var bonusAmount = result[7]; //
    var bonusExists = result[8];
    var bonusIneq = result[9];

    var bonusDate = bonusEndDay + "/"+bonusEndMonth+"/"+bonusEndYear;

    document.getElementById("mybonusname").innerHTML = bonusName;
    document.getElementById("mybonustype").innerHTML = bonusType;
    document.getElementById("mybonustarget").innerHTML = bonusTarget;
    document.getElementById("mybonuspayable").innerHTML = bonusAmount;
    document.getElementById("mybonustoken").innerHTML = bonusToken;
    document.getElementById("mybonusdate").innerHTML = bonusDate;

if ((bonusIneq) == 1) {
    ineqStr="Greater Than";
} else {
    ineqStr="Less Than";
}

var IFString = "IF " + bonusType + " Target " + ineqStr + " " + bonusTarget;
var BeforeString = "Before " + bonusDate;
var ThenString = "Then pay " + bonusAmount + " " + bonusToken;

document.getElementById("ifmystring").innerHTML = IFString;
document.getElementById("beforemystring").innerHTML = BeforeString;
document.getElementById("thenmystring").innerHTML = ThenString;

    return true;

}


function selectToken() {
    var token = document.getElementById("tokens").value;
    document.getElementById("readtoken").value = token;
}

function getVersion() {
    return document.getElementById("versions").value;
}

function status(txt) {
    document.getElementById("status").innerHTML = txt;
}

function populateVersions(versions) {
    sel = document.getElementById("versions");
    sel.innerHTML = "";

    for(var i = 0; i < versions.length; i++) {
        var opt = document.createElement('option');
        opt.appendChild( document.createTextNode(versions[i]) );
        opt.value = versions[i];
        sel.appendChild(opt);
    }
}

function populateContracts(contractHashes) {
    sel = document.getElementById("contracts");
    sel.innerHTML = "";

    for(var i = 0; i < contractHashes.length; i++) {
        var opt = document.createElement('option');
        opt.appendChild( document.createTextNode(contractHashes[i]) );
        opt.value = contractHashes[i];
        sel.appendChild(opt);
    }
    document.getElementById("userMessage").innerHTML = "Hashes Listed";

}

function populateWalletBonuses(wallets, bonusnames, web3) {
  sel = document.getElementById("walletbonuses");
  sel.innerHTML = "";
  if (wallets.length > 0)
    var  bonusnamesStrLocal = web3.toAscii(bonusnames[0]);
      document.getElementById("checkbonus").innerHTML=bonusnamesStrLocal;
    for(var i = 0; i < bonusnames.length; i++) {
        var opt = document.createElement('option');
        var  bonusnamesStr = web3.toAscii(bonusnames[i]);
        opt.appendChild( document.createTextNode(bonusnamesStr) );
        opt.value = bonusnamesStr;
        sel.appendChild(opt);
    }
}

function populateEmployeeBonuses(bonusnames, web3) {
  sel = document.getElementById("employeebonuses");
  sel.innerHTML = "";
  if (wallets.length > 0)
    var  bonusnamesStrLocal = web3.toAscii(bonusnames[0]);
    //  document.getElementById("checkbonus").innerHTML=bonusnamesStrLocal;
    var bonusname0 = web3.toAscii(bonusnames[0]);
    for(var i = 0; i < bonusnames.length; i++) {
        var opt = document.createElement('option');
        var  bonusnamesStr = web3.toAscii(bonusnames[i]);
        opt.appendChild( document.createTextNode(bonusnamesStr) );
        opt.value = bonusnamesStr;
        sel.appendChild(opt);
    }
        getMyBonusBlockchain(bonusname0);
}



function populateWallets(wallets) {
  sel = document.getElementById("wallets");
  sel.innerHTML = "";
  if (wallets.length > 0)
      document.getElementById("readwallet").innerHTML=wallets[0];
    for(var i = 0; i < wallets.length; i++) {
        var opt = document.createElement('option');
        opt.appendChild( document.createTextNode(wallets[i]) );
        opt.value = wallets[i];
        sel.appendChild(opt);
    }
}

function selectWalletFromAllWallets() {
  var wallet = document.getElementById("allwallets").value;
  document.getElementById("readallwallet").innerHTML = wallet;
  document.getElementById("checkwallet").innerHTML=wallet;

  getWalletBlockchain(wallet);
  getWalletBonusesBlockchain(wallet);
  // read blockchain for details.
}

function populateAllWallets(wallets) {
  sel = document.getElementById("allwallets");
  sel.innerHTML = "";
  if (wallets.length > 0)
      document.getElementById("readallwallet").innerHTML=wallets[0];
      document.getElementById("checkwallet").innerHTML=wallets[0];

    for(var i = 0; i < wallets.length; i++) {
        var opt = document.createElement('option');
        opt.appendChild( document.createTextNode(wallets[i]) );
        opt.value = wallets[i];
        sel.appendChild(opt);
    }

    getWalletBlockchain(wallets[0]);
    getWalletBonusesBlockchain(wallets[0]);

}

function checkbutton() {

   var targetreached = document.getElementById("checkTarget").value;
   var wallet = document.getElementById("checkwallet").innerHTML;

   var bonusname = document.getElementById("checkbonus").innerHTML;

   var arrayDate;
   if (selectedCheckDate!=undefined && selectedCheckDate!=null) {
      arrayDate = selectedCheckDate.split("/");
   } else {
   }
   var day; var month; var year;
   if (arrayDate!=undefined && arrayDate!=null) {
       if (arrayDate.length > 2) {
           month = arrayDate[0];
           day = arrayDate[1];
           year = arrayDate[2];
       }
   }

    isBonusPayable(wallet, bonusname, targetreached, year, month, day);


}

function populateBonuses(bonusnames, web3) {
  sel = document.getElementById("listBonusNames");
  sel.innerHTML = "";
  if (bonusnames.length > 0)
    //  document.getElementById("readwallet").value=wallets[0];
    for(var i = 0; i < bonusnames.length; i++) {
        var opt = document.createElement('option');
        var localBonusName = web3.toAscii(bonusnames[i]);
        opt.appendChild( document.createTextNode(localBonusName) );
        opt.value = localBonusName;
        sel.appendChild(opt);
    }
    var bonusnameFirst = web3.toAscii(bonusnames[0]);
getBonusBlockchain(bonusnameFirst);

}



function populateTokens(tokens) {
  sel = document.getElementById("tokens");
  sel.innerHTML = "";
  if (tokens.length > 0)
      document.getElementById("readtoken").value=tokens[0];
    for(var i = 0; i < tokens.length; i++) {
        var opt = document.createElement('option');
        opt.appendChild( document.createTextNode(tokens[i]) );
        opt.value = tokens[i];
        sel.appendChild(opt);
    }


}

function testDB() {

}






function updateAddress() {
   var txid = document.getElementById("transactionhash").value;
   var hash = document.getElementById("contracthash").value;

   //var web3 = new Web3(web3.currentProvider);
   web3provider.eth.defaultAccount = web3provider.eth.accounts[0];

  web3provider.eth.getTransactionReceipt(txid , function(error, result){
  if(!error) {
     document.getElementById("contractaddress").value = result.contractAddress;
     update(hash, result.contractAddress);
     console.log(result)
  }
  else {
     document.getElementById("contractaddress").value = "not mined";
     console.error(error);
  }
  });


}








function savewallet(wallet, email){
  var xhttp = new XMLHttpRequest();

  xhttp.open("POST", "/api/save_wallet", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("wallet=" +wallet + "&email=" + email );

  xhttp.onreadystatechange = function(){
    var messageDiv = document.getElementById('message');
    if(this.readyState == 4 && this.status ==200){
       var data = JSON.parse(this.response);
       document.getElementById("uMessage").style.visibility="visible";
       if (data.message == "Wallet exists") {
           document.getElementById("userMessage").innerHTML = data.message;
           document.getElementById("uMessage").classList.add("alert-danger");
           document.getElementById("uMessage").classList.remove("alert-info");

       } else {
           document.getElementById("userMessage").innerHTML = data.message;
           document.getElementById("uMessage").classList.add("alert-info");
           document.getElementById("uMessage").classList.remove("alert-danger");
      }
       //document.getElementById("userMessage").value = JSON.parse(this.response).message;


//       if(data.type == 'success'){
  //     messageDiv.innerHTML = data;
    //   }else{
      // console.log(data);
       //messageDiv.innerHTML = "error";
       //}
    }
  };
}

function savebonusname(bonusName){
  var xhttp = new XMLHttpRequest();

  xhttp.open("POST", "/api/save_bonusname", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("bonusname=" +bonusName );

  xhttp.onreadystatechange = function(){
    var messageDiv = document.getElementById('message');
    if(this.readyState == 4 && this.status ==200){
       var data = JSON.parse(this.response);
       document.getElementById("uMessage").style.visibility="visible";
       if (data.message == "Name exists") {
           document.getElementById("userMessage").innerHTML = data.message;
           document.getElementById("uMessage").classList.add("alert-danger");
           document.getElementById("uMessage").classList.remove("alert-info");

       } else {
           document.getElementById("userMessage").innerHTML = data.message;
           document.getElementById("uMessage").classList.add("alert-info");
           document.getElementById("uMessage").classList.remove("alert-danger");
      }
    }
  };
}


function addWallet() {
    document.getElementById("userMessage").innerHTML = "";

    var wallet=     document.getElementById("walletaddress").value;
    var email=     document.getElementById("walletemailaddress").value;

    //savewallet(wallet, email); // need this for UI screens
   // future - need to work out how to integrate
  // Email has a max length of 32 bytes
    saveWalletBlockchain(wallet, email);
}




function listTokens() {
  document.getElementById("userMessage").innerHTML = "";
  getTokens();
}

function listAllBonusNames() {
//  document.getElementById("userMessage").innerHTML = "";
  //getBonuses();
  getBlockchainBonuses();
  var typelisting=0;
  getBlockchainWallets(typelisting);

  //var bonusname = document.getElementById("listBonusNames").firstChild.innerHTML;
//  document.getElementById("readwallet").value = wallet;
  //getBonusBlockchain(bonusname);

//  var wallet = document.getElementById("wallets").firstChild.innerHTML;
//  document.getElementById("readwallet").innerHTML = wallet;

}

function listAllWallets() {
  document.getElementById("userMessage").innerHTML = "";
  var typelisting=1;
  getBlockchainWallets(typelisting);



}


function getTokens() {
  var tokens = ["IOU121", "ETH", "BTC"];
  populateTokens(tokens);
}


function isBonusPayable(wallet, bonusname, targetreached,
  year, month, day) {

  web3 = new Web3(web3.currentProvider);
  web3provider=web3;
  web3provider=new Web3(web3.currentProvider);
  web3.eth.defaultAccount = web3.eth.accounts[0];

  var contract = web3.eth.contract(abi);
  var instanceContract = contract.at(address);

  instanceContract.isBonusPayable(wallet, bonusname,
    targetreached, year, month, day, function (e, result){
        console.log(result);
        //var emailaddr= web3.toAscii(result);
      //  document.getElementById("allwalletemail").innerHTML = emailaddr;
    //  var errorDetected = result[0];
      var payBonus = result[0];
      var payAmount = result[1].c[0];
      var payToken = result[2];

          if (payBonus) {
            var str = "Pay" + " " + payAmount + " " + payToken;
            document.getElementById("eCheckMessage").innerHTML=str;

          } else {
            document.getElementById("eCheckMessage").innerHTML="No Bonus";


          }

  });


}

function getBlockchainWallets(typelisting) {

  web3 = new Web3(web3.currentProvider);
  web3provider=web3;
  web3provider=new Web3(web3.currentProvider);
  web3.eth.defaultAccount = web3.eth.accounts[0];

  var contract = web3.eth.contract(abi);
  var instanceContract = contract.at(address);

  instanceContract.getWallets(function (e, result){
        console.log(result);
        //var emailaddr= web3.toAscii(result);
      //  document.getElementById("allwalletemail").innerHTML = emailaddr;
        if (typelisting==0)
            populateWallets(result);
        else {
            populateAllWallets(result);
        }
  });


}

function getBlockchainBonuses() {

  web3 = new Web3(web3.currentProvider);
  web3provider=web3;
  web3provider=new Web3(web3.currentProvider);
  web3.eth.defaultAccount = web3.eth.accounts[0];

  var contract = web3.eth.contract(abi);
  var instanceContract = contract.at(address);

  instanceContract.getBonusNames(function (e, result){
        console.log(result);
        //var emailaddr= web3.toAscii(result);
      //  document.getElementById("allwalletemail").innerHTML = emailaddr;

        populateBonuses(result, web3);

  });


}



function getWallets(typelisting) {
  var xhttp = new XMLHttpRequest();
  //var hash = document.getElementById("hash").value

  xhttp.open("POST", "/api/get_wallets", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send();

  xhttp.onreadystatechange = function(){
    var messageDiv = document.getElementById('userMessage');
    if(this.readyState == 4 && this.status ==200){
       var data = JSON.parse(this.response);
      messageDiv.innerHTML = data.message;
      var arrayLength = data.doc.length;
      var wallets=[arrayLength];
      for (var i=0; i<arrayLength; i++) {
        wallets[i]=data.doc[i].Wallet;
      }
      if (typelisting==0)
      populateWallets(wallets);
      else {
          populateAllWallets(wallets);
      }
      //document.getElementById("selcontract").value = data.doc.Code;
    }
  };
}

function getBonuses() {
  var xhttp = new XMLHttpRequest();
  //var hash = document.getElementById("hash").value

  xhttp.open("POST", "/api/get_bonusnames", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send();

  xhttp.onreadystatechange = function(){
  //  var messageDiv = document.getElementById('userMessage');
    if(this.readyState == 4 && this.status ==200){
       var data = JSON.parse(this.response);
    //  messageDiv.innerHTML = data.message;
      var arrayLength = data.doc.length;
      var bonusnames=[arrayLength];
      for (var i=0; i<arrayLength; i++) {
        bonusnames[i]=data.doc[i].BonusName;
      }
      //populateBonuses(bonusnames);
      //document.getElementById("selcontract").value = data.doc.Code;
    }
  };
}





function getWalletDetails() {


}

function saveBonusBlockchain(token, bonus, target, bonusName,
  bonusType, day, month, year, ineq) {
  web3 = new Web3(web3.currentProvider);
  web3provider=web3;
  web3provider=new Web3(web3.currentProvider);
  web3.eth.defaultAccount = web3.eth.accounts[0];
  var contract = web3.eth.contract(abi);
  var instanceContract = contract.at(address);

  document.getElementById("userMessage").innerHTML = "Saving Blockchain Bonus";

  //instanceContract.addWalletEmail(wallet, email);
// had stack too deep in solidity - need to reduce variables
  instanceContract.addBonus(
       bonusType, target, year, month, day, token, bonus, bonusName, ineq
     , function (e, contract){
        console.log(e, contract);
  });

}

function assignWalletBonus(wallet, bonusName) {
  web3 = new Web3(web3.currentProvider);
  web3provider=web3;
  web3provider=new Web3(web3.currentProvider);
  web3.eth.defaultAccount = web3.eth.accounts[0];
  var contract = web3.eth.contract(abi);
  var instanceContract = contract.at(address);

  document.getElementById("userMessage").innerHTML = "Assignment Done";

  //instanceContract.addWalletEmail(wallet, email);
// had stack too deep in solidity - need to reduce variables
  instanceContract.addWalletBonus(
       wallet, bonusName
     , function (e, result){
        console.log(e, result);
  });

}


function saveWalletBlockchain(wallet, email) {
  web3 = new Web3(web3.currentProvider);
  web3provider=web3;
  web3provider=new Web3(web3.currentProvider);
  web3.eth.defaultAccount = web3.eth.accounts[0];
  var contract = web3.eth.contract(abi);
  var instanceContract = contract.at(address);

  document.getElementById("userMessage").innerHTML = "updating Wallet";

  //instanceContract.addWalletEmail(wallet, email);

  instanceContract.addWalletEmail(
       wallet, email
     , function (e, result){
        console.log(e, result);
  });

}



function showAddress() {
    status("compiling");

    web3 = new Web3(web3.currentProvider);

    // Our future code here..
     web3.eth.defaultAccount = web3.eth.accounts[0];

//    var contract = web3.eth.contract(JSON.parse(abi));
//    var hash = web3.sha3(getSourceCode());


  //    var contractList=web3.eth.contract([ { "constant": false, "inputs": [ { "name": "contractAddress", "type": "bytes32" }, { "name": "sourceCodeHash", "type": "bytes32" } ], "name": "addContractDetail", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "payable": true, "stateMutability": "payable", "type": "fallback" }, { "constant": true, "inputs": [ { "name": "", "type": "bytes32" } ], "name": "ContractDetails", "outputs": [ { "name": "sourceCodeHash", "type": "bytes32" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "contractAddress", "type": "bytes32" } ], "name": "readContractDetails", "outputs": [ { "name": "", "type": "bytes32" } ], "payable": false, "stateMutability": "view", "type": "function" } ]);

  //    var contractListInstance = contractList.at('0xb0719adb9892f6c234fb97e5953718d3637b952b');

//      contractListInstance.addContractDetail(hash);
var txn = "0x16c38c6ba0902136b19b46ed108545d69c8c70aaf77b0de60e80a6e0ee93d1c2";

web3.eth.getTransactionReceipt(txn , function(error, result){
if(!error) {
    console.log(result)
  }
else
    console.error(error);
});

    status("Compile Complete.");
}





window.onload = function() {
//    document.getElementById("source").value = exampleSource;

   document.getElementById("uMessage").style.visibility="hidden";


  //////////
};
