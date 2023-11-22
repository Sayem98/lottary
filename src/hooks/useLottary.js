import Web3 from "web3";
import { LOTTARY_ABI, LOTTARY_ADDRESS, rpc } from "../utils/conntants";

function useLottary() {
  const geWeb3 = (type = "read") => {
    if (type === "read") {
      return new Web3(rpc || "http://localhost:8545");
    } else {
      if (window.ethereum) {
        return new Web3(window.ethereum);
      } else {
        alert("Please install Metamask");
      }
    }
  };

  const getLottary = async (web3) => {
    const lottary = new web3.eth.Contract(LOTTARY_ABI, LOTTARY_ADDRESS);
    return lottary;
  };

  const registerPromo = async (address, code) => {
    const web3 = geWeb3("write");
    const lottary = await getLottary(web3);

    // registerPromo
    try {
      await lottary.methods.registerPromoter(code).send({ from: address });
    } catch (err) {
      console.log(err);
    }
  };

  const buyTicket = async (address, amount, code) => {
    const web3 = geWeb3("write");
    const lottary = await getLottary(web3);

    // buyTicket
    try {
      await lottary.methods
        .buyTicket(code)
        .send({ from: address, value: amount });
    } catch (err) {
      console.log(err);
    }
  };

  const isCanceled = async () => {
    const web3 = geWeb3("read");
    const lottary = await getLottary(web3);
    const isCanceled = await lottary.methods.isCanceled().call();
    return isCanceled;
  };

  const withdraw = async (address) => {
    const web3 = geWeb3("write");
    const lottary = await getLottary(web3);

    // withdraw
    try {
      await lottary.methods.withdraw().send({ from: address });
    } catch (err) {
      console.log(err);
    }
  };

  return {
    registerPromo,
    buyTicket,
    isCanceled,
    withdraw,
  };
}

export default useLottary;
