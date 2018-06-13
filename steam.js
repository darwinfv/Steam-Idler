
	const axios = require('axios');
	const cheerio = require('cheerio');

	axios.get("https://steamcommunity.com/profiles/76561198052935979/badges/?sort=p")
		.then((response) => {
			if(response.status === 200) {
				const html = response.data;
				const $ = cheerio.load(html);
				$('.badge_row').each(function(i, elem) {
					// var drops = $(this).find().children('.progress_info_bold').text();
					// var drops = $(this).find('.card_drop_info_header').text();
					let appid = $(this).find('.badge_row_overlay').attr('href');
					if(appid.includes("gamecards")) {
						console.log(appid);
					}
				});
			}
			else {
				console.log("Response code: " + response.status);
			}
		}, (error) => console.log(err) );

