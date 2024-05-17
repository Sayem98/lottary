import { useEffect, useState } from "react";
import { cn } from "../utils";
import LottarySection from "./LottarySection";
import PromoSection from "./PromoSection";
import { useAccount } from "wagmi";
import { CopyToClipboard } from "react-copy-to-clipboard";
import useLottary from "../hooks/useLottary";
import Web3 from "web3";

function SwapCard() {
  const [currentTab, setCurrentTab] = useState("lottary");
  const [referral, setReferral] = useState("");
  const [copied, setCopied] = useState(false);
  const [winner, setWinner] = useState([]);
  const [lottery, setLottery] = useState(null);
  const [owners, setOwners] = useState(false);

  const { address, isConnected } = useAccount();
  const { getWinners, getData, owner } = useLottary();

  useEffect(() => {
    const _getWinners = async () => {
      const _winners = await getWinners();
      setWinner(_winners);
      const _data = await getData();
      setLottery(_data);
      const _owner = await owner();
      setOwners(_owner);
    };
    if (isConnected) {
      _getWinners();
    }
  }, [isConnected]);
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

        {/* invite link of referral winner[0] !== "0x0000000000000000000000000000000000000000"*/}
        {!owner &&
        winner.length > 0 &&
        winner[0] !== "0x0000000000000000000000000000000000000000" ? (
          <div className="flex justify-center flex-col items-center gap-8">
            <h1 className="text-2xl">Winners</h1>
            <div className="flex flex-col justify-center items-center gap-2 border-2 w-full p-2 shadow-sm">
              <h2 className="text-xl">First</h2>
              <div className="flex justify-around w-full gap-1">
                <p>
                  {lottery
                    ? (Number(
                        Web3.utils.fromWei(
                          lottery.maticPool.toString(),
                          "ether"
                        )
                      ) *
                        40) /
                      100
                    : 0}{" "}
                  Matic
                </p>
                <p>
                  {lottery
                    ? (Number(
                        Web3.utils.fromWei(lottery.wokepool.toString(), "ether")
                      ) *
                        40) /
                      100
                    : 0}
                  K Woke
                </p>
                <p>
                  {lottery
                    ? (Number(
                        Web3.utils.fromWei(lottery.gonePool.toString(), "ether")
                      ) *
                        40) /
                      100
                    : 0}
                  K Gone
                </p>
                <p>
                  {lottery
                    ? (Number(
                        Web3.utils.fromWei(lottery.licPool.toString(), "ether")
                      ) *
                        40) /
                      100
                    : 0}
                  K LIC
                </p>
                <p>
                  {lottery
                    ? (Number(
                        Web3.utils.fromWei(lottery.moonPool.toString(), "ether")
                      ) *
                        40) /
                      100
                    : 0}
                  K MOON
                </p>
              </div>
              <p className="text-[12px] md:text-sm">
                0xF27D022654e49cEF5187fdB07e4A2c65dAfc39a8
              </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <h2 className="text-xl">Second</h2>
              <div className="flex justify-around w-full gap-1">
                <p>
                  {lottery
                    ? (Number(
                        Web3.utils.fromWei(
                          lottery.maticPool.toString(),
                          "ether"
                        )
                      ) *
                        25) /
                      100
                    : 0}{" "}
                  Matic
                </p>
                <p>
                  {lottery
                    ? (Number(
                        Web3.utils.fromWei(lottery.wokepool.toString(), "ether")
                      ) *
                        25) /
                      100
                    : 0}
                  K Woke
                </p>
                <p>
                  {lottery
                    ? (Number(
                        Web3.utils.fromWei(lottery.gonePool.toString(), "ether")
                      ) *
                        25) /
                      100
                    : 0}
                  K Gone
                </p>
                <p>
                  {lottery
                    ? (Number(
                        Web3.utils.fromWei(lottery.licPool.toString(), "ether")
                      ) *
                        25) /
                      100
                    : 0}
                  K LIC
                </p>
                <p>
                  {lottery
                    ? (Number(
                        Web3.utils.fromWei(lottery.moonPool.toString(), "ether")
                      ) *
                        25) /
                      100
                    : 0}
                  K MOON
                </p>
              </div>
              <p className="text-[12px] md:text-sm">
                0xC00037fa27DC24e388f653b1d377520E960D74c4
              </p>
            </div>

            <div className="flex flex-col justify-center items-center gap-2">
              <h2 className="text-xl">Third</h2>
              <div className="flex justify-around w-full gap-1">
                <p>
                  {lottery
                    ? (Number(
                        Web3.utils.fromWei(
                          lottery.maticPool.toString(),
                          "ether"
                        )
                      ) *
                        15) /
                      100
                    : 0}{" "}
                  Matic
                </p>
                <p>
                  {lottery
                    ? (Number(
                        Web3.utils.fromWei(lottery.wokepool.toString(), "ether")
                      ) *
                        15) /
                      100
                    : 0}
                  K Woke
                </p>
                <p>
                  {lottery
                    ? (Number(
                        Web3.utils.fromWei(lottery.gonePool.toString(), "ether")
                      ) *
                        15) /
                      100
                    : 0}
                  K Gone
                </p>
                <p>
                  {lottery
                    ? (Number(
                        Web3.utils.fromWei(lottery.licPool.toString(), "ether")
                      ) *
                        15) /
                      100
                    : 0}
                  K LIC
                </p>
                <p>
                  {lottery
                    ? (Number(
                        Web3.utils.fromWei(lottery.moonPool.toString(), "ether")
                      ) *
                        15) /
                      100
                    : 0}
                  K MOON
                </p>
              </div>
              <p className="text-[12px] md:text-sm">
                0x6cC65183F57d499e35f4a55be5A688ea3d0BffFC
              </p>
            </div>
          </div>
        ) : (
          <div className="md:px-4 py-4">
            {currentTab === "lottary" && <LottarySection referral={referral} />}
          </div>
        )}
      </div>
    </div>
  );
}

export default SwapCard;
