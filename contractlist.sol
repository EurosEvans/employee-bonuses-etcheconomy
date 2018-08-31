pragma solidity ^0.4.18;

// This contract stores a the hashes of source codes of contracts deployed

contract contractlist {

    struct  ContractDetail {
        bytes32 sourceCodeHash;
    }

    mapping (bytes32 => ContractDetail) public ContractDetails;

    function addContractDetail (bytes32 contractAddress, bytes32 sourceCodeHash) public {
        ContractDetails[contractAddress].sourceCodeHash=sourceCodeHash;
    }

    function readContractDetails (bytes32 contractAddress) view  public returns (bytes32) {
        return (ContractDetails[contractAddress].sourceCodeHash);
    }
 
    function () payable public {
    }

}
