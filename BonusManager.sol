pragma solidity ^0.4.18;


contract BonusManager {

    constructor() public {

        
            
    }


    struct  Bonus {
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
    // map wallet and type (team, individual, company) to a bonus condition
    mapping  (address => mapping (bytes32 => Bonus))  public Bonuses;
    // map wallet and token to payment
    mapping (address => mapping (bytes32 => PaymentDetail) ) public PaymentDetails; 
    address[] public Wallets;

    function addBonus(address wallet, bytes32 bonusType, uint bonusTarget, uint bonusStartYear, 
    uint bonusStartMonth, uint bonusStartDay, uint bonusEndYear,
    uint bonusEndMonth, uint bonusEndDay, 
    bytes32 bonusToken, uint bonusAmount ) public {
        Bonuses[wallet][bonusType].bonusType =bonusType;
        Bonuses[wallet][bonusType].bonusTarget =bonusTarget;
        Bonuses[wallet][bonusType].bonusStartYear =bonusStartYear;
        Bonuses[wallet][bonusType].bonusStartMonth =bonusStartMonth;
        Bonuses[wallet][bonusType].bonusStartDay =bonusStartDay;
        Bonuses[wallet][bonusType].bonusEndYear =bonusEndYear;
        Bonuses[wallet][bonusType].bonusEndMonth =bonusEndMonth;
        Bonuses[wallet][bonusType].bonusEndDay =bonusEndDay;
        Bonuses[wallet][bonusType].bonusToken =bonusToken;
        Bonuses[wallet][bonusType].bonusAmount =bonusAmount;
    }


    function addPaymentDetail (address wallet, bytes32 token, uint payment) public {
        uint totalPaid = PaymentDetails[wallet][token].totalPaid;
        totalPaid=totalPaid+payment;
        PaymentDetails[wallet][token].totalPaid=totalPaid;
    }

    function addWalletEmail (address wallet, bytes32 emailAddress) public {
        WalletDetails[wallet].walletEmailAddress=emailAddress;
    }

    function addWallet(address wallet) public {
       Wallets.push(wallet);
    }

    function isBonusPayable(address wallet, bytes32 bonusType, uint targetReached, uint endYear, uint endMonth, uint endDay)
    public view returns (bool payBonus, uint bonusAmount, bytes32 bonusToken) {
        
        bool beforeEnd=false;
        payBonus=false;
        bonusToken="";
        
        if ((endYear <= Bonuses[wallet][bonusType].bonusEndYear)
        && (endMonth <= Bonuses[wallet][bonusType].bonusEndMonth)
        && (endDay <= Bonuses[wallet][bonusType].bonusEndDay)) {
            beforeEnd = true;
        }
        
        if ((targetReached >= Bonuses[wallet][bonusType].bonusTarget) && beforeEnd) {
            payBonus = true;
            bonusAmount = Bonuses[wallet][bonusType].bonusAmount;
            bonusToken = Bonuses[wallet][bonusType].bonusToken;
        }
        
        
    }

    function () payable public {
    }

}


