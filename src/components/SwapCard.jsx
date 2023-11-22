import { useState } from "react";
import { cn } from "../utils";
import LottarySection from "./LottarySection";
import PromoSection from "./PromoSection";

function SwapCard() {
  const [currentTab, setCurrentTab] = useState("lottary");

  return (
    <div className="m-2 md:m-4 flex justify-center pt-10">
      <div className="flex flex-col gap-6 bg-[#18212f] text-white px-4 md:px-7 py-7 shadow-2xl rounded-3xl w-full min-w-[200px] max-w-[580px]">
        <div className="flex items-center justify-center gap-1 lg:gap-4 uppercase text-white text-sm lg:text-xl font-extrabold relative">
          <span
            className={cn(
              "border-b-8 border-transparent px-4 pb-2 z-10 cursor-pointer",
              currentTab === "lottary" && "border-[#111827]"
            )}
            onClick={() => setCurrentTab("lottary")}
          >
            Lottary
          </span>
          <span
            className={cn(
              "border-b-8 border-transparent px-4 pb-2 z-10 cursor-pointer",
              currentTab === "promo" && "border-[#111827]"
            )}
            onClick={() => setCurrentTab("promo")}
          >
            Promo
          </span>
          <span className="bg-[#374151] w-full absolute left-0 top-[30px] md:top-[37px] h-1 z-0"></span>
        </div>

        <div className="md:px-4 py-4">
          {currentTab === "lottary" && <LottarySection />}
          {currentTab === "promo" && <PromoSection />}
        </div>
      </div>
    </div>
  );
}

export default SwapCard;
