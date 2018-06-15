
	const cheerio = require('cheerio');
	const fs = require('fs');

	let games = [];

	fs.readFile('./badge_index.html', 'utf8', function (err, data) {
		if(err) throw err;
		const $ = cheerio.load(data);
		var n = 0;
		$('.badge_title_stats_drops').each(function(i, elem) {
			let drops = $(this).find('.progress_info_bold').text();
			drops = drops.substring(0, 1);
			if(drops != "" && drops != undefined && drops != null && drops != "N") {
				let info = $(this).find('a').attr('href');
				let name = info.substring(30, info.indexOf("\"", 31));
				let appid = info.substring(info.lastIndexOf("_", info.length - 9) + 1, info.length - 8);
				games[n] = [];
				games[n][0] = drops;
				games[n][1] = name;
				games[n][2] = appid;
				n++;
			}
		});
		console.log(games);
	});
