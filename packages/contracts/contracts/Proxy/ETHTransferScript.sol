// SPDX-License-Identifier: MIT

pragma solidity 0.6.11;
import "../Dependencies/IERC20.sol";

contract ETHTransferScript {
    
    function transferETH(IERC20 wethToken,address _recipient, uint256 _amount) external returns (bool) {
        //(bool success, ) = _recipient.call{value: _amount}("");
        bool success = wethToken.transfer(_recipient, _amount);
        return success;
    }
}
