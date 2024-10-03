var https = require("https");

let url = "https://api.ip2location.io/?key=E780873E02991B8F5C03A758F44B1AB4&ip=192.168.0.43&format=json";

let response = "";
let req = https.get(url, function (res) {
	res.on("data", (chunk) => (response = response + chunk));
	res.on("end", function () {
		console.log(response);
	});
});
