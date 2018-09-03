var exampleSource = "";
var optimize = 1;
var compiler;
//var mongoose=require('mongoose');

function getSourceCode() {
    return document.getElementById("source").value;
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

function team() {
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
  document.getElementById("source").value = inividualSourceCode;
}

function individual() {
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
  document.getElementById("source").value = inividualSourceCode;
}

function solcCompile(compiler) {
    status("compiling");
    document.getElementById("compile-output").value = "";
    var result = compiler.compile(getSourceCode(), optimize);
    var stringResult = JSON.stringify(result);
    document.getElementById("compile-output").value = stringResult;

    var bytecode = result.contracts.greeter.bytecode;
    var abi = result.contracts.greeter.interface;

    web3 = new Web3(web3.currentProvider);

    // Our future code here..
     web3.eth.defaultAccount = web3.eth.accounts[0];

    var contract = web3.eth.contract(JSON.parse(abi));
    var hash = web3.sha3(getSourceCode());


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

    document.getElementById("versions").onchange = loadSolcVersion;

    if (typeof BrowserSolc == 'undefined') {
        console.log("You have to load browser-solc.js in the page.  We recommend using a <script> tag.");
        throw new Error();
    }

    status("Loading Compiler");
    BrowserSolc.getVersions(function(soljsonSources, soljsonReleases) {
        populateVersions(soljsonSources);

        document.getElementById("versions").value = soljsonReleases["0.4.5"];

        loadSolcVersion();
    });
};
