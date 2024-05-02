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
  const [checkPromo, setCheckPromo] = useState("Enter code");
  const [registeredPromos, setRegisteredPromos] = useState([]); // [promoCode, promoCode, ...
  const { address: wallet } = useAccount();

  const { registerPromo, searchPromoter, myRegisteredPromo } = useLottary();

  useEffect(() => {
    if (wallet) {
      setAddress(wallet);
    }
  }, [wallet]);

  const getPromoCode = async () => {};

  const handleSubmit = async (e) => {};

  return (
    <div>
      <div className="flex flex-col gap-8 w-full h-full">
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
      {/* separator */}
      <div className="border-b-4 border-[#374151] my-8"></div>
      {/* search promo code */}

      <div className="flex flex-col gap-8 mt-6 ">
        <InputBox
          name="promoCode"
          label="Promo Code"
          type="text"
          value={checkPromo}
          onChange={(e) => setCheckPromo(e.target.value)}
          placeholder="Create Promo Code"
        />
        <button
          className="uppercase text-lg bg-[#4f46e5] hover:bg-[#5b54e8] px-6 py-2 rounded-lg mt-4 shadow-xl"
          onClick={() => searchPromoter(checkPromo)}
        >
          {isLoading ? <Spinner /> : "Search"}
        </button>
        <div className="flex flex-row justify-between">
          <p className="text-lg text-gray-200 font-semibold uppercase">
            My Registered promo-code
          </p>

          <button
            className="uppercase text-lg bg-[#4f46e5] hover:bg-[#5b54e8] px-6 py-2 rounded-lg  shadow-xl"
            onClick={getPromoCode}
          >
            {isLoading ? <Spinner /> : "Get"}
          </button>

          {/* show the registered promos by comma separate way form the registeredPromo array */}
        </div>
        {/* My Registered promo-codes */}
        <p className="text-lg text-gray-200 font-semibold uppercase">
          {registeredPromos.length > 0 ? registeredPromos.join(", ") : ""}
        </p>
      </div>
    </div>
  );
}

export default PromoSection;
