import { useEffect, useState } from "react";
import Header from "../components/Header";
import SwapCard from "../components/SwapCard";
import useLottary from "../hooks/useLottary";
import { useAccount } from "wagmi";
import Web3 from "web3";
import toast from "react-hot-toast";
import Footer from "../components/Footer";

function Homepage() {
  // make a countdown timer

  const [days, setDays] = useState(0);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [data, setData] = useState(null);
  const [maticBalance, setMaticBalance] = useState(0);
  const [wokeBalance, setWokBalance] = useState(0);
  const [goneBalance, setGoneBalance] = useState(0);

  const { getData, wokeBalanceF, goneBalanceF, maticBalanceF } = useLottary();
  const { address } = useAccount();

  useEffect(() => {
    const fetchData = async () => {
      const web3 = new Web3(window.ethereum);
      const chain_id = await web3.eth.getChainId();
      if (chain_id !== 137 && chain_id !== 11155111) {
        console.log("Wrong chain");
        return;
      }

      const data = await getData();
      setData(data);
      try {
        const _maticBalance = await maticBalanceF();
        setMaticBalance(_maticBalance);
      } catch (e) {
        console.log("Matic balance error");
      }

      try {
        const _wokeBalance = await wokeBalanceF();
        setWokBalance(_wokeBalance);
      } catch (e) {
        console.log("Woke balance error");
      }

      try {
        const _goneBalance = await goneBalanceF();
        setGoneBalance(_goneBalance);
      } catch (e) {
        console.log("Gone balance error");
      }
    };
    try {
      fetchData();
    } catch (e) {
      window.location.reload();
    }
  }, [address]);

  useEffect(() => {
    const interval = setInterval(() => {
      // check if data.endtime is smaller than current time
      if (data && data.endTime * 1000 < new Date().getTime()) {
        clearInterval(interval);
        return;
      }
      const countDownDate = new Date(
        data ? data.endTime * 1000 : new Date().getTime()
      );
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setDays(days);
      setHour(hours);
      setMinute(minutes);
      setSecond(seconds);
    }, 1000);
    return () => clearInterval(interval);
  }, [data]);

  return (
    <div className="w-screen h-screen home">
      <Header />
      <div className="flex justify-center flex-col items-center mt-4 gap-4 text-center p-8">
        <p className="text-5xl">Get your tickets now !</p>
        <p>
          <span className="text-3xl">{days}</span>D{" "}
          <span className="text-3xl">{hour}</span>H{" "}
          <span className="text-3xl">{minute}</span>M{" "}
          <span className="text-3xl">{second}</span>S
        </p>
      </div>

      <div className="flex justify-center flex-col items-center mt-4 gap-4 text-center p-8">
        <p className="text-xl">Total Pot</p>
        <div className=" flex justify-between gap-20 md:gap-28">
          <div>
            <p>Matic</p>
            <p>{Number(maticBalance).toFixed(2)}</p>
          </div>
          <div>
            <p>Woke</p>
            <p>{Number(wokeBalance).toFixed(2)}</p>
          </div>
          <div>
            <p>Gone</p>
            <p>{Number(goneBalance).toFixed(2)}</p>
          </div>
        </div>
      </div>

      <SwapCard />
      <Footer />
    </div>
  );
}

export default Homepage;
