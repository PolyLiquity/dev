pragma solidity 0.6.11;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract WethToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("WETH token", "WETH") public {
        _setupDecimals(18);
        _mint(msg.sender, initialSupply*10**18);
    }
}