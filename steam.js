
	const axios = require('axios');

	const key = "DE783384768F713588C69088F368AD58";
	const http = "http://api.steampowered.com/";
	const id = "76561198052935979/";

	var link = http + "IPlayerService/GetOwnedGames/v0001/?key=" + key + "&steamid=" + id;
	console.log(link);
	
	axios.get("https://steamcommunity.com/profiles/76561198052935979/badges/")
		.then((response) => {
			if(response.status === 200) {
				console.log(response.data);
				// var info = response.data;
				// console.log(info.response.games);
			}
			else
				console.log("Response code: " + response.status);

		}, (error) => console.log(err) );