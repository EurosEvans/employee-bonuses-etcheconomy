
solidity ^0.4.18;

contract bonus {
    function multiply(uint a) public pure  returns (uint d) {
        return a * 7;
    }
     function salestarget(uint salesachieved) public pure  returns (uint) {
        uint salestarget = 100;
        if (salesachieved>salestarget) {
            return 1;
        } else {
            return 0;
        }
    }
    function responsetarget(uint responseachieved) public pure  returns (uint) {
        uint responsetarget = 10;
        if (responseachieved<responsetarget) {
            return 1;
        } else {
            return 0;
        }
    }
    function companywidetarget(uint numbercustachieved) public pure  returns (uint) {
        uint customertarget = 1000;
        if (numbercustachieved<customertarget) {
            return 1;
        } else {
            return 0;
        }
    }
}
