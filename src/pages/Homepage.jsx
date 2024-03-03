import { useEffect, useState } from "react";
import Header from "../components/Header";
import SwapCard from "../components/SwapCard";
import useLottary from "../hooks/useLottary";
function Homepage() {
  // make a countdown timer

  const [days, setDays] = useState(0);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [data, setData] = useState(null);

  const { getData } = useLottary();

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

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <div className="w-screen h-screen">
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

      <SwapCard />
    </div>
  );
}

export default Homepage;
