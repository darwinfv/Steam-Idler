
	const axios = require('axios');
	const cheerio = require('cheerio');
	const http = require('http');
	const fs = require('fs');
	const path = require('path');
	const util = require('util');
	const index = require('./badge_index.html');

	axios.get("https://steamcommunity.com/profiles/76561198052935979/badges/?sort=p")
		.then((response) => {
			if(response.status === 200) {
				fs.readFile('./badge_index.html', function(err, data) {

					const $ = cheerio.load(data);
				});

				// console.log($('span').length);//each(function(i, elem) {
					// var drops = $(this).find().children('.progress_info_bold').text();
					// var drops = $(this).find('.card_drop_info_header').text();
					// let appid = $(this).find('.progress_info_bold').text();
					// let appid = $(this).text();
					// let appid = $(this).text();
					// if(appid.includes("gamecards")) {
						// appid = appid.substring(appid.lastIndexOf("/", appid.length - 2) + 1, appid.length - 1);
						// let drops = $('.badge_title_stats_drops')./*find($('span')).*/length;
						// $(this).children('.badge_row_inner')
						// console.log(appid);
					// }
				// });
			}
			else {
				console.log("Response code: " + response.status);
			}
		}, (error) => console.log(err) );

