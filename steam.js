
	const axios = require('axios');

	const key = "DE783384768F713588C69088F368AD58";
	const http = "http://api.steampowered.com/";
	"<interface name>/<method name>/v<version>/?key=<api key>";

	var link = http + "IPlayerService/GetOwnedGames/v0001/?key=" + key + "&steamid=76561197960434622";
	
	axios.get(link)
		.then((response) => {
			if(response.status === 200) {
				var response = response.data;
			}
			else
				console.log("Response code: " + response.status);

		}, (error) => console.log(err) );