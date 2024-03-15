import { useEffect, useState } from "react";
import { cn } from "../utils";
import LottarySection from "./LottarySection";
import PromoSection from "./PromoSection";
import { useAccount } from "wagmi";
import { CopyToClipboard } from "react-copy-to-clipboard";

function SwapCard() {
  const [currentTab, setCurrentTab] = useState("lottary");
  const [referral, setReferral] = useState("");
  const [copied, setCopied] = useState(false);

  const { address } = useAccount();
  // get referral from the url
  useEffect(() => {
    // get the url without the query string

    const urlParams = new URLSearchParams(window.location.search);
    const refarral = urlParams.get("ref");
    if (refarral) {
      setReferral(refarral);
    }
  }, []);

  return (
    <div className="m-2 md:m-4 flex justify-center">
      <div className="flex flex-col gap-6 bg-[#27262c] text-white px-4 md:px-7 py-7 shadow-2xl rounded-3xl w-full min-w-[200px] max-w-[580px]">
        <div className="flex flex-col gap-2 justify-center items-center">
          <p className="text-[15px] md:text-xl">Your referral link: </p>
          <div className="flex justify-between gap-4 flex-col">
            <a
              href={`${window.location.href.split("?")[0]}?ref=${
                address ? address : 0
              }`}
              className="text-primary text-[12px] md:text-xl"
            >{`${address ? address : 0}`}</a>
            <CopyToClipboard
              text={`${window.location.href.split("?")[0]}?ref=${
                address ? address : 0
              }`}
            >
              <button onClick={() => setCopied(true)}>
                {copied ? "Copied" : "Copy"}
              </button>
            </CopyToClipboard>
          </div>
        </div>
        <div className="flex items-center justify-center gap-1 lg:gap-4 uppercase text-white text-sm lg:text-xl font-extrabold relative">
          <span
            className={cn(
              "border-b-8 border-transparent px-4 pb-2 z-10 cursor-pointer",
              currentTab === "lottary" && "border-[#27262c]"
            )}
            onClick={() => setCurrentTab("lottary")}
          >
            Lottery
          </span>
          {/* <span
            className={cn(
              "border-b-8 border-transparent px-4 pb-2 z-10 cursor-pointer",
              currentTab === "promo" && "border-[#27262c]"
            )}
            onClick={() => setCurrentTab("promo")}
          >
            Promo
          </span> */}
          <span className="bg-[#374151] w-full absolute left-0 top-[30px] md:top-[37px] h-1 z-0"></span>
        </div>

        {/* invite link of referral */}

        {/* <div className="flex justify-center flex-col items-center gap-8">
          <h1 className="text-2xl">Winners</h1>
          <div className="flex flex-col justify-center items-center gap-2 border-2 w-full p-2 shadow-sm">
            <h2 className="text-xl">First</h2>
            <div className="flex justify-around w-full">
              <p>12.8 Matic</p>
              <p>963K Woke</p>
            </div>
            <p className="text-[12px] md:text-sm">
              0x45ad51b76FD43d53D6035a4573dad46D226e94a3
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <h2 className="text-xl">Second</h2>
            <div className="flex justify-around w-full">
              <p>8 Matic</p>
              <p>351K Woke</p>
            </div>
            <p className="text-[12px] md:text-sm">
              0xf024F829A925e9411947e4134e9b2e69348e2250
            </p>
          </div>

          <div className="flex flex-col justify-center items-center gap-2">
            <h2 className="text-xl">Third</h2>
            <div className="flex justify-around w-full">
              <p>4.8 Matic</p>
              <p>157.95k Woke</p>
            </div>
            <p className="text-[12px] md:text-sm">
              0xaDdDFEC043948ed57170df1AB28a78f560d53598
            </p>
          </div>
        </div> */}

        <div className="md:px-4 py-4">
          {currentTab === "lottary" && <LottarySection referral={referral} />}
        </div>
      </div>
    </div>
  );
}

export default SwapCard;
