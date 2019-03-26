//https://www.codewars.com/kata/human-readable-time/train/javascript
'use strict'

function humanReadable(totalSeconds) {

	const toalMinutes = Math.floor(totalSeconds / 60);
	
	const hours = Math.floor(toalMinutes / 60);
	const minutes = toalMinutes - (hours * 60);
	const seconds = totalSeconds - (toalMinutes * 60);

	return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
}

function padZero(number){

	if (number < 10){
		return `0${number}`
	}
	return number;
}

module.exports = humanReadable;