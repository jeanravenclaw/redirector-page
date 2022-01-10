
// display stuff
const queryString = window.location.search;
console.log(queryString); // ?params=___ etc
const urlParams = new URLSearchParams(queryString);
// get redirect
let redirect = urlParams.get("redirect");
if (redirect == null) {
	redirect = "http://example.com";
}
let redirectSafe = `${redirect}`;
// get domain
let domain = urlParams.get("domain");
if (domain == null) {
	domain = redirect
}

// cookies
function setCookie(cname, cvalue, exmins) {
	const d = new Date();
	d.setTime(d.getTime() + exmins * 60 * 1000);
	let expires = "expires=" + d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
	let name = cname + "=";
	let ca = document.cookie.split(";");
	for (let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) == " ") {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

function checkCookie() {
	let timer = getCookie(domain);
	if (timer != "") {
		// cookie is set; you can proceed
		window.location.replace(redirectSafe);
	} else {
		// cookie is not set
	}
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
	if (randomMins == "") {
		timeMsg = `1 hour`;
	} else {
		timeMsg = `${randomMins}`.replace(" and ", "");
	}
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
	"What are you doing?",
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
	"Go anyway",
	"I have enough time",
];
const randButtonText =
	buttonTexts[Math.floor(Math.random() * buttonTexts.length)];
let titleElement = document.getElementById("title");
titleElement.innerText = randTitleText;
let timeElement = document.getElementById("time");
timeElement.innerHTML = randTimeText;
let buttonElement = document.getElementById("button");
buttonElement.innerHTML = randButtonText;

// button
buttonElement.addEventListener("click", function (event) {
	function randomStr(length) {
		var result = "";
		var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
		var charactersLength = characters.length;
		for (var i = 0; i < length; i++) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength));
		}
		return result;
	}
	let confirmtext = randomStr(5);
	let answer = prompt(
		`Are you sure you're going to ${domain}?\n👀 Enter the text shown: ${confirmtext}`,
		""
	);

	if (answer != null || answer == confirmtext) {
		timer = prompt("Unblock for how many minutes?", 30);
		if (timer != "" && timer != null) {
			setCookie(domain, "true", timer.toString());
		} else {
			setCookie(domain, "true", 30);
		}
		window.location.replace(redirectSafe);
	}
});
