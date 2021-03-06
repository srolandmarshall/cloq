import React, { useState } from "react";
import "./App.css";
import Clock from "./Clock";
import { useInterval } from "./useInterval";

function App() {
	const [timeString, setTimeString] = useState(new Date().toLocaleTimeString());
	const [time, setTime] = useState({
		seconds: new Date().getSeconds(),
		minutes: new Date().getMinutes(),
		hour: new Date().getHours(),
		milliseconds: new Date().getMilliseconds(),
	});

	useInterval(() => {
		setTime({
			seconds: new Date().getSeconds(),
			minutes: new Date().getMinutes(),
			hour: new Date().getHours(),
			milliseconds: new Date().getMilliseconds(),
		});
		setTimeString(new Date().toLocaleTimeString());
	}, 50);

	const seconds_rotation = () => {
		return ((time.seconds + time.milliseconds / 1000) * 6).toFixed(2);
	};

	const minutes_rotation = () => {
		return ((time.minutes + time.seconds / 60) * 6).toFixed(2);
	};

	const hours_rotation = () => {
		if (time.hour > 12) {
			return (time.hour - 12 + time.minutes / 60) * 30;
		}
		return (time.hour + time.minutes / 60) * 30;
	};

	return (
		<div className="App">
			<div>{timeString}</div>
			<Clock
				sec={`rotate(${seconds_rotation()}deg)`}
				min={`rotate(${minutes_rotation()}deg)`}
				hour={`rotate(${hours_rotation()}deg)`}
				time={time}
			/>
		</div>
	);
}

export default App;
