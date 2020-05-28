import React, { useState, useEffect, useRef } from "react";
import { createUseStyles } from "react-jss";
import "./App.css";

function useInterval(callback, delay) {
	const savedCallback = useRef();

	// Remember the latest callback.
	useEffect(() => {
		savedCallback.current = callback;
	}, [callback]);

	// Set up the interval.
	useEffect(() => {
		function tick() {
			savedCallback.current();
		}
		if (delay !== null) {
			let id = setInterval(tick, delay);
			return () => clearInterval(id);
		}
	}, [delay]);
}

const useStyles = createUseStyles({
	back: {
		margin: "auto",
		height: "400px",
		width: "400px",
		border: { radius: "50%" },
		background: "black",
	},
	face: {
		position: "relative",
		margin: "auto",
		top: "12.5px",
		height: "375px",
		width: "375px",
		border: { radius: "50%" },
		background: "white",
	},
	middle: {
		position: "absolute",
		top: "177.5px",
		left: "177.5px",
		margin: "auto",
		height: "20px",
		width: "20px",
		border: { radius: "50%" },
		background: "black",
	},
	secondHand: {
		position: "absolute",
		height: "375px",
		left: "185px",
		width: "5px",
		transform: (props) => props.seconds,
	},
	visibleSecondHand: {
		position: "relative",
		height: "50%",
		background: "red",
	},
	minuteHand: {
		position: "absolute",
		height: "375px",
		left: "185px",
		width: "5px",
		transform: (props) => props.minutes,
	},
	hiddenMinuteHand: {
		position: "relative",
		height: "5%",
	},
	visibleMinuteHand: {
		position: "relative",
		height: "45%",
		background: "black",
	},
	hourHand: {
		position: "absolute",
		height: "375px",
		left: "185px",
		width: "5px",
		transform: (props) => props.hour,
	},
	visibleHourHand: {
		position: "relative",
		height: "33%",
		background: "black",
	},
	hiddenHourHand: {
		position: "relative",
		height: "17%",
	},
});

const Clock = (props) => {
	const classes = useStyles(props);

	const { time } = props;
	return (
		<div className={classes.back}>
			<div className={classes.face}>
				<div className={classes.secondHand}>
					<div className={classes.visibleSecondHand}></div>
				</div>
				<div className={classes.minuteHand}>
					<div className={classes.hiddenMinuteHand}></div>
					<div className={classes.visibleMinuteHand}></div>
				</div>
				<div className={classes.hourHand}>
					<div className={classes.hiddenHourHand}></div>
					<div className={classes.visibleHourHand}></div>
				</div>
				<div className={classes.middle}></div>
			</div>
		</div>
	);
};

function App() {
	const [time, setTime] = useState(Date.now());
	const [seconds, setSeconds] = useState(new Date().getSeconds());
	const [minutes, setMinutes] = useState(new Date().getMinutes());
	const [hour, setHour] = useState(new Date().getHours());
	const [timeString, setTimeString] = useState(new Date().toLocaleTimeString());

	useInterval(() => {
		setTime(Date.now());
		setSeconds(new Date().getSeconds());
		setTimeString(new Date().toLocaleTimeString());
	}, 500);

	useInterval(() => {
		setMinutes(new Date().getMinutes());
		setHour(new Date().getHours());
	}, 1000);
	return (
		<div className="App">
			<div>{timeString}</div>
			<div>{time}</div>
			<Clock
				seconds={`rotate(${seconds * 6}deg)`}
				minutes={`rotate(${minutes * 6}deg)`}
				hour={`rotate(${Math.abs(12 - hour) * 30 + (minutes / 60) * 30}deg)`}
				time={time}
			/>
		</div>
	);
}

export default App;
