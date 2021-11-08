// contracts/AmbianicToken.sol
// SPDX-License-Identifier: Apache 2.0
pragma solidity ^0.8.2;

import "./AmbianicTokenV1_0_0.sol";

/**
* Using inheritance from the previous version for safety,
* in order to avoid storage collision issues.
* ref: https://docs.openzeppelin.com/upgrades-plugins/1.x/proxies#unstructured-storage-proxies
*/
/// @custom:security-contact security@ambianic.ai
contract AmbianicTokenV1_0_1 is AmbianicToken {

    bool private _isV1_0_1Initialized;

    // Initializing new version of implementation
    // ref: https://forum.openzeppelin.com/t/uninitialized-class-wont-initialize-on-upgrade/900/7
    function initializeV1_0_1() public {
        require(!_isV1_0_1Initialized, "AmbianicTokenV1_0_1: already been initialized");
        _isV1_0_1Initialized = true;
    }

    function version() public virtual pure returns (string memory) {
        return "1.0.1";
    }

    /**
     * @dev Returns the symbol of the token, usually a shorter version of the
     * name.
     */
    function symbol() public view virtual override returns (string memory) {
        return "AMBY";
    }
}
