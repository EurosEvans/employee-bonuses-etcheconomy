pragma solidity ^0.4.24;


/**
 * @title SafeMath
 * @dev Math operations with safety checks that throw on error
 */
library SafeMath {

    /**
    * @dev Multiplies two numbers, throws on overflow.
    */
    function mul(uint256 a, uint256 b) internal pure returns (uint256 c) {
        if (a == 0) {
            return 0;
        }
        c = a * b;
        assert(c / a == b);
        return c;
    }

    /**
    * @dev Integer division of two numbers, truncating the quotient.
    */
    function div(uint256 a, uint256 b) internal pure returns (uint256) {
        // assert(b > 0); // Solidity automatically throws when dividing by 0
        // uint256 c = a / b;
        // assert(a == b * c + a % b); // There is no case in which this doesn't hold
        return a / b;
    }

    /**
    * @dev Subtracts two numbers, throws on overflow (i.e. if subtrahend is greater than minuend).
    */
    function sub(uint256 a, uint256 b) internal pure returns (uint256) {
        assert(b <= a);
        return a - b;
    }

    /**
    * @dev Adds two numbers, throws on overflow.
    */
    function add(uint256 a, uint256 b) internal pure returns (uint256 c) {
        c = a + b;
        assert(c >= a);
        return c;
    }
}

 

contract EtchManager {
    
     
    struct ClientWallet {
        uint clientBalance; // balance in wei
        bool clientAccount; 
        bytes32 apiKeyHash;
    }
    
    struct ApprovedWallet {
        address ClientWalletAddress;
        bool keyExists;
    }
    
    mapping (address => ClientWallet) public ClientWallets;
    mapping (bytes32 => ApprovedWallet) public ApprovedWallets;
    address public owner;
    address public mywallet = 0xcDDb122bb4dCe8AcF90078E0e853b1414d10EDb0; // etch wallet
    bytes32[] public validAPIKeys;
    
    constructor() public{
        owner = msg.sender;
    }

    function validKey (bytes32 authKey) public view returns (bool, address) {
        // test if key is valid
        if (ApprovedWallets[authKey].keyExists)  {
            return (true, ApprovedWallets[authKey].ClientWalletAddress);
        } else {
            return (false,  0x00);
        }
    }

    function payEtch(bytes32 _apiKeyHash) public payable returns(bool success) {
        if (!mywallet.send(msg.value)) assert(false);
        uint payment = msg.value;
           
        if (!ApprovedWallets[_apiKeyHash].keyExists) {
            ApprovedWallets[_apiKeyHash].ClientWalletAddress= msg.sender;
            ApprovedWallets[_apiKeyHash].keyExists= true;
            validAPIKeys.push(_apiKeyHash);
        }
        // add new key per deposit - user can send the same key if done in batch
        if (!ClientWallets[msg.sender].clientAccount) {
            ClientWallets[msg.sender].clientBalance= payment;
            ClientWallets[msg.sender].clientAccount= true;
            ClientWallets[msg.sender].apiKeyHash= _apiKeyHash;
        } else {
             uint balance = ClientWallets[msg.sender].clientBalance;
             ClientWallets[msg.sender].clientBalance= payment+balance;
             ClientWallets[msg.sender].apiKeyHash= _apiKeyHash;
        }
        return true;
    }
    
    function getClientBalance(address walletAddress) public view returns (uint) {
        require(ClientWallets[walletAddress].clientAccount);
        return ClientWallets[walletAddress].clientBalance;
    }
    
    function getBalance(address walletAddress) public view returns (uint) {
         return walletAddress.balance;
    }
}
