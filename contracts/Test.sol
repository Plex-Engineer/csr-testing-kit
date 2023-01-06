// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "./Turnstile.sol";

contract Test {
    address turnstile;
    uint256 counter;

    constructor(address _turnstile, address _to) {
        turnstile = _turnstile;
        counter = 0;
        Turnstile(turnstile).register(_to);
    }

    function register(address to) public {
        Turnstile(turnstile).register(to);
    }

    function assign(uint256 id) public {
        Turnstile(turnstile).assign(id);
    }

    function increment(uint256 x) public {
        counter = counter + x;
    }

    function getCount() external view returns (uint256) {
        return counter;
    }
}
