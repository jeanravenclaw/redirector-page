const queryString = window.location.search;
console.log(queryString); // ?params=___ etc
const urlParams = new URLSearchParams(queryString);
// get redirect
let redirect = urlParams.get("redirect");
if (redirect == null) {
	redirect = "http://example.com";
}

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

// random time
const randomHours = getRandomInt(0, 5);
let randomMins = getRandomInt(0, 11) * 5;
let timeMsg;
if (randomMins == 0) {
	randomMins = "";
} else {
	randomMins = ` and ${randomMins} minutes`;
}
if (randomHours == 0) {
	timeMsg = `${randomMins}`.replace(" and ", "");
} else if (randomHours == 1) {
	timeMsg = `${randomHours} hour${randomMins}`;
} else {
	timeMsg = `${randomHours} hours${randomMins}`;
}
const titleTexts = [
	"Are you sure?",
	"Woah there",
	"Nonononono",
	"Stooooooop!",
	"Wait up",
	"Hold up",
	"Hey!",
	"What are you doing?"
];
const randTitleText = titleTexts[Math.floor(Math.random() * titleTexts.length)];
const timeTexts = [
	"That place can cost you [time]!",
	"You'll miss [time] of your life!",
	"Do you really want to waste [time]?",
	"[time] can be more valuable than you think.",
	"Hello, procrastinator wasting [time] yet again.",
	"[time] gonna go down the drain.",
	"[time] and you could've done everything!",
	"We'd rather you rested 5 minutes than waste [time].",
	"Noooooooooooo!",
	"Just look at the clock before thinking you can waste [time].",
	"This site could kill [time] in 5 minutes!",
	"[time] is too valuable to go there.",
];
const randTimeText = timeTexts[
	Math.floor(Math.random() * titleTexts.length)
].replace("[time]", `<b>${timeMsg}</b>`);
const buttonTexts = [
	"I still wanna go",
	"Continue anyway",
	"Procrastinate",
	"I don't care",
	"I'll take the risk",
	"*ignores*",
	"No thanks!",
];
const randButtonText =
	buttonTexts[Math.floor(Math.random() * buttonTexts.length)];
let titleElement = document.getElementById("title");
titleElement.innerText = randTitleText;
let timeElement = document.getElementById("time");
timeElement.innerHTML = randTimeText;
let buttonElement = document.getElementById("button");
buttonElement.innerHTML = `<a href="${redirect}">${randButtonText}</a>`;
