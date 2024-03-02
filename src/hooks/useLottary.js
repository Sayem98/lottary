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

  const buyTicket = async (paymentType, amount) => {
    const web3 = await getWeb3();

    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];

    const contract = await getContract(
      web3,
      LOTTERY_CONTRACT_ADDRESS,
      LOTTERY_CONTRACT_ABI
    );
    console.log(contract);
    const latest_lottery_id = await contract.methods.numberOfLotteries().call();
    console.log(latest_lottery_id);

    const lottery = await contract.methods
      .lotteries(Number(latest_lottery_id) - 1)
      .call();

    if (!account) {
      toast.error("Please connect your wallet!");
      return;
    }
    if (paymentType === "Polygon") {
      console.log("Polygon");

      console.log(
        Web3.utils.fromWei(lottery.maticPrice.toString(), "ether").toString()
      );

      const _pay = Web3.utils.toWei(
        (
          amount *
          Number(Web3.utils.fromWei(lottery.maticPrice.toString(), "ether"))
        ).toString(),
        "ether"
      );

      console.log(_pay);

      await contract.methods.buyTickets(0, amount).send({
        from: account,
        value: _pay,
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
          .send({ from: account });

        await contract.methods
          .buyTickets(1, amount)
          .send({ from: account, value: amount });
      } catch (e) {
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
          .send({ from: account });

        await contract.methods
          .buyTickets(2, amount)
          .send({ from: account, value: amount });
      } catch (e) {
        toast.error("Transaction failed");
      }
    } else {
      toast.error("Invalid payment type");
    }
  };

  const myTickets = async () => {
    const web3 = await getWeb3();
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];

    const contract = await getContract(
      web3,
      LOTTERY_CONTRACT_ADDRESS,
      LOTTERY_CONTRACT_ABI
    );

    const tickets = await contract.methods.myTickets(account).call();
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
    return lottery;
  };
  return {
    buyTicket,
    getData,
  };
}

export default useLottary;
