// SPDX-License-Identifier: MIT

// File contracts/interfaces/IERC20.sol

// Original license: SPDX_License_Identifier: MIT

pragma solidity ^0.8.0;

interface IERC20 {
    /**
     * @dev Emitted when `value` tokens are moved from one account (`from`) to
     * another (`to`).
     *
     * Note that `value` may be zero.
     */
    event Transfer(address indexed from, address indexed to, uint256 value);

    /**
     * @dev Emitted when the allowance of a `spender` for an `owner` is set by
     * a call to {approve}. `value` is the new allowance.
     */
    event Approval(address indexed owner, address indexed spender, uint256 value);

    /**
     * @dev Returns the value of tokens in existence.
     */
    function totalSupply() external view returns (uint256);

    /**
     * @dev Returns the value of tokens owned by `account`.
     */
    function balanceOf(address account) external view returns (uint256);

    /**
     * @dev Moves a `value` amount of tokens from the caller's account to `to`.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * Emits a {Transfer} event.
     */
    function transfer(address to, uint256 value) external returns (bool);

    /**
     * @dev Returns the remaining number of tokens that `spender` will be
     * allowed to spend on behalf of `owner` through {transferFrom}. This is
     * zero by default.
     *
     * This value changes when {approve} or {transferFrom} are called.
     */
    function allowance(address owner, address spender) external view returns (uint256);

    /**
     * @dev Sets a `value` amount of tokens as the allowance of `spender` over the
     * caller's tokens.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * IMPORTANT: Beware that changing an allowance with this method brings the risk
     * that someone may use both the old and the new allowance by unfortunate
     * transaction ordering. One possible solution to mitigate this race
     * condition is to first reduce the spender's allowance to 0 and set the
     * desired value afterwards:
     * https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729
     *
     * Emits an {Approval} event.
     */
    function approve(address spender, uint256 value) external returns (bool);

    /**
     * @dev Moves a `value` amount of tokens from `from` to `to` using the
     * allowance mechanism. `value` is then deducted from the caller's
     * allowance.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * Emits a {Transfer} event.
     */
    function transferFrom(address from, address to, uint256 value) external returns (bool);
}


// File contracts/utils/Context.sol

// Original license: SPDX_License_Identifier: MIT
// OpenZeppelin Contracts (last updated v5.0.1) (utils/Context.sol)

pragma solidity ^0.8.0;

/**
 * @dev Provides information about the current execution context, including the
 * sender of the transaction and its data. While these are generally available
 * via msg.sender and msg.data, they should not be accessed in such a direct
 * manner, since when dealing with meta-transactions the account sending and
 * paying for execution may not be the actual sender (as far as an application
 * is concerned).
 *
 * This contract is only required for intermediate, library-like contracts.
 */
abstract contract Context {
    function _msgSender() internal view virtual returns (address) {
        return msg.sender;
    }

    function _msgData() internal view virtual returns (bytes calldata) {
        return msg.data;
    }

    function _contextSuffixLength() internal view virtual returns (uint256) {
        return 0;
    }
}


// File contracts/ownable/Ownable.sol

// Original license: SPDX_License_Identifier: MIT
// OpenZeppelin Contracts (last updated v5.0.0) (access/Ownable.sol)

pragma solidity ^0.8.0;
/**
 * @dev Contract module which provides a basic access control mechanism, where
 * there is an account (an owner) that can be granted exclusive access to
 * specific functions.
 *
 * The initial owner is set to the address provided by the deployer. This can
 * later be changed with {transferOwnership}.
 *
 * This module is used through inheritance. It will make available the modifier
 * `onlyOwner`, which can be applied to your functions to restrict their use to
 * the owner.
 */
