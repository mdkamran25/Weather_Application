import * as React from "react";
import { useState, useEffect } from "react";
import "./date.css";

export default function Dates() {
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date();
      setCurrentTime(date.toLocaleTimeString("en-US"));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const date = new Date();
  const days: string = date.toLocaleDateString("en-US", { day: "numeric" });
  const month: string = date.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
  const weekDays: string = date.toLocaleDateString("en-US", {
    weekday: "long",
  });

  return (
    <>
      <span className="text-light h2 time"> {currentTime}</span>
      <br />
      <span className="date">
        {" "}
        {weekDays}, {days} {month}
      </span>
    </>
  );
}
