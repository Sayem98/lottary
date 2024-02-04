import Web3 from "web3";
import { LOTTARY_ABI, LOTTARY_ADDRESS, rpc } from "../utils/conntants";
import toast from "react-hot-toast";

function useLottary() {
  const geWeb3 = (type = "read") => {
    if (!window.ethereum) {
      toast.error("Please install Metamask");
    }
    if (type === "read") {
      return new Web3(window.ethereum);
    } else {
      if (window.ethereum) {
        return new Web3(window.ethereum);
      } else {
        toast.error("Please install Metamask");
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

  const getAllTickets = async (address) => {
    if (!address) return 0;

    const web3 = geWeb3("read");
    const lottary = await getLottary(web3);
    const allTickets = await lottary.methods.tickets(address).call();
    return allTickets;
  };

  const searchPromoter = async (code) => {
    const web3 = geWeb3("read");
    const lottary = await getLottary(web3);
    // Get all the previous events to search for the code
    const events = await lottary.getPastEvents("PromoterRegistered", {
      fromBlock: 0,
      toBlock: "latest",
    });

    // filter the events to find the code
    const filteredEvents = events.filter(
      (event) => event.returnValues.code === code
    );
    console.log(filteredEvents);
    if (filteredEvents.length === 0) {
      toast.success("Promo-code not registered");
    } else {
      toast.error("Promo-code registered");
    }
    // console.log(events);
  };

  const myRegisteredPromo = async (address) => {
    if (!address) return [];

    const web3 = geWeb3("read");
    const lottary = await getLottary(web3);
    // Get all the previous events to search for the code
    const events = await lottary.getPastEvents("PromoterRegistered", {
      fromBlock: 0,
      toBlock: "latest",
    });
    // filter the events to find the code
    const filteredEvents = events.filter(
      (event) => event.returnValues.promoter === address
    );
    if (filteredEvents.length === 0) {
      toast.error("No promo-code registered");
      return [];
    } else {
      // store the registered promo-codes in an array
      console.log(filteredEvents);
      const registeredPromoCodes = [];
      filteredEvents.forEach((event) => {
        registeredPromoCodes.push(event.returnValues.code);
      });
      console.log(registeredPromoCodes);
      return registeredPromoCodes;
    }
    // console.log(events);
  };

  return {
    registerPromo,
    buyTicket,
    isCanceled,
    withdraw,
    getAllTickets,
    searchPromoter,
    myRegisteredPromo,
  };
}

export default useLottary;
