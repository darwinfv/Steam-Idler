
	var exec = require('child_process').exec, child;
	const fs = require('fs');

	var path = "C:\\Program Files (x86)\\Steam\\steamapp\\common\\Team Fortress 2\\";
	var exe = "hl2.exe";
	var appid = 65930;

	if(path == "" || path == null || path == undefined) {
            child = exec('.\\idle.exe ' + appid,
                function (error, stdout, stderr) {
                    console.log('stdout: ' + stdout);
                    console.log('stderr: ' + stderr);
                    if (error !== null) {
                         console.log('exec error: ' + error);
                    }
                });
        }
        else if(exe == "" || exe == null || exe == undefined) {
            child = exec('.\\idle.exe ' + appid + ' ' + path,
                function (error, stdout, stderr) {
                    console.log('stdout: ' + stdout);
                    console.log('stderr: ' + stderr);
                    if (error !== null) {
                         console.log('exec error: ' + error);
                    }
                });
        }
        else {
            child = exec('.\\idle.exe ' + appid + ' \"' + path + '\" ' + exe,
                function (error, stdout, stderr) {
                    console.log('stdout: ' + stdout);
                    console.log('stderr: ' + stderr);
                    if (error !== null) {
                         console.log('exec error: ' + error);
                    }
                });
        }

        fs.readFile('.\\info.txt', 'utf8', function (err, data) {
            if(err) throw err;
            if(data == 1) {
                $('#alert').html("ERROR: Exit Code 1");
                $('#alert').show();
            }
            else if(data == 2) {
                $('#alert').html("Incorrect path; Directory does not exist");
                $('#alert').show();
            }
            else if(data == 3) {
                $('#alert').html("File \'steam_appid.txt\' not found in given directory");
                $('#alert').show();
            }
            else if(data == 4) {
                $('#alert').html("File \'" + exe + "\'not found in given directory");
                $('#alert').show();
            }
            else if(data == 0) {
                $('#alert').html("Idling app " + appid + " successfully");
                $('#alert').show();
            }
        });
