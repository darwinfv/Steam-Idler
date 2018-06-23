#!/bin/bash
path="potato"
#"C:\\Program Files (x86)\\Steam\\steamapp\\common\\Team Fortress 2\\";
exe=""
#"hl2.exe";
appid=65930



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
