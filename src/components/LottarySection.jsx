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

  const { address } = useAccount();
  const { buyTicket, isCanceled, withdraw } = useLottary();

  useEffect(() => {
    const getIsCancled = async () => {
      try {
        const _isCancled = await isCanceled();

        setIsCancled(_isCancled);
      } catch (e) {
        console.log(e);
      }
    };
    if (address) getIsCancled();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(amount, promoCode);
    if (!address) return toast.error("Please connect your wallet");
    if (!amount) return toast.error("Please enter the amount");

    setIsLoading(true);
    try {
      await buyTicket(
        address,
        Web3.utils.toWei(amount.toString(), "ether"),
        promoCode
      );
    } catch (e) {
      console.log(e);
      toast.error("Error buying tickets");
    } finally {
      setIsLoading(false);
    }
  };

  const handleWithdraw = async (e) => {
    e.preventDefault();
    if (!address) return toast.error("Please connect your wallet");

    setIsLoading(true);
    try {
      await withdraw(address);
    } catch (e) {
      console.log(e);
      toast.error("Error withdrawing");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-8">
      {!isCancled && (
        <>
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
