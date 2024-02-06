import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function SimpleClock() {
	const [currentTime, setCurrentTime] = useState(new Date())
	useEffect(()=>{
		const intervalId = setInterval(()=> {
			setCurrentTime(new Date())
		}, 1000);
		return () => clearInterval(intervalId)
	}, []);

	const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	const day = currentTime.toLocaleDateString("default", {weekday: 'long'});
	const date = currentTime.toLocaleDateString("default", {year: 'numeric', month: 'long', day: 'numeric'})
	const time = currentTime.toLocaleTimeString('default', {hour12: false});
	return (
		<>
			<h1>Hello there!</h1>
			<div id="day">{`Day: ${day}`}</div>
			<div id="date">{`Date: ${date}`}</div>
			<div id="time">{`Time: ${time}`}</div>
		</>
	);
}


// import React, { useState, useEffect } from "react";

// export default function App() {
//     const [currentDay, setCurrentDay] = useState("");
//     const [currentDate, setCurrentDate] = useState("");
//     const [currentTime, setCurrentTime] = useState("");

//     useEffect(() => {
//         // Function to update date and time every second
//         const updateDateTime = () => {
//             const now = new Date();

//             // Get day in full text format (e.g., "Monday")
//             const dayOptions = { weekday: 'long' };
//             setCurrentDay(now.toLocaleDateString('en-US', dayOptions));

//             // Get date in the format "DD Month YYYY" (e.g., "14 November 2023")
//             const dateOptions = { day: 'numeric', month: 'long', year: 'numeric' };
//             setCurrentDate(now.toLocaleDateString('en-US', dateOptions));

//             // Get time in the format "HH:MM:SS" (24-hour format)
//             const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
//             setCurrentTime(now.toLocaleTimeString('en-US', timeOptions));
//         };

//         // Initial call to set up the initial state
//         updateDateTime();

//         // Update date and time every second
//         const intervalId = setInterval(updateDateTime, 1000);

//         // Clear interval on component unmount
//         return () => clearInterval(intervalId);
//     }, []); // Empty dependency array to run the effect only once on mount

//     return (
//         <div>
//             <div id="day">Day: "{currentDay}"</div>
//             <div id="date">Date: "{currentDate}"</div>
//             <div id="time">Time: "{currentTime}"</div>
//         </div>
//     );
// }

