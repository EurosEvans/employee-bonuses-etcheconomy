var exampleSource = "";
var optimize = 1;
var compiler;
var web3provider;
//var mongoose=require('mongoose');

function getSourceCode() {
    return document.getElementById("source").value;
}

function selectContract() {
    var mycontractHash = document.getElementById("contracts").value;
    checkSourceCode(mycontractHash);
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


//       if(data.type == 'success'){
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

function listContracts() {
  document.getElementById("userMessage").innerHTML = "";
  getHashCodes();
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
        contractHashes[i]=data.doc[i].Hash;
      }
      populateContracts(contractHashes);
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
  BrowserSolc.loadVersion(getVersion(), function(c) {
      compiler = c;
      console.log("Solc Version Loaded: " + getVersion());
      status("Solc loaded.  Compiling...");
      solcCompile(compiler);
  });

}

function displayContract(contractHash) {
   checkSourceCode(contractHash);
}

function loadSolcVersion() {
    status("Loading Solc: " + getVersion());

    BrowserSolc.loadVersion(getVersion(), function(c) {
        compiler = c;
        console.log("Solc Version Loaded: " + getVersion());
        status("Solc loaded.  Compiling...");
        solcCompile(compiler);
    });
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
