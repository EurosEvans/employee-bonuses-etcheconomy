//       if(data.type == 'success'){
var exampleSource = "";
var optimize = 1;
var compiler;
var web3provider;
//var mongoose=require('mongoose');

address = "0xbbde84b20795425844bb0b829bff430e65326f54";
abi = [ { "constant": false, "inputs": [ { "name": "bonusType", "type": "string" }, { "name": "bonusTarget", "type": "uint256" }, { "name": "bonusEndYear", "type": "uint256" }, { "name": "bonusEndMonth", "type": "uint256" }, { "name": "bonusEndDay", "type": "uint256" }, { "name": "bonusToken", "type": "string" }, { "name": "bonusAmount", "type": "uint256" }, { "name": "bonusName", "type": "string" }, { "name": "ineq", "type": "uint256" } ], "name": "addBonus", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "k1", "type": "uint256" } ], "name": "addK", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "wallet", "type": "address" }, { "name": "token", "type": "bytes32" }, { "name": "payment", "type": "uint256" } ], "name": "addPaymentDetail", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "wallet", "type": "address" } ], "name": "addWallet", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "wallet", "type": "address" }, { "name": "bonusName", "type": "string" } ], "name": "addWalletBonus", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "wallet", "type": "address" }, { "name": "emailAddress", "type": "string" } ], "name": "addWalletEmail", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "payable": true, "stateMutability": "payable", "type": "fallback" }, { "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "constant": true, "inputs": [ { "name": "", "type": "bytes32" } ], "name": "Bonuses", "outputs": [ { "name": "bonusName", "type": "bytes32" }, { "name": "bonusType", "type": "bytes32" }, { "name": "bonusTarget", "type": "uint256" }, { "name": "bonusEndYear", "type": "uint256" }, { "name": "bonusEndMonth", "type": "uint256" }, { "name": "bonusEndDay", "type": "uint256" }, { "name": "bonusToken", "type": "bytes32" }, { "name": "bonusAmount", "type": "uint256" }, { "name": "bonusExists", "type": "bool" }, { "name": "ineq", "type": "uint8" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "uint256" } ], "name": "BonusNamesArray", "outputs": [ { "name": "bonusName", "type": "bytes32" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "x", "type": "bytes32" } ], "name": "bytes32ToString", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "pure", "type": "function" }, { "constant": true, "inputs": [], "name": "getNumberWallets", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "wallet", "type": "address" }, { "name": "bonusName", "type": "string" }, { "name": "targetReached", "type": "uint256" }, { "name": "endYear", "type": "uint256" }, { "name": "endMonth", "type": "uint256" }, { "name": "endDay", "type": "uint256" } ], "name": "isBonusPayable", "outputs": [ { "name": "payBonus", "type": "bool" }, { "name": "bonusAmount", "type": "uint256" }, { "name": "bonusToken", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "address" }, { "name": "", "type": "bytes32" } ], "name": "PaymentDetails", "outputs": [ { "name": "totalPaid", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "source", "type": "string" } ], "name": "stringToBytes32", "outputs": [ { "name": "result", "type": "bytes32" } ], "payable": false, "stateMutability": "pure", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "address" }, { "name": "", "type": "bytes32" } ], "name": "WalletBonuses", "outputs": [ { "name": "bonusExists", "type": "bool" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "address" } ], "name": "WalletDetails", "outputs": [ { "name": "walletEmailAddress", "type": "bytes32" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "uint256" } ], "name": "Wallets", "outputs": [ { "name": "", "type": "address" } ], "payable": false, "stateMutability": "view", "type": "function" } ]



var selectedDate;
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

function addBonusCondition() {
  var token = document.getElementById("selToken").value;
  var bonus = document.getElementById("selBonus").value;
  var target = document.getElementById("selTarget").value;
  var bonusName = document.getElementById("selBonusName").value;
  var bonusType = document.getElementById("selBonusType").value;

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
          day = arrayDate[0];
          month = arrayDate[1];
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

function selDate() {

//    $( "#datepicker" ).datepicker();
      selectedDate = document.getElementById("datepicker").value;
      //dd/mm/yyyy

}

function addBonusData() {

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
     , function (e, contract){
        console.log(e, contract);
  });

}

function marryWallet() {

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

function populateWallets(wallets) {
  sel = document.getElementById("wallets");
  sel.innerHTML = "";
  if (wallets.length > 0)
      document.getElementById("readwallet").value=wallets[0];
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
  getWalletBlockchain(wallet);
  // read blockchain for details.
}

function populateAllWallets(wallets) {
  sel = document.getElementById("allwallets");
  sel.innerHTML = "";
  if (wallets.length > 0)
      document.getElementById("readallwallet").value=wallets[0];
    for(var i = 0; i < wallets.length; i++) {
        var opt = document.createElement('option');
        opt.appendChild( document.createTextNode(wallets[i]) );
        opt.value = wallets[i];
        sel.appendChild(opt);
    }
}

function populateBonuses(bonusnames) {
  sel = document.getElementById("listBonusNames");
  sel.innerHTML = "";
  if (bonusnames.length > 0)
    //  document.getElementById("readwallet").value=wallets[0];
    for(var i = 0; i < bonusnames.length; i++) {
        var opt = document.createElement('option');
        opt.appendChild( document.createTextNode(bonusnames[i]) );
        opt.value = bonusnames[i];
        sel.appendChild(opt);
    }


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

function companywide() {
  inividualSourceCode="pragma solidity ^0.4.2;\n" +
  "contract greeter {\n" +
  "   uint public targetNumberCustomers;\n" +
  "   function createCustomerCondition (uint _targetNumberCustomers) public {\n" +
  "       targetNumberCustomers = _targetNumberCustomers;\n" +
  "     }\n" +
  "   function payBonus (uint _targetNumberCustomers) public view returns (bool) {\n" +
  "       if (_targetNumberCustomers > targetNumberCustomers) return true;\n" +
  "       else return false;\n" +
  "   }\n" +
  "}";
  document.getElementById("source").value = inividualSourceCode;
}

function createCompanyDom() {

document.getElementById("source").value="";
  cleanButtons();

  var newDiv = "<div class=\"col-md-12 panel panel-default\" id=\"cPanel\">"+
  "  <h3>Company Targets</h3> "+
    "  <div class=\"col-md-4\"> "+
    "    <div class=\"input-group mb-3\"> "+
    "       <label><input type=\"text\" class=\"form-control\" "+
    "       id=\"numbercustomers\" aria-label=\"Text input with checkbox\">Target Number of Customers</label> "+
    "       <button id=\"gen-company-button\" onclick=\"gencompanycontract()\" "+
    "       class=\"btn btn-primary btn-xl\" style=\"margin-top: 20px\"> "+
    "         Generate</button> "+
    "   </div>"+
    "  </div>"+
    "</div>";

    document.getElementById("userMessage").innerHTML = "";
listWallets();
listTokens();

removePanels();
var orgDiv = document.getElementById("checkboxid");
orgDiv.insertAdjacentHTML('beforeend', newDiv);

}

function createTeamDom() {

document.getElementById("source").value="";
cleanButtons();

var newDiv = "<div class=\"col-md-12 panel panel-default\" id=\"tPanel\">"+
"  <h3>Team Targets</h3> "+
  "  <div class=\"col-md-4\"> "+
  "    <div class=\"input-group mb-3\"> "+
  "       <label><input type=\"text\" class=\"form-control\" "+
  "       id=\"responserate\" aria-label=\"Text input with checkbox\">Target Response Time</label> "+
  "       <button id=\"gen-response-button\" onclick=\"genresponsecontract()\" "+
  "       class=\"btn btn-primary btn-xl\" style=\"margin-top: 20px\"> "+
  "         Generate</button> "+
  "   </div>"+
  "  </div>"+
  "</div>";

  document.getElementById("userMessage").innerHTML = "";

listWallets();
listTokens();

  removePanels();
var orgDiv = document.getElementById("checkboxid");
orgDiv.insertAdjacentHTML('beforeend', newDiv);


  // body=document.getElementsByTagName('body')[0];
  //var newDivEle = document.createElement('div');
  //newDivEle.class = "col-md-12";
  //var h3 = document.createElement('h3');
//h3.innerHTML="Team Targets";
  //newDivEle.appendChild(h3);


  //body.appendChild(newDivEle);
//currentDiv=document.getElementById("tPanel");
//var orgDiv = document.getElementById("checkboxid");
//currentDiv.insertBefore(newDivEle, orgDiv);

}

function createIndDom() {

document.getElementById("source").value="";
cleanButtons();

var newDiv =  "<div class=\"col-md-12 panel panel-default\" id=\"iPanel\">"+
    "<h3>Individual Targets</h3>"+
    "<div class=\"col-md-4\">"+
      "<div class=\"input-group mb-3\"> "+
         "<label><input type=\"text\" class=\"form-control\" "+
         " id=\"hourlyrate\" aria-label=\"Text input with checkbox\">Target Hours</label> "+
         "<button id=\"gen-hourly-button\" onclick=\"genhourlycontract()\" "+
         "class=\"btn btn-primary btn-xl\" style=\"margin-top: 20px\"> "+
           "Generate</button>"+
    " </div>"+
    "</div>"+
  "</div>";
  document.getElementById("userMessage").innerHTML = "";

listWallets();
listTokens();

removePanels();
  var orgDiv = document.getElementById("checkboxid");
  orgDiv.insertAdjacentHTML('beforeend', newDiv);
}

function removeButtons() {
  var mainpanel = document.getElementById("etherscan");
  var tpanel = document.getElementById("scanButton");
  if (tpanel!==null) {
      mainpanel.removeChild(tpanel);
  }
  var ipanel = document.getElementById("contractScanButton");
  if (ipanel!==null) {
      mainpanel.removeChild(ipanel);
  }
  var cpanel = document.getElementById("addressButton");
  if (cpanel!==null) {
      mainpanel.removeChild(cpanel);
  }
}

function removePanels() {
  var mainpanel = document.getElementById("checkboxid");
  var tpanel = document.getElementById("tPanel");
  if (tpanel!==null) {
      mainpanel.removeChild(tpanel);
  }
  var ipanel = document.getElementById("iPanel");
  if (ipanel!==null) {
      mainpanel.removeChild(ipanel);
  }
  var cpanel = document.getElementById("cPanel");
  if (cpanel!==null) {
      mainpanel.removeChild(cpanel);
  }
}

function team() {
  document.getElementById("iPanel").style.visibility="hidden";
  document.getElementById("tPanel").style.visibility="visible";

  inividualSourceCode="pragma solidity ^0.4.2;\n" +
  "contract greeter {\n" +
  "   uint public targetResponseTime;\n" +
  "   function createResponseCondition (uint _targetResponseTime) public {\n" +
  "       targetResponseTime = _targetResponseTime;\n" +
  "     }\n" +
  "   function payBonus (uint _responseTime) public view returns (bool) {\n" +
  "       if (_responseTime > targetResponseTime) return true;\n" +
  "       else return false;\n" +
  "   }\n" +
  "}";
//  document.getElementById("source").value = inividualSourceCode;
}

function individual() {
  document.getElementById("iPanel").style.visibility="visible";
  document.getElementById("tPanel").style.visibility="hidden";


  inividualSourceCode="pragma solidity ^0.4.2;\n" +
  "contract greeter {\n" +
  "   uint public targetHours;\n" +
  "   function createBonusCondition (uint _targetHours) public {\n" +
  "       targetHours = _targetHours;\n" +
  "     }\n" +
  "   function payBonus (uint _hoursWorked) public view returns (bool) {\n" +
  "       if (_hoursWorked > targetHours) return true;\n" +
  "       else return false;\n" +
  "   }\n" +
  "}";
  //document.getElementById("source").value = inividualSourceCode;
}

function gencompanycontract() {

  genSaveButton();

//  var checkbox = document.getElementById("companycheckbox").value;

  var targetvalue = document.getElementById("numbercustomers").value;
var contractheader=  "contract greeter {\n" +
"//<type>company</type>\n" +
"//<target>numbers of customers</target>\n" +
"   uint public targetNumberCustomers="+targetvalue+";\n";
var payBonus =    "   function createCustomerCondition (uint _targetNumberCustomers) public {\n" +
  "       targetNumberCustomers = _targetNumberCustomers;\n" +
  "     }\n";
var bonuscondition =    "   function payBonus (uint _targetNumberCustomers) public view returns (bool) {\n" +
  "       if (_targetNumberCustomers > targetNumberCustomers) return true;\n" +
  "       else return false;\n" +
  "   }\n";

  inividualSourceCode="pragma solidity ^0.4.2;\n" +
     contractheader +
     bonuscondition +
     payBonus +
  "}";
  document.getElementById("source").value = inividualSourceCode;

}

function cleanButtons () {

  var mainpanel = document.getElementById("menuid");

  var saveButton = document.getElementById("saveButton");
  if (saveButton!==null) {
      mainpanel.removeChild(saveButton);
  }

  var deployButton = document.getElementById("deployButton");
  if (deployButton!==null) {
      mainpanel.removeChild(deployButton);
  }
}

function createScanButton() {

  var newButton =  "<div class=\"col-md-12\" id=\"scanButton\">"+
     "<button id=\"scan-button\" onclick=\"showEtherscan()\" " +
  " class=\"btn btn-info btn-xl\" style=\"margin-top: 20px\"> "+
  "  Txn Etherscan</button> " +
  "</div>";

   var orgDiv = document.getElementById("etherscan");
    orgDiv.insertAdjacentHTML('beforeend', newButton);

}



function createContractEtherscanButton() {

  var newButton =  "<div class=\"col-md-12\" id=\"contractScanButton\">"+
     "<button id=\"scan-button\" onclick=\"showContractEtherscan()\" " +
  " class=\"btn btn-info btn-xl\" style=\"margin-top: 20px\"> "+
  "  Contract Etherscan</button> " +
  "</div>";

   var orgDiv = document.getElementById("etherscan");
    orgDiv.insertAdjacentHTML('beforeend', newButton);

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

function showContractEtherscan() {

  var contractaddress = document.getElementById("contractaddress").value;
  window.open("https://ropsten.etherscan.io/address/"+contractaddress);
}

function showEtherscan() {

  var txid = document.getElementById("transactionhash").value;
  window.open("https://ropsten.etherscan.io/tx/"+txid);
}

function createAddressButton() {

  var newButton =  "<div class=\"col-md-12\" id=\"addressButton\">"+
     "<button id=\"address-button\" onclick=\"updateAddress()\" " +
  " class=\"btn btn-success btn-xl\" style=\"margin-top: 20px\"> "+
  "  Update Address</button> " +
  "</div>";

   var orgDiv = document.getElementById("etherscan");
    orgDiv.insertAdjacentHTML('beforeend', newButton);

}

function genDeployButton() {

  cleanButtons();

  var newButton =  "<div class=\"col-md-12\" id=\"deployButton\">"+
     "<button id=\"deploy-button\" onclick=\"deployContractManager()\" " +
  " class=\"btn btn-primary btn-xl\" style=\"margin-top: 20px\"> "+
  "  Deploy</button> " +
  "</div>";

   var orgDiv = document.getElementById("menuid");
    orgDiv.insertAdjacentHTML('beforeend', newButton);

}

function genSaveButton() {

  cleanButtons();

  var newButton =  "<div class=\"col-md-12\" id=\"saveButton\">"+
     "<button id=\"save-button\" onclick=\"savecontract()\" " +
  " class=\"btn btn-success btn-xl\" style=\"margin-top: 20px\"> "+
  "  SAVE</button> " +
  "</div>";

  //  <button id="deploy-button" onclick="deployContractManager()"
  //  class="btn btn-primary btn-xl" style="margin-top: 20px">
  //    Deploy</button>

   var orgDiv = document.getElementById("menuid");
    orgDiv.insertAdjacentHTML('beforeend', newButton);

}

function genhourlycontract() {

  genSaveButton();

  //var checkbox = document.getElementById("hourlycheckbox").value;

  var targetvalue = document.getElementById("hourlyrate").value;

var contractheader=  "contract greeter {\n" +
"//<type>individual</type>\n" +
"//<target>hours worked</target>\n" +
  "   uint public targetHours="+ targetvalue+";\n";
var payBonus =   "   function payBonus (uint _hoursWorked) public view returns (bool) {\n" +
  "       if (_hoursWorked > targetHours) return true;\n" +
  "       else return false;\n" +
  "   }\n";
var bonuscondition =   "   function createBonusCondition (uint _targetHours) public {\n" +
  "       targetHours = _targetHours;\n" +
  "     }\n";

  inividualSourceCode="pragma solidity ^0.4.2;\n" +
     contractheader +
     bonuscondition +
     payBonus +
  "}";
  document.getElementById("source").value = inividualSourceCode;

}

function genresponsecontract() {

  genSaveButton();

  //var checkbox = document.getElementById("responsecheckbox").value;

  var targetvalue = document.getElementById("responserate").value;

  var contractheader=  "contract greeter {\n" +
  "//<type>team</type>\n" +
  "//<target>response time</target>\n" +
    "   uint public targetResponseTime="+ targetvalue+";\n";
  var payBonus =   "   function payBonus (uint _targetResponseTime) public view returns (bool) {\n" +
    "       if (targetResponseTime > _targetResponseTime) return true;\n" +
    "       else return false;\n" +
    "   }\n";
  var bonuscondition =   "   function createBonusCondition (uint _responseTime) public {\n" +
    "       targetResponseTime = _responseTime;\n" +
    "     }\n";

  teamSourceCode="pragma solidity ^0.4.2;\n" +
     contractheader +
     bonuscondition +
     payBonus +
  "}";
  document.getElementById("source").value = teamSourceCode;

}

function save(data, hash, type, target, address, cabi, bytecode){
  var xhttp = new XMLHttpRequest();

  xhttp.open("POST", "/api/save_code", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("hash=" +hash + "&data=" + data + "&type=" +
  type + "&target=" + target + "&address=" + address +
  "&cabi=" + cabi + "&bytecode=" + bytecode );

  xhttp.onreadystatechange = function(){
    var messageDiv = document.getElementById('message');
    if(this.readyState == 4 && this.status ==200){
       var data = JSON.parse(this.response);
       document.getElementById("uMessage").style.visibility="visible";
       cleanButtons();
       genDeployButton();
       if (data.message == "Data exists") {
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




function update( hash, address){
  var xhttp = new XMLHttpRequest();

  xhttp.open("POST", "/api/update_code", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("hash=" +hash + "&address=" + address );

  xhttp.onreadystatechange = function(){
    var messageDiv = document.getElementById('message');
    if(this.readyState == 4 && this.status ==200){
       var data = JSON.parse(this.response);
       document.getElementById("uMessage").style.visibility="visible";
       if (data.message == "No Record") {
           document.getElementById("userMessage").innerHTML = data.message;
           document.getElementById("uMessage").classList.add("alert-danger");
           document.getElementById("uMessage").classList.remove("alert-info");

       } else {
           document.getElementById("userMessage").innerHTML = data.message;
           document.getElementById("uMessage").classList.add("alert-info");
           document.getElementById("uMessage").classList.remove("alert-danger");
      }
       //document.getElementById("userMessage").value = JSON.parse(this.response).message;


  //     messageDiv.innerHTML = data;
    //   }else{
      // console.log(data);
       //messageDiv.innerHTML = "error";
       //}
    }
  };
}


function checkSourceCodeFull() {
  var hash = document.getElementById("hash").value;
   checkSourceCode(hash);

}



function savecontract() {
  document.getElementById("userMessage").innerHTML = "";

  var mycontractcode=     document.getElementById("source").value;
  var hash = web3.sha3(mycontractcode);
  document.getElementById("contracthash").value=hash;
  document.getElementById("transactionhash").value="";

// function save(data, hash, type, target, address, cabi, bytecode){
var address=null;
var cabi=null;
var bytecode = null;
var typen=mycontractcode.indexOf("<type>");
var targetn=mycontractcode.indexOf("<target>");
var typen2=mycontractcode.indexOf("</type>");
var targetn2=mycontractcode.indexOf("</target>");
var type = mycontractcode.substring(typen+6, typen2);
var target = mycontractcode.substring(targetn+8, targetn2);


    save(mycontractcode, hash, type, target, address, cabi, bytecode);
    document.getElementById("hash").value = hash;
}

function addWallet() {
    document.getElementById("userMessage").innerHTML = "";

    var wallet=     document.getElementById("walletaddress").value;
    var email=     document.getElementById("walletemailaddress").value;

    savewallet(wallet, email); // need this for UI screens
   // future - need to work out how to integrate
  // Email has a max length of 32 bytes
    saveWalletBlockchain(wallet, email);
}


function listContracts() {
  document.getElementById("userMessage").innerHTML = "";
  getHashCodes();
}

function listTokens() {
  document.getElementById("userMessage").innerHTML = "";
  getTokens();
}

function listAllBonusNames() {
//  document.getElementById("userMessage").innerHTML = "";
  getBonuses();
  var typelisting =0;
  getWallets(typelisting);
}

function listAllWallets() {
  document.getElementById("userMessage").innerHTML = "";
  var typelisting=1;
  getWallets(typelisting);
}

function getHashCodes() {
  var xhttp = new XMLHttpRequest();
  //var hash = document.getElementById("hash").value

  xhttp.open("POST", "/api/get_allcontracts", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send();

  xhttp.onreadystatechange = function(){
    var messageDiv = document.getElementById('userMessage');
    if(this.readyState == 4 && this.status ==200){
       var data = JSON.parse(this.response);
      messageDiv.innerHTML = data.message;
      var arrayLength = data.doc.length;
      var contractHashes=[arrayLength];
      for (var i=0; i<arrayLength; i++) {
        contracvatHashes[i]=data.doc[i].Hash;
      }
      populateContracts(contractHashes);
      //document.getElementById("selcontract").value = data.doc.Code;
    }
  };
}

function getTokens() {
  var tokens = ["IOU121", "ETH", "BTC"];
  populateTokens(tokens);
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
      populateBonuses(bonusnames);
      //document.getElementById("selcontract").value = data.doc.Code;
    }
  };
}




function deployContractManager() {
  document.getElementById("userMessage").innerHTML = "";

  var xhttp = new XMLHttpRequest();
  var hashcode = document.getElementById("hash").value

  xhttp.open("POST", "/api/get_info", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("hash=" +hashcode);

  xhttp.onreadystatechange = function(){
    var messageDiv = document.getElementById('userMessage');
    if(this.readyState == 4 && this.status ==200){
       var data = JSON.parse(this.response);
       var abi = data.doc.cABI;
      var bytecode = data.doc.bytecode;
      deployContract(bytecode, abi);
    }
  };
}

function checkSourceCode(hash) {
  var xhttp = new XMLHttpRequest();
  //var hash = document.getElementById("hash").value

  xhttp.open("POST", "/api/get_info", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("hash=" +hash);

  xhttp.onreadystatechange = function(){
    var messageDiv = document.getElementById('userMessage');
    if(this.readyState == 4 && this.status ==200){
       var data = JSON.parse(this.response);
      messageDiv.innerHTML = data.message;
      document.getElementById("selcontract").value = data.doc.Code;
      var type = data.doc.Type;
      var target = data.doc.Target;
      var bonus = "type: " + type + " target: " + target;
      document.getElementById("targetcontract").value=bonus;

    }
  };
}


function solcCompile2(compiler) {
  var mycontractcode="pragma solidity ^0.4.3; contract greeter {uint d;}"
  var hash = web3.sha3(mycontractcode);

  //  save(mycontractcode, hash);
    document.getElementById("hash").value = hash;


    // read mongodb
    //var returnedSourceCode = checkSourceCode(hash);

}

function getWalletDetails() {

  //web3=new Web3(web3.currentProvider);

  //web3.eth.defaultAccount = web3.eth.accounts[0];
  //var contract = web3.eth.contract(abi);
  //var instanceContract = contract.at(address);

  //document.getElementById("userMessage").innerHTML = "";

  //instanceContract.addWalletEmail(wallet, email);
/*  var numberWallets ;
  instanceContract.getNumberWallets(),
     function (e, result){
         numberWallets=result;
     });

  var walletAddresses=[];
  var wallets=[];

  var i;
  for (i=0; i< numberWallets; i++) {
    var walletAddress = instanceContract.Wallets(i);
    wallets[i]=walletAddresses;
  }

  for (i=0; i< walletAddresses.length; i++) {
    var walletEmail = instanceContract.WalletDetails(walletAddresses[i]);
    wallets[i]=walletAddresses+"(" + walletEmail +")";
  }

 populateWallets(wallets);
 */
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
     , function (e, contract){
        console.log(e, contract);
  });

}

function deployContract( bytecode, abi) {

   web3 = new Web3(web3.currentProvider);
   web3provider=new Web3(web3.currentProvider);
  // Our future code here..
   web3.eth.defaultAccount = web3.eth.accounts[0];
   var contract = web3.eth.contract(JSON.parse(abi));

   document.getElementById("userMessage").innerHTML = "Deploying Contract";


  contract.new(
     {
       from: web3.eth.accounts[0],
       data: "0x"+bytecode,
       gas: '4500000'
     }, function (e, contract){
        console.log(e, contract);
        if (typeof contract.transactionHash !== 'undefined') {
          document.getElementById("transactionhash").value = contract.transactionHash;

          createScanButton();
          createContractEtherscanButton();
          createAddressButton();
           console.log(' transactionHash: ' + contract.transactionHash);
         }
  });



  status("Compile Complete.");

}

function solcCompile(compiler) {
    status("compiling");
    var mycontractcode="pragma solidity ^0.4.3; contract greeter {uint d1;}"
    document.getElementById("compile-output").value = "";
    var result = compiler.compile(mycontractcode, optimize);
    var hash = web3.sha3(mycontractcode);
  //  save(mycontractcode, hash);
    var stringResult = JSON.stringify(result);
    document.getElementById("compile-output").value = stringResult;

    var bytecode = result.contracts[":greeter"].bytecode;
    var abi = result.contracts[":greeter"].interface;

    web3 = new Web3(web3.currentProvider);

    // Our future code here..
     web3.eth.defaultAccount = web3.eth.accounts[0];

    var contract = web3.eth.contract(JSON.parse(abi));
    var hash1 = web3.sha3(mycontractcode);


      var contractList=web3.eth.contract([ { "constant": false, "inputs": [ { "name": "contractAddress", "type": "bytes32" }, { "name": "sourceCodeHash", "type": "bytes32" } ], "name": "addContractDetail", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "payable": true, "stateMutability": "payable", "type": "fallback" }, { "constant": true, "inputs": [ { "name": "", "type": "bytes32" } ], "name": "ContractDetails", "outputs": [ { "name": "sourceCodeHash", "type": "bytes32" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "contractAddress", "type": "bytes32" } ], "name": "readContractDetails", "outputs": [ { "name": "", "type": "bytes32" } ], "payable": false, "stateMutability": "view", "type": "function" } ]);

      var contractListInstance = contractList.at('0xb0719adb9892f6c234fb97e5953718d3637b952b');

//      contractListInstance.addContractDetail(hash);


    contract.new(
       {
         from: web3.eth.accounts[0],
         data: "0x"+bytecode,
         gas: '4500000'
       }, function (e, contract){
          console.log(e, contract);
          if (typeof contract.address !== 'undefined') {
             console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
           }
    });



    status("Compile Complete.");
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


function compileCode() {
  var compilerVer = "soljson-v0.4.25-nightly.2018.8.16+commit.a9e7ae29.js";
//  BrowserSolc.loadVersion(getVersion(), function(c) {
//      compiler = c;
//      console.log("Solc Version Loaded: " + getVersion());
//      status("Solc loaded.  Compiling...");
//      solcCompile(compiler);
//  });

}

function displayContract(contractHash) {
   checkSourceCode(contractHash);
}

function loadSolcVersion() {
    status("Loading Solc: " + getVersion());

  //  BrowserSolc.loadVersion(getVersion(), function(c) {
//        compiler = c;
//        console.log("Solc Version Loaded: " + getVersion());
//        status("Solc loaded.  Compiling...");
//        solcCompile(compiler);
//    });
}

window.onload = function() {
//    document.getElementById("source").value = exampleSource;

   document.getElementById("uMessage").style.visibility="hidden";
  //  var contractHashes=[];
  //  contractHashes[0]="0x1ebcd88e0400e332977227457d5a8599b383d8960e282da42e331ee793d7ce49";
  //  contractHashes[1]="0xf0d2d13b1f73ab2c07a941014cae589913c2a27b6ce7c707918c0f811ddc05dd";

  //  populateContracts(contractHashes);
//    document.getElementById("contracts").onchange = displayContract;

    document.getElementById("versions").onchange = loadSolcVersion;

    if (typeof BrowserSolc == 'undefined') {
        console.log("You have to load browser-solc.js in the page.  We recommend using a <script> tag.");
        throw new Error();
    }

    status("Loading Compiler");
    BrowserSolc.getVersions(function(soljsonSources, soljsonReleases) {
        populateVersions(soljsonSources);

        document.getElementById("versions").value = soljsonReleases["0.4.25"];

        loadSolcVersion();
    });
};
