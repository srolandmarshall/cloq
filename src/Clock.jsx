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
		transform: (props) => props.sec,
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
		transform: (props) => props.min,
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

	return (
		<>
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
		</>
	);
};

export default Clock;
