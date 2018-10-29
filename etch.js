//       if(data.type == 'success'){
var walletemailaddress;

//var mongoose=require('mongoose');

homepage = "https://etch-prepare-for-takeoff.com";


address = "0x9ae200aa2c0314ef9ed217225bad5784941f9560";

abi = [ { "constant": false, "inputs": [ { "name": "bonusType", "type": "string" }, { "name": "bonusTarget", "type": "uint256" }, { "name": "bonusEndYear", "type": "uint256" }, { "name": "bonusEndMonth", "type": "uint256" }, { "name": "bonusEndDay", "type": "uint256" }, { "name": "bonusToken", "type": "string" }, { "name": "bonusAmount", "type": "uint256" }, { "name": "bonusName", "type": "string" }, { "name": "ineq", "type": "uint256" } ], "name": "addBonus", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "k1", "type": "uint256" } ], "name": "addK", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "wallet", "type": "address" }, { "name": "token", "type": "bytes32" }, { "name": "payment", "type": "uint256" } ], "name": "addPaymentDetail", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "wallet", "type": "address" } ], "name": "addWallet", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "wallet", "type": "address" }, { "name": "bonusName", "type": "string" } ], "name": "addWalletBonus", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "wallet", "type": "address" }, { "name": "emailAddress", "type": "string" } ], "name": "addWalletEmail", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "payable": true, "stateMutability": "payable", "type": "fallback" }, { "constant": true, "inputs": [ { "name": "", "type": "bytes32" } ], "name": "Bonuses", "outputs": [ { "name": "bonusName", "type": "bytes32" }, { "name": "bonusType", "type": "bytes32" }, { "name": "bonusTarget", "type": "uint256" }, { "name": "bonusEndYear", "type": "uint256" }, { "name": "bonusEndMonth", "type": "uint256" }, { "name": "bonusEndDay", "type": "uint256" }, { "name": "bonusToken", "type": "bytes32" }, { "name": "bonusAmount", "type": "uint256" }, { "name": "bonusExists", "type": "bool" }, { "name": "ineq", "type": "uint8" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "uint256" } ], "name": "BonusNamesArray", "outputs": [ { "name": "bonusName", "type": "bytes32" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "uint256" } ], "name": "BonusNamesBytes", "outputs": [ { "name": "", "type": "bytes32" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "x", "type": "bytes32" } ], "name": "bytes32ToString", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "pure", "type": "function" }, { "constant": true, "inputs": [], "name": "getBonusNames", "outputs": [ { "name": "", "type": "bytes32[]" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "mybonusname", "type": "string" } ], "name": "getFreeWallets", "outputs": [ { "name": "", "type": "address[]" }, { "name": "", "type": "uint256" }, { "name": "", "type": "uint256" }, { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "mybonusname", "type": "string" } ], "name": "getFreeWalletsx", "outputs": [ { "name": "", "type": "address[]" }, { "name": "", "type": "uint256" }, { "name": "", "type": "uint256" }, { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "bonusname", "type": "string" } ], "name": "getNumberWalletBonusAllocations", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "getNumberWallets", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "wallet", "type": "address" } ], "name": "getWalletBonuses", "outputs": [ { "name": "bonusNames", "type": "bytes32[]" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "getWallets", "outputs": [ { "name": "", "type": "address[]" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "wallet", "type": "address" }, { "name": "bonusName", "type": "string" }, { "name": "targetReached", "type": "uint256" }, { "name": "endYear", "type": "uint256" }, { "name": "endMonth", "type": "uint256" }, { "name": "endDay", "type": "uint256" } ], "name": "isBonusPayable", "outputs": [ { "name": "payBonus", "type": "bool" }, { "name": "bonusAmount", "type": "uint256" }, { "name": "bonusToken", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "address" }, { "name": "", "type": "bytes32" } ], "name": "PaymentDetails", "outputs": [ { "name": "totalPaid", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "source", "type": "string" } ], "name": "stringToBytes32", "outputs": [ { "name": "result", "type": "bytes32" } ], "payable": false, "stateMutability": "pure", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "address" }, { "name": "", "type": "bytes32" } ], "name": "WalletBonuses", "outputs": [ { "name": "bonusExists", "type": "bool" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "address" }, { "name": "", "type": "uint256" } ], "name": "WalletBonusLists", "outputs": [ { "name": "bonusname", "type": "bytes32" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "address" } ], "name": "WalletDetails", "outputs": [ { "name": "walletEmailAddress", "type": "bytes32" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "uint256" } ], "name": "Wallets", "outputs": [ { "name": "", "type": "address" } ], "payable": false, "stateMutability": "view", "type": "function" } ]


payEtchAddress="0xd2195e67eb1ee37803d47bb8d5ab5c1a4bd91f70";