abstract contract Ownable is Context {
    address private _owner;

    /**
     * @dev The caller account is not authorized to perform an operation.
     */
    error OwnableUnauthorizedAccount(address account);

    /**
     * @dev The owner is not a valid owner account. (eg. `address(0)`)
     */
    error OwnableInvalidOwner(address owner);

    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);

    /**
     * @dev Initializes the contract setting the address provided by the deployer as the initial owner.
     */
    constructor(address initialOwner) {
        if (initialOwner == address(0)) {
            revert OwnableInvalidOwner(address(0));
        }
        _transferOwnership(initialOwner);
    }

    /**
     * @dev Throws if called by any account other than the owner.
     */
    modifier onlyOwner() {
        _checkOwner();
        _;
    }

    /**
     * @dev Returns the address of the current owner.
     */
    function owner() public view virtual returns (address) {
        return _owner;
    }

    /**
     * @dev Throws if the sender is not the owner.
     */
    function _checkOwner() internal view virtual {
        if (owner() != _msgSender()) {
            revert OwnableUnauthorizedAccount(_msgSender());
        }
    }

    /**
     * @dev Leaves the contract without owner. It will not be possible to call
     * `onlyOwner` functions. Can only be called by the current owner.
     *
     * NOTE: Renouncing ownership will leave the contract without an owner,
     * thereby disabling any functionality that is only available to the owner.
     */
    function renounceOwnership() public virtual onlyOwner {
        _transferOwnership(address(0));
    }

    /**
     * @dev Transfers ownership of the contract to a new account (`newOwner`).
     * Can only be called by the current owner.
     */
    function transferOwnership(address newOwner) public virtual onlyOwner {
        if (newOwner == address(0)) {
            revert OwnableInvalidOwner(address(0));
        }
        _transferOwnership(newOwner);
    }

    /**
     * @dev Transfers ownership of the contract to a new account (`newOwner`).
     * Internal function without access restriction.
     */
    function _transferOwnership(address newOwner) internal virtual {
        address oldOwner = _owner;
        _owner = newOwner;
        emit OwnershipTransferred(oldOwner, newOwner);
    }
}



pragma solidity ^0.8.0;


