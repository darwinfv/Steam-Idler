
	var exec = require('child_process').exec, child;
	const fs = require('fs');

	var path = "potato";//"C:\\Program Files (x86)\\Steam\\steamapp\\common\\Team Fortress 2\\";
	var exe = "";//"hl2.exe";
	var appid = 65930;

	if(path == "" || path == null || path == undefined) {
        child = exec('.\\idle.exe ' + appid,
            function (error, stdout, stderr) {
                if (error !== null) {
                     console.log(error);
                }
                fs.readFile('.\\info.txt', 'utf8', function (err, data) {
		            if(err) throw err;
					console.log(data);
		        });
            });
    }
    else if(exe == "" || exe == null || exe == undefined) {
        child = exec('.\\idle.exe ' + appid + ' ' + path,
            function (error, stdout, stderr) {
                if (error !== null) {
                     console.log('exec error: ' + error);
                }
                fs.readFile('.\\info.txt', 'utf8', function (err, data) {
		            if(err) throw err;
					console.log(data);
		        });
            });
    }
    else {
        child = exec('.\\idle.exe ' + appid + ' \"' + path + '\" ' + exe,
            function (error, stdout, stderr) {
                if (error !== null) {
                     console.log('exec error: ' + error);
                }
                fs.readFile('.\\info.txt', 'utf8', function (err, data) {
		            if(err) throw err;
					console.log(data);
		        });
            });
    }