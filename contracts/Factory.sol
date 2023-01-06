pragma solidity 0.8.17;

import "./Turnstile.sol";


contract Factory {

    uint256 public count;
    uint256 public nft;
    address public turnstile;
    mapping(address => uint256) public childMap;

    // register to turnstile in constructor
    constructor(address _to, address _turnstile) {
        turnstile = _turnstile;
        nft = Turnstile(turnstile).register(_to);
    }

    // deploy new child contract
    function deployChild(uint256 id, bool assignToFactory) public {
        address child;

        if (assignToFactory == true) {
            child = address(new Child(nft, turnstile));
            childMap[child] = nft;
        } else {
            child = address(new Child(id, turnstile));
            childMap[child] = id;
        }
    }

    function increment() public {
        count = count + 1;
    }
}

contract Child {

    uint256 public count;

    // assign to nft ID in constructor
    constructor(uint _nftID, address _turnstile) {
        Turnstile(_turnstile).assign(_nftID);
    }

    function increment() public {
        count = count + 1;
    }
}