import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useLottary from "../hooks/useLottary";
import Web3 from "web3";

function CreateLottery() {
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [maticPrice, setMaticPrice] = useState(0);
  const [wokePrice, setWokePrice] = useState(0);
  const [gonePrice, setGonePrice] = useState(0);
  const [licPrice, setLicPrice] = useState(0);
  const [moonPrice, setMoonPrice] = useState(0);
  const [jokerPrice, setJokerPrice] = useState(0);

  const { createLottery } = useLottary();

  const handleCreate = async () => {
    // create lottery
    console.log("Create Lottery");
    console.log(startTime, endTime, maticPrice, wokePrice, gonePrice);

    // convert date to epoch timestamp
    const start = startTime.getTime() / 1000;
    const end = endTime.getTime() / 1000;
    const matic = Web3.utils.toWei(maticPrice.toString(), "ether");
    const woke = Web3.utils.toWei(wokePrice.toString(), "ether");
    const gone = Web3.utils.toWei(gonePrice.toString(), "ether");
    const lic = Web3.utils.toWei(licPrice.toString(), "ether");
    const moon = Web3.utils.toWei(moonPrice.toString(), "ether");
    const joker = Web3.utils.toWei(jokerPrice.toString(), "ether");

    try {
      await createLottery(start, end, matic, woke, gone, lic, moon, joker);
    } catch (e) {
      console.log(e);
    }
  };

  const handleDateChange = (date) => {
    // date must be a future date
    if (date < new Date()) {
      console.log("Date must be a future date");
      window.alert("Date must be a future date");
      return;
    }
    setStartTime(date);
  };

  const handleEndDateChange = (date) => {
    // end date must be greater than start date
    if (date < startTime) {
      console.log("End date must be greater than start date");
      window.alert("End date must be greater than start date");
      return;
    }
    setEndTime(date);
  };

  return (
    <div className="flex flex-col text-black">
      <h1 className="text-white">Create Lottery</h1>
      <div className="flex flex-col gap-5">
        {/* input of date picker */}
        <div className="flex flex-col gap-1">
          <label className="text-white text-center">Start Time</label>
          <DatePicker
            selected={startTime}
            onChange={(date) => handleDateChange(date)}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            timeCaption="time"
            dateFormat="MMMM d, yyyy h:mm aa"
            // change design
            className="rounded p-1 w-full"
          />
        </div>
        {/* input of date picker */}
        <div className="flex flex-col gap-1">
          <label className="text-white text-center">End Time</label>
          <DatePicker
            selected={endTime}
            onChange={(date) => handleEndDateChange(date)}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            timeCaption="time"
            dateFormat="MMMM d, yyyy h:mm aa"
            // change design
            className="rounded p-1 w-full"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-white text-center">Matic Price</label>
          <input
            type="number"
            placeholder="Matic Price"
            className="rounded p-1 "
            value={maticPrice}
            onChange={(e) => setMaticPrice(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-white text-center">Woke Price</label>
          <input
            type="number"
            placeholder="Woke Price"
            className="rounded p-1 "
            value={wokePrice}
            onChange={(e) => setWokePrice(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-white text-center">Gone Price</label>
          <input
            type="number"
            placeholder="Gone Price"
            className="rounded p-1 "
            value={gonePrice}
            onChange={(e) => setGonePrice(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-white text-center">LIC Price</label>
          <input
            type="number"
            placeholder="Gone Price"
            className="rounded p-1 "
            value={licPrice}
            onChange={(e) => setLicPrice(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-white text-center">Moon Price</label>
          <input
            type="number"
            placeholder="Gone Price"
            className="rounded p-1 "
            value={moonPrice}
            onChange={(e) => setMoonPrice(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-white text-center">Joker Price</label>
          <input
            type="number"
            placeholder="Gone Price"
            className="rounded p-1 "
            value={jokerPrice}
            onChange={(e) => setJokerPrice(e.target.value)}
          />
        </div>
        <button className="bg-green-500 rounded p-2" onClick={handleCreate}>
          Create
        </button>
      </div>
    </div>
  );
}

export default CreateLottery;
