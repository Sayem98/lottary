import Web3 from "web3";
import {
  LOTTERY_CONTRACT_ADDRESS,
  WOKE_CONTRACT_ADDRESS,
  GONE_CONTRACT_ADDRESS,
  LOTTERY_CONTRACT_ABI,
  TOKEN_CONTRACT_ABI,
} from "../contract/contract";
import toast from "react-hot-toast";

function useLottary() {
  const getWeb3 = async () => {
    if (!window.ethereum) {
      toast.error("Please install MetaMask!");
      return;
    }
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
    return web3;
  };

  const getContract = async (web3, contractAddress, contractAbi) => {
    const contract = new web3.eth.Contract(contractAbi, contractAddress);
    return contract;
  };

  const buyTicket = async (paymentType, amount, ref) => {
    const web3 = await getWeb3();

    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    const chain_id = await web3.eth.getChainId();

    if (chain_id !== 137 && chain_id !== 11155111) {
      return;
    }

    const contract = await getContract(
      web3,
      LOTTERY_CONTRACT_ADDRESS,
      LOTTERY_CONTRACT_ABI
    );
    const latest_lottery_id = await contract.methods.numberOfLotteries().call();

    const lottery = await contract.methods
      .lotteries(Number(latest_lottery_id) - 1)
      .call();

    if (!account) {
      toast.error("Please connect your wallet!");
      return;
    }
    if (lottery.startTime == 0) {
      toast.error("No ongoing lottery");
      return;
    }
    const gas = await web3.eth.getGasPrice();
    console.log(gas);
    if (paymentType === "Polygon") {
      const _pay = Web3.utils.toWei(
        (
          amount *
          Number(Web3.utils.fromWei(lottery.maticPrice.toString(), "ether"))
        ).toString(),
        "ether"
      );

      // check if ref empty
      if (ref === "") {
        ref = "0x6016D586DC7335F125CCEB980D9a96a0F5862D51";
      }
      console.log(_pay, ref);

      await contract.methods.buyTickets(0, amount, ref).send({
        from: account,
        value: _pay,
        gas: 300000,
        gasPrice: 250000000000,
      });
    } else if (paymentType === "woke") {
      let approve_amount =
        amount * Web3.utils.fromWei(lottery.wokePrice.toString(), "ether");
      approve_amount = Web3.utils.toWei(approve_amount.toString(), "ether");

      const wokeContract = await getContract(
        web3,
        WOKE_CONTRACT_ADDRESS,
        TOKEN_CONTRACT_ABI
      );

      try {
        // approve
        await wokeContract.methods
          .approve(LOTTERY_CONTRACT_ADDRESS, approve_amount)
          .send({ from: account, gas: 300000, gasPrice: 250000000000 });

        await contract.methods.buyTickets(1, amount, ref).send({
          from: account,
          gas: 300000,
          gasPrice: 250000000000,
        });
      } catch (e) {
        console.log(e);
        toast.error("Transaction failed");
      }
    } else if (paymentType === "gone") {
      let approve_amount =
        amount * Web3.utils.fromWei(lottery.gonePrice.toString(), "ether");
      approve_amount = Web3.utils.toWei(approve_amount.toString(), "ether");

      const goneContract = await getContract(
        web3,
        GONE_CONTRACT_ADDRESS,
        TOKEN_CONTRACT_ABI
      );

      try {
        // approve
        await goneContract.methods
          .approve(LOTTERY_CONTRACT_ADDRESS, approve_amount)
          .send({ from: account, gas: 300000, gasPrice: 250000000000 });

        await contract.methods.buyTickets(2, amount, ref).send({
          from: account,

          gas: 300000,
          gasPrice: 250000000000,
        });
      } catch (e) {
        toast.error("Transaction failed");
      }
    } else {
      toast.error("Invalid payment type");
    }
  };

  const myTickets = async () => {
    if (!window.ethereum) return console.log("Please install MetaMask!");
    const web3 = await getWeb3();
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];

    const contract = await getContract(
      web3,
      LOTTERY_CONTRACT_ADDRESS,
      LOTTERY_CONTRACT_ABI
    );

    const tickets = await contract.methods.myTickets().call({
      from: account,
    });
    console.log(tickets);
    return tickets;
  };
  const getData = async () => {
    const web3 = await getWeb3();
    const contract = await getContract(
      web3,
      LOTTERY_CONTRACT_ADDRESS,
      LOTTERY_CONTRACT_ABI
    );

    const latest_lottery_id = await contract.methods.numberOfLotteries().call();
    const lottery = await contract.methods
      .lotteries(Number(latest_lottery_id) - 1)
      .call();
    console.log(lottery);
    return lottery;
  };
  const wokeBalanceF = async () => {
    const web3 = await getWeb3();
    const wokeToken = await getContract(
      web3,
      WOKE_CONTRACT_ADDRESS,
      TOKEN_CONTRACT_ABI
    );

    const balance = await wokeToken.methods
      .balanceOf(LOTTERY_CONTRACT_ADDRESS)
      .call();
    console.log(balance);
    return Web3.utils.fromWei(balance.toString(), "ether");
  };

  const goneBalanceF = async () => {
    const web3 = await getWeb3();
    const goneToken = await getContract(
      web3,
      GONE_CONTRACT_ADDRESS,
      TOKEN_CONTRACT_ABI
    );

    const balance = await goneToken.methods
      .balanceOf(LOTTERY_CONTRACT_ADDRESS)
      .call();
    console.log(balance);
    return Web3.utils.fromWei(balance.toString(), "ether");
  };

  const maticBalanceF = async () => {
    const web3 = await getWeb3();
    const balance = await web3.eth.getBalance(LOTTERY_CONTRACT_ADDRESS);
    return Web3.utils.fromWei(balance.toString(), "ether");
  };

  const getWinners = async () => {
    const web3 = await getWeb3();
    const contract = await getContract(
      web3,
      LOTTERY_CONTRACT_ADDRESS,
      LOTTERY_CONTRACT_ABI
    );
    const winners = await contract.methods.getWinners().call();
    return winners;
  };

  const owner = async () => {
    const web3 = await getWeb3();
    const contract = await getContract(
      web3,
      LOTTERY_CONTRACT_ADDRESS,
      LOTTERY_CONTRACT_ABI
    );
    const owner = await contract.methods.owner().call();
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    if (owner === account) return true;
    else return false;
  };

  const createLottery = async (
    startTime,
    endTime,
    maticPrice,
    wokePrice,
    gonePrice,
    isAcceptingWoke,
    isAcceptingGone
  ) => {
    const web3 = await getWeb3();
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    const chain_id = await web3.eth.getChainId();

    if (chain_id !== 137 && chain_id !== 11155111) {
      return;
    }

    const contract = await getContract(
      web3,
      LOTTERY_CONTRACT_ADDRESS,
      LOTTERY_CONTRACT_ABI
    );

    await contract.methods
      .createLottery(
        startTime,
        endTime,
        maticPrice,
        wokePrice,
        gonePrice,
        isAcceptingGone,
        isAcceptingWoke
      )
      .send({ from: account, gas: 300000, gasPrice: 250000000000 });
  };

  return {
    buyTicket,
    getData,
    myTickets,
    wokeBalanceF,
    goneBalanceF,
    maticBalanceF,
    getWinners,
    owner,
    createLottery,
  };
}

export default useLottary;
