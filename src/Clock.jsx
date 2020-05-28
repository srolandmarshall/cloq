import React from "react";
import { createUseStyles } from "react-jss";

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
		background: "rgb(255,255,255)",
		background:
			"radial-gradient(circle, rgba(255,255,255,1) 50%, rgba(217,235,255,1) 100%);",
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
	noon: {
		position: "absolute",
		left: "185px",
		margin: "auto",
		height: "30px",
		width: "5px",
		background: "black",
	},
	six: {
		position: "absolute",
		left: "185px",
		top: "345px",
		margin: "auto",
		height: "30px",
		width: "5px",
		background: "black",
	},
	three: {
		position: "absolute",
		left: "345px",
		top: "185px",
		height: "5px",
		width: "30px",
		background: "black",
	},
	nine: {
		position: "absolute",
		top: "185px",
		height: "5px",
		width: "30px",
		background: "black",
	},
	secondHand: {
		position: "absolute",
		height: "375px",
		left: "185px",
		width: "5px",
		transform: (props) => props.sec,
	},
	visibleSecondHand: {
		position: "relative",
		height: "48%",
		background: "red",
	},
	hiddenSecondHand: {
		position: "relative",
		height: "2%",
	},
	minuteHand: {
		position: "absolute",
		height: "375px",
		left: "185px",
		width: "5px",
		transform: (props) => props.min,
	},
	hiddenMinuteHand: {
		position: "relative",
		height: "7%",
	},
	visibleMinuteHand: {
		position: "relative",
		height: "43%",
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

	return (
		<>
			<div className={classes.back}>
				<div className={classes.face}>
					<div className={classes.secondHand}>
						<div className={classes.hiddenSecondHand}></div>
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
					<div className={classes.noon}></div>
					<div className={classes.six}></div>
					<div className={classes.nine}></div>
					<div className={classes.three}></div>
				</div>
			</div>
		</>
	);
};

export default Clock;
