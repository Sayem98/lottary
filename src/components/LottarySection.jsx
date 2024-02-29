import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useAccount } from "wagmi";
import Web3 from "web3";
import InputBox from "./InputBox";
import Spinner from "./Spinner";
import useLottary from "../hooks/useLottary";

function LottarySection() {
  const [isLoading, setIsLoading] = useState(false);
  const [amount, setAmount] = useState("");
  const [promoCode, setPromoCode] = useState("");
  const [isCancled, setIsCancled] = useState(false);
  const [tickets, setTickets] = useState(0);

  const [paymentType, setPaymentType] = useState("Polygon");

  const { address } = useAccount();
  const { buyTicket, isCanceled, withdraw, getAllTickets } = useLottary();

  // useEffect(() => {
  //   const getIsCancled = async () => {
  //     try {
  //       const _isCancled = await isCanceled();
  //       console.log(_isCancled);
  //       if (address) {
  //         const _tickets = await getAllTickets(address);
  //         console.log(_tickets);
  //         setTickets(_tickets);
  //       }

  //       setIsCancled(_isCancled);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };
  //   if (address) getIsCancled();
  // }, []);
  const handleSubmit = async (e) => {
    // e.preventDefault();
    // console.log(amount, promoCode);
    // if (!address) return toast.error("Please connect your wallet");
    // if (!amount) return toast.error("Please enter the amount");
    // setIsLoading(true);
    // try {
    //   await buyTicket(
    //     address,
    //     Web3.utils.toWei(amount.toString(), "ether"),
    //     promoCode
    //   );
    // } catch (e) {
    //   console.log(e);
    //   toast.error("Error buying tickets");
    // } finally {
    //   setIsLoading(false);
    // }
  };

  const handleWithdraw = async (e) => {
    // e.preventDefault();
    // if (!address) return toast.error("Please connect your wallet");
    // setIsLoading(true);
    // try {
    //   await withdraw(address);
    // } catch (e) {
    //   console.log(e);
    //   toast.error("Error withdrawing");
    // } finally {
    //   setIsLoading(false);
    // }
  };

  return (
    <div className="flex flex-col gap-8">
      {!isCancled && (
        <>
          <div className="text-lg text-gray-200 font-semibold uppercase flex justify-between">
            <div className="flex items-center justify-between gap-8 w-full">
              <div className="grid grid-cols-3 gap-0.5 w-full rounded-xl overflow-hidden">
                <button
                  className={`p-2.5 flex gap-2.5 items-center justify-center hover:opacity-75 b ${
                    paymentType === "Polygon" ? "bg-primary" : "bg-white/10"
                  }`}
                  onClick={() => setPaymentType("Polygon")}
                >
                  <div className="relative flex">
                    <img
                      src="./images/chains/polygon.png"
                      alt="BSC"
                      className="object-contain w-9 h-9 rounded-full"
                    />
                  </div>
                  MATIC
                </button>
                <button
                  className={`p-2.5 flex gap-2.5 items-center justify-center hover:opacity-75 b ${
                    paymentType === "woke" ? "bg-primary" : "bg-white/10"
                  }`}
                  onClick={() => setPaymentType("woke")}
                >
                  <div className="relative flex">
                    <img
                      src="./images/tokens/woke.jpg"
                      alt="USDT"
                      className="object-contain w-9 h-9 rounded-full"
                    />
                    <img
                      className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full border-1 border-primary"
                      src="./images/chains/ethereum.svg"
                    />
                  </div>
                  WOKE
                </button>
                <button
                  className={`p-2.5 flex gap-2.5 items-center justify-center hover:opacity-75 b ${
                    paymentType === "gone" ? "bg-primary" : "bg-white/10"
                  }`}
                  onClick={() => setPaymentType("gone")}
                >
                  <div className="relative flex">
                    <img
                      src="./images/tokens/gone.jpg"
                      alt="USDC"
                      className="object-contain w-9 h-9 rounded-full"
                    />
                    <img
                      className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full border-1 border-primary"
                      src="./images/chains/ethereum.svg"
                    />
                  </div>
                  GONE
                </button>
              </div>
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
          <InputBox
            name="promoCode"
            label="Promo Code"
            type="text"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            placeholder="Enter the promo code"
          />
        </>
      )}

      <button
        className="uppercase text-lg bg-[#4f46e5] hover:bg-[#5b54e8] px-6 py-2 rounded-lg mt-4 shadow-xl"
        onClick={isCancled ? handleWithdraw : handleSubmit}
        disabled={isLoading}
      >
        {isLoading ? <Spinner /> : isCancled ? "Withdraw" : "Buy"}
      </button>
    </div>
  );
}

export default LottarySection;
