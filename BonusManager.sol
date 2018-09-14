pragma solidity ^0.4.18;

// storing bytes32s is very expensive so this presently has mostly bytes32 as a storage.
// we need to use a data store such as IPFS in conjunction with the contract.

contract BonusManager {

    constructor() public {

        
            
    }

    struct BonusName {
        bytes32 bonusName;
    }

    struct  Bonus {
        bytes32 bonusName;
        bytes32 bonusType;
        uint bonusTarget;
        uint bonusStartYear;
        uint bonusStartMonth;
        uint bonusStartDay;
        uint bonusEndYear;
        uint bonusEndMonth;
        uint bonusEndDay;
        bytes32 bonusToken;
        uint bonusAmount;
    }

    struct PaymentDetail {
        uint totalPaid;
    }
 
    
    struct WalletDetail {
        bytes32 walletEmailAddress;
    }

 
 // map wallet to wallet details
    mapping (address => WalletDetail) public WalletDetails;
 
    // map wallet and token to bonus payment
    mapping (address => mapping (bytes32 => PaymentDetail) ) public PaymentDetails; 
     // map bonus name to bonus 
      mapping  (bytes32 => Bonus)  public Bonuses;
    
    mapping (address=>BonusName[]) public BonusNames;
    address[] public Wallets;
    BonusName[] public BonusNamesArray;

    uint k;

    function addK(uint k1) public {
        k =k1;
    }





    function addBonus( string bonusType, uint bonusTarget, uint bonusStartYear, 
        uint bonusStartMonth, uint bonusStartDay, uint bonusEndYear,
        uint bonusEndMonth, uint bonusEndDay, 
        string bonusToken, uint bonusAmount, string bonusName ) public {
        bytes32 bonusTokenBytes = stringToBytes32(bonusToken);
        bytes32 bonusTypeBytes = stringToBytes32(bonusType);
        bytes32 bonusNameBytes = stringToBytes32(bonusName);
        
        Bonuses[bonusNameBytes].bonusName=bonusNameBytes;
        Bonuses[bonusNameBytes].bonusType=bonusTypeBytes;
        Bonuses[bonusNameBytes].bonusTarget=bonusTarget;
        Bonuses[bonusNameBytes].bonusStartYear=bonusStartYear;
        Bonuses[bonusNameBytes].bonusStartMonth=bonusStartMonth;
        Bonuses[bonusNameBytes].bonusStartDay=bonusStartDay;
        Bonuses[bonusNameBytes].bonusEndYear=bonusEndYear;
        Bonuses[bonusNameBytes].bonusEndMonth=bonusEndMonth;
        Bonuses[bonusNameBytes].bonusEndDay=bonusEndDay;
        Bonuses[bonusNameBytes].bonusToken=bonusTokenBytes;
        Bonuses[bonusNameBytes].bonusAmount=bonusAmount;
        
        BonusName memory b;
        b.bonusName=bonusNameBytes;
        BonusNamesArray.push(b);
        
    }

    function addBonusWallet( address wallet,   string bonusName ) public {
        bytes32 bonusNameBytes = stringToBytes32(bonusName);
        BonusNames[wallet][bonusNameBytes].bonusName =bonusNameBytes;
 
    }

    function getNumberWallets() public view returns(uint) {
        return Wallets.length;
    }


    function stringToBytes32(string memory source) public pure returns (bytes32 result) {
        bytes memory tempEmptyStringTest = bytes(source);
        if (tempEmptyStringTest.length == 0) {
           return 0x0;
        }

        assembly {
            result := mload(add(source, 32))
        }
    }

    function bytes32ToString(bytes32 x)   public pure returns (string) {
        bytes memory bytesString = new bytes(32);
        uint charCount = 0;
        for (uint j = 0; j < 32; j++) {
            byte char = byte(bytes32(uint(x) * 2 ** (8 * j)));
            if (char != 0) {
                bytesString[charCount] = char;
                charCount++;
            }
        }
        bytes memory bytesStringTrimmed = new bytes(charCount);
        for (j = 0; j < charCount; j++) {
            bytesStringTrimmed[j] = bytesString[j];
        }
        return string(bytesStringTrimmed);
    }

    function addPaymentDetail (address wallet, bytes32 token, uint payment) public {
        uint totalPaid = PaymentDetails[wallet][token].totalPaid;
        totalPaid=totalPaid+payment;
        PaymentDetails[wallet][token].totalPaid=totalPaid;
    }

    function addWalletEmail (address wallet, string emailAddress) public {
        bytes32 emailAddressBytes = stringToBytes32(emailAddress);
      
        if (WalletDetails[wallet].walletEmailAddress == emailAddressBytes ) {
            // already exists
        } else {
             WalletDetails[wallet].walletEmailAddress=emailAddressBytes;
             Wallets.push(wallet);
        }
       
    }

    function addWallet(address wallet) public {
       Wallets.push(wallet);
    }

    function isBonusPayable(address wallet, string bonusName, uint targetReached, uint endYear, uint endMonth, uint endDay)
    public view returns (bool payBonus, uint bonusAmount, bytes32 bonusToken) {
        
        bytes32 bonusNameBytes32 = stringToBytes32(bonusName);
        bytes32 bonusNameBlockchain = BonusNames[wallet][bonusNameBytes32].bonusName;
        bool beforeEnd=false;
        payBonus=false;
        bonusToken="";
        
        if ((endYear <= Bonuses[bonusNameBlockchain].bonusEndYear)
        && (endMonth <= Bonuses[bonusNameBlockchain].bonusEndMonth)
        && (endDay <= Bonuses[bonusNameBlockchain].bonusEndDay)) {
            beforeEnd = true;
        }
        
        if ((targetReached >= Bonuses[bonusNameBlockchain].bonusTarget) && beforeEnd) {
            payBonus = true;
            bonusAmount = Bonuses[bonusNameBlockchain].bonusAmount;
            bonusToken = Bonuses[bonusNameBlockchain].bonusToken;
        }
        
        
    }

    function () payable public {
    }

}


