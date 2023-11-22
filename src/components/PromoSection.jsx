import { useEffect, useState } from "react";
import Web3 from "web3";
import toast from "react-hot-toast";
import { useAccount } from "wagmi";
import InputBox from "./InputBox";
import useLottary from "../hooks/useLottary";
import Spinner from "./Spinner";

function PromoSection() {
  const [isLoading, setIsLoading] = useState(false);
  const [address, setAddress] = useState(
    "0xCD85cd82F4f44fe2DddE6949d7d680943031DAa9"
  );
  const [promoCode, setPromoCode] = useState("");
  const { address: wallet } = useAccount();

  const { registerPromo } = useLottary();

  useEffect(() => {
    if (wallet) {
      setAddress(wallet);
    }
  }, [wallet]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(address, promoCode);
    if (!wallet) return toast.error("Please connect your wallet");
    if (!promoCode) return toast.error("Please enter the promo code");

    setIsLoading(true);
    try {
      await registerPromo(address, promoCode);
    } catch (e) {
      console.log(e);
      toast.error("Error registering promo code");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-8">
      <InputBox
        name="promoCode"
        label="Promo Code"
        type="text"
        value={promoCode}
        onChange={(e) => setPromoCode(e.target.value)}
        placeholder="Create Promo Code"
      />

      <InputBox
        name="address"
        label="Address"
        type="text"
        value={
          address.substring(0, 6) +
          "......." +
          address.substring(address.length - 4)
        }
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Enter the address"
        readOnly
      />

      <button
        className="uppercase text-lg bg-[#4f46e5] hover:bg-[#5b54e8] px-6 py-2 rounded-lg mt-4 shadow-xl"
        onClick={handleSubmit}
      >
        {isLoading ? <Spinner /> : "Register"}
      </button>
    </div>
  );
}

export default PromoSection;
