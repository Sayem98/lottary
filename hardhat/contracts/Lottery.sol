// SPDX-License-Identifier: MIT

import "./interfaces/IERC20.sol";
import "./ownable/Ownable.sol";

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


    // Getting data

    function getTickets(address _user) public view returns(TicketRange[] memory){
        return lotteries[numberOfLotteries-1].tickets[_user];
    }

    function getTotalTickets(address _user) public view returns(uint){
        return lotteries[numberOfLotteries-1].totalTicketsPerUser[_user];
    }

    function getTotalPlayers() public view returns(uint){
        return lotteries[numberOfLotteries-1].totalPlayers;
    }

    function getWinners() public view returns(address[3] memory){
        return lotteries[numberOfLotteries-1].winners;
    }

    function getPrizes() public view returns(uint[3] memory){
        return lotteries[numberOfLotteries-1].prizes;
    }

    

    
}