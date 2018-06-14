
	const axios = require('axios');
	const cheerio = require('cheerio');
	const http = require('http');

	axios.get("https://steamcommunity.com/profiles/76561198052935979/badges/?sort=p")
		.then((response) => {
			if(response.status === 200) {
				const html = response.data;
				const $ = cheerio.load(html);
				$('.badge_row').each(function(i, elem) {
					// var drops = $(this).find().children('.progress_info_bold').text();
					// var drops = $(this).find('.card_drop_info_header').text();
					// let appid = $(this).find('.progress_info_bold').text();
					// let appid = $(this).find('.badge_row_overlay').attr('href');
					// if(appid.includes("gamecards")) {
						// appid = appid.substring(appid.lastIndexOf("/", appid.length - 2) + 1, appid.length - 1);
						// let drops = $(this).find('.card_drop_info_body').text();
						let appid = $(this).children('.badge_row_inner')
											.children('.badge_title_row')
											.children('.badge_title_stats')
											.children('.badge_title_stats_content')
											.children('.badge_title_stats_drops')
											.find('.how_to_get_card_drops')
											.attr('href');

						console.log(appid);
					// }
				});
			}
			else {
				console.log("Response code: " + response.status);
			}
		}, (error) => console.log(err) );

