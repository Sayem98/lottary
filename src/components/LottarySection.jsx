import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useAccount } from "wagmi";
import Web3 from "web3";
import InputBox from "./InputBox";
import Spinner from "./Spinner";
import useLottary from "../hooks/useLottary";
import CreateLottery from "./CreateLottery";
import MATIC from "../images/chains/polygon.png";
import WOKE from "../images/tokens/woke.jpg";
import GONE from "../images/tokens/gone.jpg";
import LLC from "../images/tokens/gone.jpg";
import MOON from "../images/tokens/gone.jpg";

const options = [
  {
    name: "MATIC",
    value: "polygon",
    img: MATIC,
  },
  {
    name: "WOKE",
    value: "woke",
    img: WOKE,
  },
  {
    name: "GONE",
    value: "gone",
    img: GONE,
  },
  {
    name: "LIC",
    value: "lic",
    img: LLC,
  },
  {
    name: "MOON",
    value: "moon",
    img: MOON,
  },
  {
    name: "JOKER",
    value: "joker",
    img: MOON,
  },
];

function LottarySection({ referral }) {
  const [isLoading, setIsLoading] = useState(false);
  const [amount, setAmount] = useState(0);
  const [tickets, setTickets] = useState(0);
  const [isCancled, setIsCancled] = useState(false);
  const [prices, setPrices] = useState(null);
  const [loading2, setLoading2] = useState(false);

  const [paymentType, setPaymentType] = useState("polygon");
  const [cost, setCost] = useState(0);

  const { address, isConnected } = useAccount();
  const { buyTicket, myTickets, owner, getLotteryPrices } = useLottary();

  const [own, setOwn] = useState(false);

  useEffect(() => {
    const _ownerr = async () => {
      setLoading2(true);
      try {
        const data = await owner();
        setOwn(data);
        const _prices = await getLotteryPrices();
        console.log(_prices);
        setPrices(_prices);
        setLoading2(false);
      } catch (err) {
        console.log(err);
        setLoading2(false);
      }
    };
    if (address) _ownerr();
  }, []);
  console.log(loading2);

  useEffect(() => {
    const fetchData = async () => {
      const data = await myTickets();
      setTickets(data.toString());
    };
    if (address) fetchData();
  }, [address]);

  useEffect(() => {
    console.log("payment type:", paymentType);
    if (paymentType === "polygon") {
      setCost(amount * prices?.maticPrice);
    } else if (paymentType === "woke") {
      setCost(amount * prices?.wokePrice);
    } else if (paymentType === "gone") {
      setCost(amount * prices?.gonePrice);
    } else if (paymentType === "lic") {
      setCost(amount * prices?.licPrice);
    } else if (paymentType === "moon") {
      setCost(amount * prices?.moonPrice);
    } else if (paymentType === "joker") {
      setCost(amount * prices?.jokerPrice);
    }
  }, [paymentType, amount]);

  const handleBuy = async (e) => {
    if (!amount) {
      toast.error("Please enter the amount!");
      return;
    }
    setIsLoading(true);
    try {
      console.log(paymentType, amount, referral);
      let unitPrice = 0;
      if (paymentType === "polygon") {
        unitPrice = prices.maticPrice;
      } else if (paymentType === "woke") {
        unitPrice = prices.wokePrice;
      } else if (paymentType === "gone") {
        unitPrice = prices.gonePrice;
      } else if (paymentType === "lic") {
        unitPrice = prices.licPrice;
      } else if (paymentType === "moon") {
        unitPrice = prices.moonPrice;
      } else if (paymentType === "joker") {
        unitPrice = prices.jokerPrice;
      }
      await buyTicket(paymentType, amount, referral, unitPrice);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
      window.location.reload();
    }
  };
  return loading2 ? (
    <Spinner />
  ) : (
    <>
      {own ? (
        <CreateLottery />
      ) : (
        <div className="flex flex-col gap-2">
          {!isCancled && (
            <>
              <div className="text-lg text-gray-200 font-semibold uppercase flex justify-between">
                <div className="flex items-center justify-between gap-2 w-full">
                  <h2 className="w-[60%]">Select Payment Type:</h2>
                  {/* <img src={WOKE} alt="WOKE" /> */}

                  <select
                    className="w-[30%] bg-[#27262C] rounded-md p-1"
                    onChange={(e) => {
                      console.log("Selecting");
                      setPaymentType(e.target.value);
                    }}
                  >
                    {options.map((option, index) => {
                      return (
                        <option value={option.value} key={index}>
                          {" "}
                          <p>{option.name}</p>
                          <img src={WOKE} alt="WOKE" />
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div className="flex justify-between">
                <p className="text-lg">MY TICKETS</p>
                <p className="text-lg">{tickets}</p>
              </div>
              <InputBox
                name="amount"
                label="Amount"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter the amount"
              />
            </>
          )}

          <div className="flex justify-end">
            <p className="text-lg">COST :</p>&nbsp;
            <p className="text-lg">{isNaN(cost) ? 0 : cost}</p>
            &nbsp;
            <p className="text-lg">
              {paymentType === "polygon"
                ? "MATIC"
                : paymentType === "woke"
                ? "WOKE"
                : paymentType === "gone"
                ? "GONE"
                : paymentType === "lic"
                ? "LIC"
                : paymentType === "moon"
                ? "MOON"
                : "JOKER"}
            </p>
          </div>

          <button
            className="uppercase text-lg bg-[#4f46e5] hover:bg-[#5b54e8] px-6 py-2 rounded-lg mt-4 shadow-xl"
            onClick={handleBuy}
            disabled={false}
          >
            {isLoading ? <Spinner /> : isCancled ? "Withdraw" : "Buy"}
          </button>
        </div>
      )}
    </>
  );
}

export default LottarySection;