payEtchABI=[ { "constant": false, "inputs": [ { "name": "_apiKeyHash", "type": "bytes32" } ], "name": "payEtch", "outputs": [ { "name": "success", "type": "bool" } ], "payable": true, "stateMutability": "payable", "type": "function" }, { "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "constant": true, "inputs": [ { "name": "", "type": "bytes32" } ], "name": "ApprovedWallets", "outputs": [ { "name": "ClientWalletAddress", "type": "address" }, { "name": "keyExists", "type": "bool" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "address" } ], "name": "ClientWallets", "outputs": [ { "name": "clientBalance", "type": "uint256" }, { "name": "clientAccount", "type": "bool" }, { "name": "apiKeyHash", "type": "bytes32" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "walletAddress", "type": "address" } ], "name": "getBalance", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "walletAddress", "type": "address" } ], "name": "getClientBalance", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "mywallet", "outputs": [ { "name": "", "type": "address" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [ { "name": "", "type": "address" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "uint256" } ], "name": "validAPIKeys", "outputs": [ { "name": "", "type": "bytes32" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "authKey", "type": "bytes32" } ], "name": "validKey", "outputs": [ { "name": "", "type": "bool" }, { "name": "", "type": "address" } ], "payable": false, "stateMutability": "view", "type": "function" } ]

var selectedCheckDate;


function printErrorMessage(innerHTMLTag, paraTag, Msg) {
    document.getElementById(innerHTMLTag).style.visibility="visible";
    document.getElementById(innerHTMLTag).innerHTML = Msg;
    document.getElementById(paraTag).classList.add("alert-danger");
    document.getElementById(paraTag).classList.remove("alert-info");
}

function printSuccessMessage(innerHTMLTag, paraTag, Msg) {
    document.getElementById(innerHTMLTag).style.visibility="visible";
    document.getElementById(innerHTMLTag).innerHTML = Msg;
    document.getElementById(paraTag).classList.remove("alert-danger");
    document.getElementById(paraTag).classList.add("alert-info");
}

function getElementValue(idValue) {
  return  document.getElementById(idValue).value;
}

function getBytes32(aValue) {

  var  ch, st, re = [];
  var str="0x";
  for (var i = 0; i < aValue.length; i++ ) {
	ch = aValue.charCodeAt(i).toString(16);
  str=str+ch; // get char
	st = [];                 // set up "stack"
  do {
	  st.push( ch & 0xFF );  // push byte to stack
	  ch = ch >> 8;          // shift value down by 1 byte
	}
	while ( ch );
	// add stack contents to result
	// done because chars have "wrong" endianness
	re = re.concat( st.reverse() );
  }
  // return an array of bytes
  return str;



}

//function getBytes32web(aValue) {
//  web3 = new Web3(web3.currentProvider);
//  return web3.fromAscii(aValue);
//}

function getContractInstance(_abi, _address) {
//  web3 = new Web3(web3.currentProvider);
  publicKey= "b523d13732d14c5ea8e3f93cdc9ad2f4";

  web3y = new Web3(new Web3.providers.HttpProvider("https://kovan.infura.io/v3/"+publicKey));
//  let web3.eth.defaultAccount = web3.eth.accounts[0];
  var contract = web3y.eth.contract(_abi);
  var instanceContract = contract.at(_address);
  return instanceContract;
}


function getMetamaskContractInstance(_abi, _address) {

  web3x = new Web3(web3.currentProvider);
  web3x.eth.defaultAccount = web3x.eth.accounts[0];
  var contract = web3x.eth.contract(_abi);
  var instanceContract = contract.at(_address);
  return instanceContract;
}

function getAscii(hexx) {
    var hex = hexx.toString();//force conversion
    var str = ''; // start at position 2 to allow for the 0x
    for (var i = 2; (i < hex.length && hex.substr(i, 2) !== '00'); i += 2)
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    return str;
}


//function getAsciiweb(aBytes32) {
//  web3 = new Web3(web3.currentProvider);
//  var aAscii = web3.toAscii(aBytes32);
//  return aAscii;
//}

function getSHA(insecureData) {
//  web3 = new Web3(web3.currentProvider);
  publicKey= "b523d13732d14c5ea8e3f93cdc9ad2f4";

  web3z = new Web3(new Web3.providers.HttpProvider("https://kovan.infura.io/v3/"+publicKey));

  return web3z.sha3(insecureData);
}

function getWei(ethAmount) {
  return ethAmount*(1e18);
}

//function getWeiWeb(ethAmount) {
//  web3 = new Web3(web3.currentProvider);
//  return web3.toWei(ethAmount);
//}

function getFromWei(weiAmount) {
  return weiAmount*(1e-18);
}


//function getFromWeiWeb(weiAmount) {
//  web3 = new Web3(web3.currentProvider);
//  return web3.fromWei(weiAmount);
//}

function loginUserEntry() {
  var response = grecaptcha.getResponse();
  if (response.length == 0) {
    // uLoginMessage
    sessionStorage.removeItem("login");
    printErrorMessage(
      "loginMessage",
      "uLoginMessage",
      "Please check Captcha Box"
    );
  } else {
    document.getElementById("uLoginMessage").style.visibility = "hidden";
    loginUserDB(
      getElementValue("loginUserName"),
      getSHA(getElementValue("loginPassword"))
    );
  }
}


function loginUserDB(username, password) {
  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", "/api/loginuser", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("username=" + username + "&password=" + password);
  xhttp.onreadystatechange = function(){
    var messageDiv = document.getElementById("message");
    if (this.readyState == 4 && this.status == 200) {
      var data = JSON.parse(this.response);
      document.getElementById("uLoginMessage").style.visibility = "visible";
      if (data.message != "Correct") {
        sessionStorage.removeItem("login");
        printErrorMessage(
          "loginMessage",
          "uLoginMessage",
          "login failed with uid/pwd error"
        );

      } else {
        let employee = data.doc.Employee;
        let employer = data.doc.Employer;
        setCookie("etchcookie", username, 7);
        let myLogin = {
          login: username,
          employer: employer,
          employee: employee
        };
        sessionStorage.setItem("login", JSON.stringify(myLogin));
        document.getElementById("loginMessage").innerHTML =
        data.message + " employee " + employee + " employer " + employer;
        document.getElementById("uLoginMessage").classList.add("alert-info");
        document
          .getElementById("uLoginMessage")
          .classList.remove("alert-danger");
        if (employer) {
          var newUrl = homepage + "/index.html";
          window.location.replace(newUrl);
        } else {
          var newUrl = homepage + "/indexemployee.html";
          window.location.replace(newUrl);
        }
      }
    }
  };
}



function addUser() {
  var response = grecaptcha.getResponse();
  if (response.length == 0) {
    // uLoginMessage
    document.getElementById("uRegMessage").style.visibility = "visible";
    sessionStorage.removeItem("login");
    printErrorMessage("regMessage", "uRegMessage", "Please check Captcha Box");
  } else {
    var _employeeCheckBox = document.getElementById("checkEmployee");
    var _employerCheckBox = document.getElementById("checkEmployer");
    if (
      _employeeCheckBox.checked == true ||
      _employerCheckBox.checked == true
    ) {
      var userDetail = {
        userName: getElementValue("regUserName"),
        pwdHash: getSHA(getElementValue("regPassword")),
        regEmail: getElementValue("regEmail"),
        employeeCheckBox: _employeeCheckBox.checked,
        employerCheckBox: _employerCheckBox.checked
      };
      registerUserDB(userDetail);
    } else {
      document.getElementById("uRegMessage").style.visibility = "visible";
      printErrorMessage(
        "regMessage",
        "uRegMessage",
        "Please check Employee/Employer Box"
      );
    }
  }
}



function registerUserDB(userDetail) {
  var xhttp = new XMLHttpRequest();

  xhttp.open("POST", "/api/reguser", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send(
    "username=" +
      userDetail.userName +
      "&emailaddress=" +
      userDetail.regEmail +
      "&password=" +
      userDetail.pwdHash +
      "&employee=" +
      userDetail.employeeCheckBox +
      "&employer=" +
      userDetail.employerCheckBox
  );

  xhttp.onreadystatechange = function(){
    var messageDiv = document.getElementById("message");
    if (this.readyState == 4 && this.status == 200) {
      var data = JSON.parse(this.response);
      document.getElementById("uRegMessage").style.visibility = "visible";
      if (data.message == "Already Exists") {
        printErrorMessage("regMessage", "uRegMessage", data.message);
      } else {
        var emailfrom = "info@etch-prepare-for-takeoff.com";
        var subject = "Thank you for regsitering";
        var text =
          "<p>You are now registered to use the Etch system.<p>" +
          "<p></p>" +
          '<p>Visit us at <a href="https://etch-prepare-for-takeoff.com">etch-prepare-for-takeoff.com</a></p>' +
          "<p></p>" +
          "<p>Etch Team<p>";
        sendservermail(emailfrom, userDetail.regEmail, subject, text);
        var newUrl = homepage + "/pages/samples/login.html";
        window.location.replace(newUrl);
      }
    }
  };
}




function selectEmployeeBonus() {
    var bonusname = document.getElementById("employeebonuses").value;
    getMyBonusBlockchain(bonusname);
}

function employeeBonus() {
    var myWallet = document.getElementById("employeeWallet").value;
    getEmployeeBonusesBlockchain(myWallet);
    getEmployeeBlockchain(myWallet);
}


function selIndDom() {
    document.getElementById("selBonusType").value="Individual";
}

function selGreater() {
    document.getElementById("selCondition").value="Greater Than";
}

function selLess() {
    document.getElementById("selCondition").value="Less Than";
}

function selGreater2() {
    document.getElementById("selCondition2").value="Greater Than";
}

function selLess2() {
    document.getElementById("selCondition2").value="Less Than";
}

function selGreater2() {
    document.getElementById("selCondition2").value="Greater Than";
}

function selLess2() {
    document.getElementById("selCondition2").value="Less Than";
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
  document.getElementById("approvedWallet").innerHTML = "";
  document.getElementById("approvedWalletAddress").innerHTML = "";

  var bonusDetail = {
      authKey:  getElementValue("selAuthKey"),
      token:  getElementValue("selToken"),
      bonusRaw:  getElementValue("selBonus"),
      target:  getElementValue("selTarget"),
      bonusName:  getElementValue("selBonusName"),
      bonusType:  getElementValue("selBonusType"),
      selectedDate:  getElementValue("selBonusDate"),
      selectedEq:  getElementValue("selCondition")
  };


//  var authKey = document.getElementById("selAuthKey").value;
//  var token = document.getElementById("selToken").value;
//  var bonusRaw = document.getElementById("selBonus").value;
//  var target = document.getElementById("selTarget").value;
//  var bonusName = document.getElementById("selBonusName").value;
//  var bonusType = document.getElementById("selBonusType").value;
//  var selectedDate = document.getElementById("selBonusDate").value;
//  var selectedEq = document.getElementById("selCondition").value;

  if (bonusDetail.authKey != null && bonusDetail.authKey != "") {
      addBonusConditionManager(bonusDetail)
  } else {
    printErrorMessage("eMessage", "eMessage", "You need to an auth key");
  }
}

function addBonusConditionManager(
  bonusDetail
) {
  var bonus = bonusDetail.bonusRaw;
  if (bonusDetail.token == "ETH") {
    bonus = getWei(bonusDetail.bonusRaw);
  }
  var ineq=0; // default
  if (bonusDetail.selectedEq == "Greater Than") ineq = 1;
  else ineq = 0;

  var arrayDate;
  document.getElementById("eMessage").style.visibility = "hidden";
  document.getElementById("eMessage").innerHTML = "";

  if (bonusDetail.selectedDate != undefined && bonusDetail.selectedDate != null) {
    arrayDate = bonusDetail.selectedDate.split("/");
  } else {
    document.getElementById("eMessage").style.visibility = "visible";
    printErrorMessage("eMessage", "eMessage", "Date Wrong");
  }
  var day;
  var month;
  var year;
  if (arrayDate != undefined && arrayDate != null) {
    if (arrayDate.length > 2) {
      month = arrayDate[1];
      day = arrayDate[0];
      year = arrayDate[2];
    } else {
      document.getElementById("eMessage").style.visibility = "visible";
      printErrorMessage("eMessage", "eMessage", "Date Wrong");
    }
  } else {
    document.getElementById("eMessage").style.visibility = "visible";
    printErrorMessage("eMessage", "eMessage", "Date Wrong");
  }

  var eBonus = checkBonusNameData(bonusDetail.token, bonus,
    bonusDetail.target, bonusDetail.bonusName, bonusDetail.bonusType);

  if (eBonus) {
    //    savebonusname(bonusName);
    document.getElementById("eMessage").style.visibility = "visible";
    printSuccessMessage("eMessage", "eMessage", "Bonus Condition added");

    if (bonusDetail.authKey != null && bonusDetail.authKey != "") {
      addBonusConditionAPI(
        bonusDetail.authKey,
        bonusDetail.token,
        bonus,
        bonusDetail.target,
        bonusDetail.bonusName,
        bonusDetail.bonusType,
        day,
        month,
        year,
        ineq
      );
      // process api call to etch
    } else {
      //process normal process via metamask
  //    saveBonusBlockchain(
  //      bonusDetail.token,
  //      bonus,
  //      bonusDetail.target,
  //      bonusDetail.bonusName,
  //      bonusDetail.bonusType,
  //      day,
  //      month,
  //      year,
  //      ineq
  //    );
    }
  } else {
    document.getElementById("eMessage").style.visibility = "visible";
    printErrorMessage("eMessage", "eMessage", "Values are wrong");
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
  var authKey = document.getElementById("selAuthKey").value;
  var target = document.getElementById("selTarget2").value;
  var bonusName = document.getElementById("selBonusName2").value;
  var bonusType = document.getElementById("selBonusType2").value;
  var rewardDate =  document.getElementById("selBonusDate2").value;
  var selectedEq = document.getElementById("selCondition2").value;

  if (authKey != null && authKey != "") {
      addBonusConditionManager2(token, bonus, authKey, target,
        bonusName, bonusType, rewardDate, selectedEq );
  } else {
    printErrorMessage("eMessage2", "eMessage2", "You need to an auth key");
  }

}

function addBonusConditionManager2(token, bonus, authKey, target,
  bonusName, bonusType, rewardDate, selectedEq) {


if (selectedEq=="Greater Than") ineq=1;
else ineq=0;
//  ineq = 1;
//  if (bonusType=="Team") {
//    ineq = 0;
//  }


//  var selDate = document.getElementById("datepicker").value;
  var arrayDate;
  document.getElementById("eMessage2").style.visibility="hidden";
  document.getElementById("eMessage2").innerHTML="";

  if (rewardDate!=undefined && rewardDate!=null) {
    arrayDate = rewardDate.split("/");
  } else {
    document.getElementById("eMessage2").style.visibility="visible";
    printErrorMessage("eMessage2", "eMessage2", "Date Wrong" );
  }
  var day; var month; var year;
  if (arrayDate!=undefined && arrayDate!=null) {
      if (arrayDate.length > 2) {
          month = arrayDate[1];
          day = arrayDate[0];
          year = arrayDate[2];
      } else {
        document.getElementById("eMessage2").style.visibility="visible";
        printErrorMessage("eMessage2", "eMessage2", "Date Wrong" );
      }
  } else {
    document.getElementById("eMessage2").style.visibility="visible";
    printErrorMessage("eMessage2", "eMessage2", "Date Wrong" );
  }


  var eBonus = checkBonusNameData(token, bonus, target, bonusName, bonusType);

if (eBonus) {
  //  savebonusname(bonusName);
    document.getElementById("eMessage2").style.visibility="visible";
    printSuccessMessage("eMessage2", "eMessage2", "Reward Condition Added" );
  //  saveBonusBlockchain(token, bonus, target, bonusName,
  //    bonusType, day, month, year, ineq);
  if (authKey != null && authKey != "") {
    addBonusConditionAPI(
      authKey,
      token,
      bonus,
      target,
      bonusName,
      bonusType,
      day,
      month,
      year,
      ineq
    );
    // process api call to etch
  }
} else {
  document.getElementById("eMessage2").style.visibility="visible";
  printErrorMessage("eMessage2", "eMessage2", "Values are wrong" );

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
   var authKey = document.getElementById("selAuthKey").value;

   if (authKey != null && authKey != "") {
          getEmailAddressAndAssignBonus(readwallet, bonusName, authKey);
   } else {
     printErrorMessage("eMessage", "errorMessage", "You need to an auth key");
   }

 // assign global variable - that or use a session variable
  // assignWalletBonus(readwallet, bonusName, walletemailaddress);
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
    //pop free wallets
    var typelisting=0;
    getFreeBlockchainWalletsABonus(bonusname, typelisting);

}




function getBonusBlockchain(bonusname) {
  var bonusnameBytes32 = getBytes32(bonusname);

  var instanceContract = getContractInstance(abi, address);

  instanceContract.Bonuses(
       bonusnameBytes32
     , function (e, result){
        console.log(result);
        var x = popBonusFields(result);
  });

}



function functsubmit(event) {
  //var msg= document.getElementById()listAllWallets
  var x=1;
  var t=1;
}

function getEmailAddressAndAssignBonus(walletaddress, bonusName, authKey) {

  var instanceContract = getContractInstance(abi, address);

  walletemailaddress="";
  instanceContract.WalletDetails(
       walletaddress
     , function (e, result){
        console.log(result);
           var walletemailaddress = getAscii(result);
           walletemailaddress=walletemailaddress.replace(/\0.*$/g,'');
           assignWalletBonusAPI(walletaddress, bonusName, walletemailaddress, authKey);



  });

}

function assignWalletBonusAPI(walletaddress, bonusName, walletemailaddress, authKey) {

  var instanceContract=getContractInstance(payEtchABI,payEtchAddress );

  var apiKeyHash = getSHA(authKey);

  instanceContract.validKey(apiKeyHash, function (e, result){
        console.log(result);
        //var emailaddr= getAscii(result);
      //  document.getElementById("allwalletemail").innerHTML = emailaddr;
    //  var errorDetected = result[0];
      var validAuthKey = result[0];
      var approvedWallet = result[1];
      if (validAuthKey) {
        document.getElementById("approvedWallet").innerHTML= "Approved";
        document.getElementById("approvedWalletAddress").innerHTML= approvedWallet;
           assignWalletBonusCallAPI(walletaddress, bonusName, walletemailaddress, authKey);
      }
  });


}


function addWalletAPI(wallet, emailaddress, authKey) {

  var instanceContract=getContractInstance(payEtchABI,payEtchAddress );

  var apiKeyHash = getSHA(authKey);

  instanceContract.validKey(apiKeyHash, function (e, result){
        console.log(result);
        //var emailaddr= getAscii(result);
      //  document.getElementById("allwalletemail").innerHTML = emailaddr;
    //  var errorDetected = result[0];
      var validAuthKey = result[0];
      var approvedWallet = result[1];
      if (validAuthKey) {
        document.getElementById("approvedWallet").innerHTML= "Approved";
        document.getElementById("approvedWalletAddress").innerHTML= approvedWallet;
           addWalletCallAPI(wallet, emailaddress, authKey);
      }
  });


}



function getMyBonusBlockchain(bonusname) {

  var bonusnameBytes32 = getBytes32(bonusname);

  var instanceContract = getContractInstance(abi, address);


  instanceContract.Bonuses(
       bonusnameBytes32
     , function (e, result){
        console.log(result);
        var x = popMyBonusFields(result);
  });

}


//getWalletBonusesBlockchain

function selectWalletBonuses() {
  var bonus =document.getElementById("walletbonuses").value;
  document.getElementById("checkbonus").innerHTML=bonus;

}

function getWalletBonusesBlockchain(wallet) {

  instanceContract=getContractInstance(abi, address);

  document.getElementById("checkbonus").innerHTML="";
  instanceContract.getWalletBonuses(
       wallet
     , function (e, result){
        console.log(result);
        populateWalletBonuses(wallet, result);
  });

}

function getEmployeeBonusesBlockchain(wallet) {

  var instanceContract = getContractInstance(abi, address);

  //document.getElementById("checkbonus").innerHTML="";
  instanceContract.getWalletBonuses(
       wallet
     , function (e, result){
        console.log(result);
        populateEmployeeBonuses(result);
  });

}

function getWalletBlockchain(wallet) {

  var instanceContract = getContractInstance(abi, address);


  instanceContract.WalletDetails(
       wallet
     , function (e, result){
        console.log(result);
        var emailaddr= getAscii(result);
        document.getElementById("allwalletemail").innerHTML = emailaddr;
  });

}

function getMyWalletBlockchain(wallet) {

  var instanceContract = getContractInstance(abi, address);


  instanceContract.WalletDetails(
       wallet
     , function (e, result){
        console.log(result);
        var emailaddr= getAscii(result);
        document.getElementById("mywalletemail").innerHTML = emailaddr;
  });

}



function getEmployeeBlockchain(wallet) {

  var instanceContract = getContractInstance(abi, address);


  instanceContract.WalletDetails(
       wallet
     , function (e, result){
        console.log(result);
        var emailaddr= getAscii(result);
        document.getElementById("employeeemail").innerHTML = emailaddr;
  });

}


function popBonusFields(bonusData) {

    if (bonusData==undefined) return false;
    if (bonusData==null) return false;
    if (bonusData.length > 10) return false;

    var bonusName;
    var bonusName32 = bonusData[0]; //
    if (isValid(bonusName32)) bonusName = getAscii(bonusName32);
    var bonusType;
    var bonusType32 = bonusData[1];
    if (isValid(bonusType32)) bonusType = getAscii(bonusType32);

    var bonusTarget = bonusData[2]; //
    var bonusEndYear = bonusData[3];
    var bonusEndMonth = bonusData[4];
    var bonusEndDay = bonusData[5];

    var bonusToken;
    var bonusToken32 = bonusData[6]; //
    if (isValid(bonusToken32)) bonusToken = getAscii(bonusToken32);

    var bonusAmount = bonusData[7]; //
    var bonusExists = bonusData[8];
    var bonusIneq = bonusData[9];
// eth
    if (bonusToken32=="0x4554480000000000000000000000000000000000000000000000000000000000") {
      // convert from Wei
      bonusAmount=getFromWei(bonusAmount);
    }


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

    var IFString = "IF " + bonusType + " Target " + ineqStr + " " + bonusTarget+ "; ";
    var BeforeString = "Before " + bonusDate+ "; ";
    var ThenString = "Then pay " + bonusAmount + " " + bonusToken+ "; ";

    document.getElementById("ifstring").innerHTML = IFString;
    document.getElementById("beforestring").innerHTML = BeforeString;
    document.getElementById("thenstring").innerHTML = ThenString;

    //populateWallets(freeWallets);
    var typelisting=0;
    getFreeBlockchainWalletsABonus(bonusName, typelisting);

    return true;

}

function popMyBonusFields(result) {

    if (result==undefined) return false;
    if (result==null) return false;
    if (result.length > 10) return false;

    var bonusName;
    var bonusName32 = result[0]; //
    if (isValid(bonusName32)) bonusName = getAscii(bonusName32);
    var bonusType;
    var bonusType32 = result[1];
    if (isValid(bonusType32)) bonusType = getAscii(bonusType32);

    var bonusTarget = result[2]; //
    var bonusEndYear = result[3];
    var bonusEndMonth = result[4];
    var bonusEndDay = result[5];

    var bonusToken;
    var bonusToken32 = result[6]; //
    if (isValid(bonusToken32)) bonusToken = getAscii(bonusToken32);

    var bonusAmount = result[7]; //
    var bonusExists = result[8];
    var bonusIneq = result[9];

    var bonusDate = bonusEndDay + "/"+bonusEndMonth+"/"+bonusEndYear;

    if (bonusToken32=="0x4554480000000000000000000000000000000000000000000000000000000000") {
      // convert from Wei
      bonusAmount=getFromWei(bonusAmount);
    }

    if ((bonusIneq) == 1) {
        ineqStr="Greater Than";
    } else {
        ineqStr="Less Than";
    }

    var IFString = "IF " + bonusType + " Target " + ineqStr + " " + bonusTarget+ "; ";
    var BeforeString = "Before " + bonusDate + "; ";
    var ThenString = "Then pay " + bonusAmount + " " + bonusToken + "; ";
    document.getElementById("mybonusname").innerHTML = bonusName;
    document.getElementById("mybonustype").innerHTML = bonusType;
    document.getElementById("mybonustarget").innerHTML = bonusTarget;
    document.getElementById("mybonuspayable").innerHTML = bonusAmount;
    document.getElementById("mybonustoken").innerHTML = bonusToken;
    document.getElementById("mybonusdate").innerHTML = bonusDate;

    document.getElementById("mybonusdate").innerHTML = bonusDate;

    document.getElementById("ifstring2").innerHTML = IFString;
    document.getElementById("beforestring2").innerHTML = BeforeString;
    document.getElementById("thenstring2").innerHTML = ThenString;

    return true;

}


function selectToken() {
    var token = document.getElementById("tokens").value;
    document.getElementById("readtoken").value = token;
}

//function getVersion() {
//    return document.getElementById("versions").value;
//}

function status(txt) {
    document.getElementById("status").innerHTML = txt;
}



function populateWalletBonuses(wallets, bonusnames) {
  sel = document.getElementById("walletbonuses");
  sel.innerHTML = "";
  if (wallets.length > 0)
    var  bonusnamesStrLocal = getAscii(bonusnames[0]);
      document.getElementById("checkbonus").innerHTML=bonusnamesStrLocal;
    for(var i = 0; i < bonusnames.length; i++) {
        var opt = document.createElement('option');
        var  bonusnamesStr = getAscii(bonusnames[i]);
        opt.appendChild( document.createTextNode(bonusnamesStr) );
        opt.value = bonusnamesStr;
        sel.appendChild(opt);
    }
}

function populateEmployeeBonuses(bonusnames) {
  sel = document.getElementById("employeebonuses");
  sel.innerHTML = "";
  if (bonusnames.length > 0)
    var  bonusnamesStrLocal = getAscii(bonusnames[0]);
    //  document.getElementById("checkbonus").innerHTML=bonusnamesStrLocal;
    var bonusname0 = getAscii(bonusnames[0]);
    for(var i = 0; i < bonusnames.length; i++) {
        var opt = document.createElement('option');
        var  bonusnamesStr = getAscii(bonusnames[i]);
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



function populateWalletsBuy(wallets) {
  sel = document.getElementById("allwalletsbuy");
  sel.innerHTML = "";
  if (wallets.length > 0)
      document.getElementById("readallwalletbuy").innerHTML=wallets[0];
    for(var i = 0; i < wallets.length; i++) {
        var opt = document.createElement('option');
        opt.appendChild( document.createTextNode(wallets[i]) );
        opt.value = wallets[i];
        sel.appendChild(opt);
    }

        getWalletBlockchain(wallets[0]);

}


function selectWalletFromAllWalletsBuy() {
  var wallet = document.getElementById("allwalletsbuy").value;
  document.getElementById("readallwalletbuy").innerHTML = wallet;
  getWalletBlockchain(wallet);
//  document.getElementById("checkwallet").innerHTML=wallet;

  //getWalletBlockchain(wallet);

  // read blockchain for details.
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

    var selectedCheckDate = document.getElementById("selCheckDate").value;

   var arrayDate;
   if (selectedCheckDate!=undefined && selectedCheckDate!=null) {
      arrayDate = selectedCheckDate.split("/");
   } else {
   }
   var day; var month; var year;
   if (arrayDate!=undefined && arrayDate!=null) {
       if (arrayDate.length > 2) {
           month = arrayDate[1];
           day = arrayDate[0];
           year = arrayDate[2];
       }
   }

    isBonusPayable(wallet, bonusname, targetreached, year, month, day);


}

function populateBonuses(bonusnames) {
  sel = document.getElementById("listBonusNames");
  sel.innerHTML = "";
  if (bonusnames.length > 0)
    //  document.getElementById("readwallet").value=wallets[0];
    for(var i = 0; i < bonusnames.length; i++) {
        var opt = document.createElement('option');
        var localBonusName = getAscii(bonusnames[i]);
        opt.appendChild( document.createTextNode(localBonusName) );
        opt.value = localBonusName;
        sel.appendChild(opt);
    }
    var bonusnameFirst = getAscii(bonusnames[0]);
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








function addBonusConditionCallAPI (authKeyHash,  token, bonus, target,
  bonusName, bonusType, day, month, year, ineq, authkey){
  var xhttp = new XMLHttpRequest();

  xhttp.open("POST", "/api/addBonus", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("token=" +token + "&bonus=" + bonus+ "&target=" + target+ "&bonusName="
  + bonusName+ "&bonusType=" + bonusType+"&day="
  + day+"&month=" + month+"&year=" + year+"&ineq=" + ineq+"&authkey=" + authkey);
  console.log(" api respoonse - " + xhttp.responseText);
  console.log(" api readyState - " + xhttp.readyState);
  xhttp.onreadystatechange = function(){
  //  var messageDiv = document.getElementById('message');
//    var data = JSON.parse(this.response);

    if(this.readyState == 4 && this.status ==200){
       var data = JSON.parse(this.response);
       console.log("ky " + data.message );
       document.getElementById("eMessage").style.visibility="visible";
       printSuccessMessage("eMessage","eMessage","Bonus Add being processed ")

        //   document.getElementById("eMessage").innerHTML = "Bonus Add being processed ";
        //   document.getElementById("eMessage").classList.add("alert-info");
        //   document.getElementById("eMessage").classList.remove("alert-danger");


       //document.getElementById("userMessage").value = JSON.parse(this.response).message;



    }
  };
}







function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function eraseCookie(name) {
  //  document.cookie = name+'=; Max-Age=-99999999;';
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';

}


function fastaddbonus() {
      var newUrl = homepage + "/pages/ui-features/buttons.html";
      window.location.replace(newUrl);
}

function fastmybonus() {
    var newUrl = homepage + "/pages/forms/mybonus.html";
    window.location.replace(newUrl);
}


function checkUserDB (username){
  var xhttp = new XMLHttpRequest();

  xhttp.open("POST", "/api/checkuser", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("username=" +username );

  xhttp.onreadystatechange = function(){
    var messageDiv = document.getElementById('message');
    if(this.readyState == 4 && this.status ==200){
       var data = JSON.parse(this.response);
       var employee=data.doc.Employee;
       var employer=data.doc.Employer;
       var myLogin = {'login': username, 'employer': employer, 'employee': employee};
  //   document.getElementById("uLoginMessage").style.visibility="visible";
       if (data.message != "Correct") {
           sessionStorage.removeItem('login')
           var newUrl = homepage + '/pages/samples/login.html'
           window.location.replace(newUrl);

       } else {
           document.getElementById("myuser").innerHTML = username;
           document.getElementById("myusertop").innerHTML = username;
           sessionStorage.setItem('login', JSON.stringify(myLogin));
           if (employer) {
                var newUrl = homepage + "/index.html";
                window.location.replace(newUrl);
           } else {
                var newUrl = homepage + "/indexemployee.html";
                window.location.replace(newUrl);
          }
      }
       //document.getElementById("userMessage").value = JSON.parse(this.response).message;



    }
  };
}








function sendservermail (emailfrom, emailto, subject, text){
  var xhttp = new XMLHttpRequest();

  xhttp.open("POST", "/api/sendmail", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("emailfrom=" +emailfrom + "&emailto=" + emailto + "&subject=" + subject + "&text=" + text );

  xhttp.onreadystatechange = function(){
    var messageDiv = document.getElementById('message');
    if(this.readyState == 4 && this.status ==200){
       var data = JSON.parse(this.response);
  //     document.getElementById("uMessage").style.visibility="visible";
  //     if (data.message == "Wallet exists") {
  //         document.getElementById("userMessage").innerHTML = data.message;
  //         document.getElementById("uMessage").classList.add("alert-danger");
  //         document.getElementById("uMessage").classList.remove("alert-info");

  //     } else {
  //         document.getElementById("userMessage").innerHTML = data.message;
  //         document.getElementById("uMessage").classList.add("alert-info");
  //         document.getElementById("uMessage").classList.remove("alert-danger");
  //    }
       //document.getElementById("userMessage").value = JSON.parse(this.response).message;



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
         printErrorMessage("userMessage","uMessage", data.message );

       } else {
           printSucessMessage("userMessage","uMessage", data.message );
        //   document.getElementById("userMessage").innerHTML = data.message;
        //   document.getElementById("uMessage").classList.add("alert-info");
        //   document.getElementById("uMessage").classList.remove("alert-danger");
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
         printErrorMessage("userMessage","uMessage", data.message );
  //         document.getElementById("userMessage").innerHTML = data.message;
    //       document.getElementById("uMessage").classList.add("alert-danger");
      //     document.getElementById("uMessage").classList.remove("alert-info");

       } else {
          printSuccessMessage("userMessage","uMessage", data.message );
      //     document.getElementById("userMessage").innerHTML = data.message;
      //     document.getElementById("uMessage").classList.add("alert-info");
      //     document.getElementById("uMessage").classList.remove("alert-danger");
      }
    }
  };
}


function addWallet() {
  //  document.getElementById("userMessage").innerHTML = "";

    var wallet=     document.getElementById("walletaddress").value;
    var email=     document.getElementById("walletemailaddress").value;

    var authKey = document.getElementById("selAuthKey").value;

    if (authKey != null && authKey != "") {
        //   getEmailAddressAndAssignBonus(readwallet, bonusName, authKey);
       addWalletAPI(wallet, email, authKey);
    } else {
       printErrorMessage("eMessage", "errorMessage", "You need to an auth key");
    }

    //savewallet(wallet, email); // need this for UI screens
   // future - need to work out how to integrate
  // Email has a max length of 32 bytes

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
  var  bonusname =  document.getElementById("displayBonusName").innerHTML;
  getFreeBlockchainWalletsABonus(bonusname, typelisting);

  //var bonusname = document.getElementById("listBonusNames").firstChild.innerHTML;
//  document.getElementById("readwallet").value = wallet;
  //getBonusBlockchain(bonusname);

//  var wallet = document.getElementById("wallets").firstChild.innerHTML;
//  document.getElementById("readwallet").innerHTML = wallet;

}

function listAllWallets() {
  //document.getElementById("userMessage").innerHTML = "";
  var typelisting=1;
  getBlockchainWallets(typelisting);



}


function listAllWalletsBuy() {
  //document.getElementById("userMessage").innerHTML = "";
  var typelisting=2;
  getBlockchainWallets(typelisting);



}


function getTokens() {
  var tokens = ["IOU121", "ETH", "BTC"];
  populateTokens(tokens);
}

function addBonusConditionAPI( authKey, token, bonus, target,
  bonusName, bonusType, day, month, year, ineq) {

  var instanceContract=getContractInstance(payEtchABI,payEtchAddress );

  var apiKeyHash = getSHA(authKey);

  instanceContract.validKey(apiKeyHash, function (e, result){
        console.log(result);
        //var emailaddr= getAscii(result);
      //  document.getElementById("allwalletemail").innerHTML = emailaddr;
    //  var errorDetected = result[0];
      var validAuthKey = result[0];
      var approvedWallet = result[1];
      if (validAuthKey) {
        document.getElementById("approvedWallet").innerHTML= "Approved";
        document.getElementById("approvedWalletAddress").innerHTML= approvedWallet;
           addBonusConditionCallAPI(apiKeyHash, token, bonus, target,
             bonusName, bonusType, day, month, year, ineq, authKey);
      }
  });


}



function isBonusPayable(wallet, bonusname, targetreached,
  year, month, day) {

  var instanceContract=getContractInstance(abi, address);

  instanceContract.isBonusPayable(wallet, bonusname,
    targetreached, year, month, day, function (e, result){
        console.log(result);
        //var emailaddr= getAscii(result);
      //  document.getElementById("allwalletemail").innerHTML = emailaddr;
    //  var errorDetected = result[0];
      var payBonus = result[0];
      var payAmount = result[1].c[0];
      var payToken = result[2];
if (payToken == "ETH") {
  // convert to ethereum
  payAmount=payAmount/10000;
}
          if (payBonus) {
            var str = "Pay" + " " + payAmount + " " + payToken;
            document.getElementById("eCheckMessage").innerHTML=str;

          } else {
            document.getElementById("eCheckMessage").innerHTML="No Bonus";


          }

  });


}

function getBlockchainWallets(typelisting) {

  var instanceContract= getContractInstance(abi, address);

  instanceContract.getWallets(function (e, result){
        console.log(result);
        //var emailaddr= getAscii(result);
      //  document.getElementById("allwalletemail").innerHTML = emailaddr;
      switch (typelisting) {
        case 0:
            populateWallets(result);
            break;
        case 1:
            populateAllWallets(result);
            break;
        case 2:
             populateWalletsBuy(result);
             break;
      }

  });


}

function getFreeBlockchainWalletsABonus(bonusname, typelisting) {


  var instanceContract=getContractInstance(abi, address);


  if ((bonusname!=null) && (bonusname!="") && (bonusname!="undefined")) {
      instanceContract.getFreeWallets(bonusname, function (e, result){
        if ((e==null)|| e=="undefined") {
            console.log(result);
            //var emailaddr= getAscii(result);
          //  document.getElementById("allwalletemail").innerHTML = emailaddr;
            if (typelisting==0)
                populateWallets(result[0]);
            else {
                populateAllWallets(result[0]);
            }
        }
      });
  }

}


function getBlockchainBonuses() {

  var instanceContract=getContractInstance(abi, address);


  instanceContract.getBonusNames(function (e, result){
        console.log(result);
        //var emailaddr= getAscii(result);
      //  document.getElementById("allwalletemail").innerHTML = emailaddr;

        populateBonuses(result);

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

function isValidToken(tokenAmount) {
    if (!isValid(tokenAmount)) return false;
    if (isNaN(tokenAmount)) return false;
    return true;
}

function showTokenBalance() {
  wallet = document.getElementById("readallwalletbuy").innerHTML;
  showTokenBalanceBlockchain(wallet);

}
  function showTokenBalanceBlockchain(wallet) {


    var instanceEtchContract=getContractInstance(payEtchABI, payEtchAddress);


    instanceEtchContract.getClientBalance(wallet, function (e, result){
          console.log(result);
          //var emailaddr= getAscii(result);
        //  document.getElementById("allwalletemail").innerHTML = emailaddr;
      //  var errorDetected = result[0];
        var balance = result;
        if (!isNaN(balance)) {
            balETH=getFromWei(balance);
            document.getElementById("accountBalanceEtch").innerHTML=balETH;
        } else {
            document.getElementById("accountBalanceEtch").innerHTML=0;
        }

    });




}

function buyToken() {
  buyingAmount = document.getElementById("buyingAmount").value;

   if (isValidToken(buyingAmount)) {
       buyTokenBlockchain(buyingAmount);
   } else {
     // show message
   }
}

function generateUUID()
{
	var d = new Date().getTime();

	if( window.performance && typeof window.performance.now === "function" )
	{
		d += performance.now();
	}

	var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c)
	{
		var r = (d + Math.random()*16)%16 | 0;
		d = Math.floor(d/16);
		return (c=='x' ? r : (r&0x3|0x8)).toString(16);
	});

return uuid;
}



function buyTokenBlockchain(buyingAmount) {

  buyingAmountWei=  getWei(buyingAmount);


  let instanceContract=getMetamaskContractInstance(payEtchABI, payEtchAddress);

  var apiKey = generateUUID();

  var apiKeyHash = getSHA(apiKey);

  //document.getElementById("eMessage2").innerHTML = "Saving Blockchain Bonus";
  emailaddress=document.getElementById("allwalletemail").innerHTML;
  document.getElementById("authkey").innerHTML=apiKey;

  //instanceContract.addWalletEmail(wallet, email);
// had stack too deep in solidity - need to reduce variables
  instanceContract.payEtch(apiKeyHash,
       {value: buyingAmountWei}
     , function (e, contract){
        console.log(e, contract);
        var emailfrom="info@etch-prepare-for-takeoff.com";
        var subject = "Thank you for depositing funds";
        var text = "<p>Your deposit was made of "+buyingAmount +" ETH <p>" +
        "<p></p>"+
        "<p>Etch Team<p>";
        sendservermail (emailfrom, emailaddress, subject, text);
  });

}


function saveBonusBlockchain(token, bonus, target, bonusName,
  bonusType, day, month, year, ineq) {



  let instanceContract=getContractInstance(abi, address);


  //document.getElementById("eMessage2").innerHTML = "Saving Blockchain Bonus";

  //instanceContract.addWalletEmail(wallet, email);
// had stack too deep in solidity - need to reduce variables
  instanceContract.addBonus(
       bonusType, target, year, month, day, token, bonus, bonusName, ineq
     , function (e, contract){
        console.log(e, contract);
  });

}

function addWalletCallAPI(wallet,  emailaddress, authkey) {
  var xhttp = new XMLHttpRequest();

  xhttp.open("POST", "/api/addWalletEmail", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("wallet=" +wallet + "&emailaddress=" + emailaddress
  + "&authkey=" + authkey);
  console.log(" api respoonse - " + xhttp.responseText);
  console.log(" api readyState - " + xhttp.readyState);
  xhttp.onreadystatechange = function(){
  //  var messageDiv = document.getElementById('message');
//    var data = JSON.parse(this.response);

    if(this.readyState == 4 && this.status ==200){
       var data = JSON.parse(this.response);
       console.log("ky " + data.message );
    }
  };

}




function assignWalletBonusCallAPI(wallet, bonusName, emailaddress, authkey) {
  var xhttp = new XMLHttpRequest();

  xhttp.open("POST", "/api/assignWalletBonus", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("wallet=" +wallet + "&bonusname=" + bonusName+
   "&emailaddress=" + emailaddress+ "&authkey=" + authkey);
  console.log(" api respoonse - " + xhttp.responseText);
  console.log(" api readyState - " + xhttp.readyState);
  xhttp.onreadystatechange = function(){
  //  var messageDiv = document.getElementById('message');
//    var data = JSON.parse(this.response);

    if(this.readyState == 4 && this.status ==200){
       var data = JSON.parse(this.response);
       console.log("ky " + data.message );

      // document.getElementById("eMessage").style.visibility="visible";
    //   printSuccessMessage("eMessage","eMessage","Bonus Add being processed ")

        //   document.getElementById("eMessage").innerHTML = "Bonus Add being processed ";
        //   document.getElementById("eMessage").classList.add("alert-info");
        //   document.getElementById("eMessage").classList.remove("alert-danger");


       //document.getElementById("userMessage").value = JSON.parse(this.response).message;



    }
  };

}

function assignWalletBonus(wallet, bonusName, emailaddress) {

  let instanceContract=getContractInstance(abi, address);

  //document.getElementById("userMessage").innerHTML = "Assignment Done";

  //instanceContract.addWalletEmail(wallet, email);
// had stack too deep in solidity - need to reduce variables
  instanceContract.addWalletBonus(
       wallet, bonusName
     , function (e, result){
        console.log(e, result);
        var emailfrom="info@tch-preflight-test.com";
        var emailsubject = "You have a new bonus condition";
        var emailtext = "<p>The following bonus condition has been added to your wallet - " + bonusName + "</p>"+
        "<p></p>" +
        "<p>To see more about your bonuses, visit <a href=\"http://etch-preflight-test.com\">etch-preflight-test.com</a></p>"+
        "<p></p>" +
        "<p>The Etch Preflight Team</p>";

        sendservermail(emailfrom, emailaddress, emailsubject, emailtext);
  });

}


function saveWalletBlockchain(wallet, email, authKey) {

  let instanceContract=getContractInstance(abi, address);

  //document.getElementById("userMessage").innerHTML = "updating Wallet";

  //instanceContract.addWalletEmail(wallet, email);

  instanceContract.addWalletEmail(
       wallet, email
     , function (e, result){
        console.log(e, result);
  });

}




function checkEmployer(myEmployer, myURL) {
    var newUrl1 = homepage + "/pages/forms/mybonus.html";
    var newUrl2 = homepage + "/indexemployee.html";
    var newUrlX = homepage + "/pages/samples/login.html";
    if (myEmployer) {
         if ((myURL == newUrl1) ||
            (myURL == newUrl2))  {
               sessionStorage.removeItem('login');
               window.location.replace(newUrlX);
         } else {
             //
         }
    }
}

function checkEmployee(myEmployee, myURL) {
  var newUrl1 = homepage + "/pages/forms/mybonus.html";
  var newUrl2 = homepage + "/indexemployee.html";
  var newUrlX = homepage + "/pages/samples/login.html";
  if (myEmployee) {
       if ((myURL == newUrl1) ||
          (myURL == newUrl2))  {

       } else {
           sessionStorage.removeItem('login');
           window.location.replace(newUrlX);
       }
  }

}


window.onload = function() {
   var title = document.title;
   var mycookie = getCookie('etchcookie');

   if (mycookie === null) {

       if ((title=="Etch: Login") || (title=="Etch: Register"))
       {

       } else {
         var newUrl = homepage + "/pages/samples/login.html";
          sessionStorage.removeItem('login');
           window.location.replace(newUrl);
       }

     // need login

   } else {
     if ((title=="Etch: Login") || (title=="Etch: Register"))
     {
          sessionStorage.removeItem('login');
          eraseCookie(mycookie);
     } else {
       if (sessionStorage.length>0) {
          var loginJSON = JSON.parse(sessionStorage.getItem('login'));
          var myLogin = loginJSON["login"];
          var myEmployee = loginJSON["employee"];
          var myEmployer = loginJSON["employer"];
          var myURL = location.href;
          checkEmployee(myEmployee, myURL);
          checkEmployer(myEmployer, myURL);
          if (myLogin == mycookie) {
            document.getElementById("myuser").innerHTML = myLogin;
            document.getElementById("myusertop").innerHTML = myLogin;
          } else {
             var newUrl = homepage + "/pages/samples/login.html";
             sessionStorage.removeItem('log;in');
             window.location.replace(newUrl);
          }
      } else {
         checkUserDB(mycookie);
      }
    }

   }



  // if (x) {
  //     [do something with x]
  // }
  y=1;
  //////////
};
