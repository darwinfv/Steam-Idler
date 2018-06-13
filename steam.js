
	const axios = require('axios');
	const cheerio = require('cheerio');

	axios.get("https://steamcommunity.com/profiles/76561198052935979/badges/")
		.then((response) => {
			if(response.status === 200) {
				const html = response.data;
				const $ = cheerio.load(html);
				console.log("Perforemd request");
				$('.badge_row_overlay').each(function(i, elem) {
					// conosle.log("In loop");
					// var drops = $(this).find().children('.progress_info_bold').text();
					// var drops = $(this).find('.card_drop_info_header').text();
					let drops = $(this).attr('href');
					console.log("!" + drops + "!");
					// return;
				});
			}
			// else {
				// console.log("Response code: " + response.status);
			// }
		}, (error) => console.log(err) );