// Author: @sayem98
contract Lotteries is Ownable {

    // ticket range for each user in a lottery  --> start and end of each buy
    struct TicketRange {
        uint start;
        uint end;
    }


    struct Lottery{
        mapping(address => TicketRange[]) tickets; // tickets of each user in a lottery --> user address and ticket range
        uint totalTickets; // total tickets in a lottery
        mapping(address=>uint) totalTicketsPerUser; // total tickets of each user in a lottery
        uint totalPlayers; // total players in a lottery
        address[3] winners; // winners of the lottery
        uint[3] prizes; // prizes of the lottery
        uint startTime; // start time of the lottery
        uint endTime; // end time of the lottery
        uint maticPrice; // price of a ticket in matic
        uint wokePrice; //  price of a ticket in woke
        uint gonePrice; // price of a ticket in gone
        bool isAcceptingWoke; // is accepting woke tokens
        bool isAcceptingGone; // is accepting gone tokens
    }

    mapping (uint => Lottery) public lotteries; // all lotteries
    uint public numberOfLotteries = 0; // total number of lotteries

    uint256 private nonce = 0; // nonce for random number generation

    // payment methods --> accepted tokens

    IERC20 public woke;
    IERC20 public gone;

    address public dev;

    constructor(address _woke, address _gone) Ownable(msg.sender) {
        woke = IERC20(_woke);
        gone = IERC20(_gone);
        dev = msg.sender;
    }


    function createLottery(
        uint _startTime,
        uint _endTime,
        uint _maticPrice,
        uint _wokePrice,
        uint _gonePrice,
        bool _isAcceptingWoke, // set to true if accepting woke tokens
        bool _isAcceptingGone // set to true if accepting gone tokens
        ) public onlyOwner {
        // check if the previous lottry is ongoing
        if(numberOfLotteries > 0){
            require(block.timestamp > lotteries[numberOfLotteries-1].endTime, "Previous lottery is still ongoing");
        }
        // validate start and end time
        require(_startTime > block.timestamp, "Start time should be in the future");
        require(_endTime > _startTime, "End time should be after start time");

        // create the new lottery
        Lottery storage _lottry = lotteries[numberOfLotteries]; // get the new lottery
        _lottry.startTime = _startTime;
        _lottry.endTime = _endTime;
        _lottry.maticPrice = _maticPrice;
        _lottry.wokePrice = _wokePrice;
        _lottry.gonePrice = _gonePrice;
        _lottry.isAcceptingWoke = _isAcceptingWoke;
        _lottry.isAcceptingGone = _isAcceptingGone;
        numberOfLotteries++;
    }

    // payment type 0 = matic, 1 = woke, 2 = gone
    function buyTickets(uint _paymentType, uint _amount) public payable {
        // check amount
        require(_amount > 0, "Amount should be greater than 0");
        // check if the lottery is ongoing
        require(block.timestamp > lotteries[numberOfLotteries-1].startTime, "Lottery is not started yet");
        require(block.timestamp < lotteries[numberOfLotteries-1].endTime, "Lottery is ended");

        if(_paymentType == 0){
            // matic
            require(msg.value >= lotteries[numberOfLotteries-1].maticPrice * _amount, "Invalid amount");
        }else if(_paymentType == 1){
            // woke
            require(lotteries[numberOfLotteries-1].isAcceptingWoke, "Woke is not accepted");
            require(woke.transferFrom(msg.sender, address(this), (lotteries[numberOfLotteries-1].wokePrice * _amount)/10**18), "Transfer failed");
        }else if(_paymentType == 2){
            // gone
            require(lotteries[numberOfLotteries-1].isAcceptingGone, "Gone is not accepted");
            require(gone.transferFrom(msg.sender, address(this), (lotteries[numberOfLotteries-1].gonePrice * _amount)/10**18), "Transfer failed");
        }else{
            revert("Invalid payment type");
        }

        //update the tickets
        lotteries[numberOfLotteries-1].tickets[msg.sender].push(TicketRange(lotteries[numberOfLotteries-1].totalTickets, lotteries[numberOfLotteries-1].totalTickets + _amount - 1));
        lotteries[numberOfLotteries-1].totalTickets += _amount;
        lotteries[numberOfLotteries-1].totalTicketsPerUser[msg.sender] += _amount;

        // check if the user is already in the players list
        if(lotteries[numberOfLotteries-1].totalTicketsPerUser[msg.sender]==0){
            lotteries[numberOfLotteries-1].totalPlayers++;
        }

    }

    function getWinner(uint _ticketNumber) private view returns(address){
        address winner;
        for(uint i=0; i<lotteries[numberOfLotteries-1].totalPlayers; i++){
            if(_ticketNumber >= lotteries[numberOfLotteries-1].tickets[lotteries[numberOfLotteries-1].winners[i]][0].start && _ticketNumber <= lotteries[numberOfLotteries-1].tickets[lotteries[numberOfLotteries-1].winners[i]][0].end){
                winner = lotteries[numberOfLotteries-1].winners[i];
                break;
            }
        }
        return winner;
    }
    // draw the latest lottery
    function draw() public {
        // check if the lottery is ended
        require(block.timestamp > lotteries[numberOfLotteries-1].endTime, "Lottery is not ended yet");
        // check if the lottery is not drawn yet
        require(lotteries[numberOfLotteries-1].winners[0] == address(0), "Lottery is already drawn");

        // get the random number
        uint256 randomNumber = random(); // winner 1;
        uint256 winner1 = randomNumber % lotteries[numberOfLotteries-1].totalTickets;
        lotteries[numberOfLotteries-1].winners[0] = getWinner(winner1);

        // get the random number
        randomNumber = random(); // winner 2;
        uint256 winner2 = randomNumber % lotteries[numberOfLotteries-1].totalTickets;
        lotteries[numberOfLotteries-1].winners[1] = getWinner(winner2);

        // get the random number
        randomNumber = random(); // winner 3;
        uint256 winner3 = randomNumber % lotteries[numberOfLotteries-1].totalTickets;
        lotteries[numberOfLotteries-1].winners[2] = getWinner(winner3);

        // distribute the prizes

        // 1st prize
        // distribute 40% of the total prize
        // matic
        // get the total matic of the contract

        uint _totalMatic = address(this).balance;
        payable(lotteries[numberOfLotteries-1].winners[0]).transfer((_totalMatic*40)/100);

        // woke

        if(lotteries[numberOfLotteries-1].isAcceptingWoke){
            uint _totalWoke = woke.balanceOf(address(this));
            // check if the winner is address 0
            if(lotteries[numberOfLotteries-1].winners[0] != address(0)){
                woke.transfer(lotteries[numberOfLotteries-1].winners[0], (_totalWoke*40)/100);
            }
        }

        // gone

        if(lotteries[numberOfLotteries-1].isAcceptingGone){
            uint _totalGone = gone.balanceOf(address(this));
            // check if the winner is address 0
            if(lotteries[numberOfLotteries-1].winners[0] != address(0)){
                gone.transfer(lotteries[numberOfLotteries-1].winners[0], (_totalGone*40)/100);
            }
        }

        // 2nd prize
        // distribute 25% of the total prize
        // matic

        payable(lotteries[numberOfLotteries-1].winners[1]).transfer((_totalMatic*25)/100);

        // woke

        if(lotteries[numberOfLotteries-1].isAcceptingWoke){
            // check if the winner is address 0
            uint _totalWoke = woke.balanceOf(address(this));
            if(lotteries[numberOfLotteries-1].winners[1] != address(0)){
                woke.transfer(lotteries[numberOfLotteries-1].winners[1], (_totalWoke*25)/100);
            }
        }

        // gone

        if(lotteries[numberOfLotteries-1].isAcceptingGone){
            // check if the winner is address 0
            if(lotteries[numberOfLotteries-1].winners[1] != address(0)){
                uint _totalGone = gone.balanceOf(address(this));
                gone.transfer(lotteries[numberOfLotteries-1].winners[1], (_totalGone*25)/100);
            }
        }

        // 3rd prize

        // distribute 15% of the total prize
        // matic

        payable(lotteries[numberOfLotteries-1].winners[2]).transfer((_totalMatic*15)/100);

        // woke

        if(lotteries[numberOfLotteries-1].isAcceptingWoke){
            // check if the winner is address 0
            if(lotteries[numberOfLotteries-1].winners[2] != address(0)){
                uint _totalWoke = woke.balanceOf(address(this));
                woke.transfer(lotteries[numberOfLotteries-1].winners[2], (_totalWoke*15)/100);
            }
        }

        // gone

        if(lotteries[numberOfLotteries-1].isAcceptingGone){
            // check if the winner is address 0
            if(lotteries[numberOfLotteries-1].winners[2] != address(0)){
                uint _totalGone = gone.balanceOf(address(this));
                gone.transfer(lotteries[numberOfLotteries-1].winners[2], (_totalGone*15)/100);
            }
        }

    }



    function random() private returns (uint256) {
        uint256 randomNumber = uint256(keccak256(abi.encodePacked(block.timestamp, block.prevrandao, nonce, msg.sender)));
        nonce++;
        return randomNumber;
    }

    function withdraw(uint _amount) public onlyOwner {
        // 50% to dev address
        payable(dev).transfer((_amount*50)/100);
        // 50% to owner
        payable(owner()).transfer((_amount*50)/100);
    }

    function withdrawToken(address _token, uint _amount) public onlyOwner {
        // 50% to dev address
        IERC20(_token).transfer(dev, (_amount*50)/100);
        // 50% to owner
        IERC20(_token).transfer(owner(), (_amount*50)/100);
    }


}


