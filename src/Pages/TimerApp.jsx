import React, { useState, useEffect } from "react";
// import "./App.css"; // Import your Tailwind CSS file

function TimerApp() {
  const [seconds, setSeconds] = useState(0);
  const [inputSeconds, setInputSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning && seconds < inputSeconds) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isRunning, seconds, inputSeconds]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleInputChange = (e) => {
    setInputSeconds(e.target.value);
  };

  const handleReset = () => {
    setSeconds(0);
    setIsRunning(false);
    setInputSeconds(0);
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <input
        id="seconds-input"
        type="number"
        className="mb-4 p-2 text-center"
        value={inputSeconds}
        onChange={handleInputChange}
        placeholder="Enter seconds"
      />

      <div id="timer" className="text-4xl font-bold mb-4">
        {seconds}
      </div>

      <div className="flex">
        <button
          id="start"
          className={`mx-2 p-2 bg-blue-500 text-white rounded ${
            isRunning && "opacity-50 cursor-not-allowed"
          }`}
          onClick={handleStart}
          disabled={isRunning}
        >
          Start
        </button>
        <button
          id="stop"
          className={`mx-2 p-2 bg-red-500 text-white rounded ${
            !isRunning && "opacity-50 cursor-not-allowed"
          }`}
          onClick={handleStop}
          disabled={!isRunning}
        >
          Stop
        </button>
        <button
          id="reset"
          className="mx-2 p-2 bg-gray-500 text-white rounded"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default TimerApp;
