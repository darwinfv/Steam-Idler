
    // Enable tooltips
    $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip(); 
    });

    function idleSingle() {
        var path = document.getElementById("path").value;
        var exe = document.getElementById("exe").value;
        var appid = document.getElementById("appid").value;
        if(appid == "") {
            $('#alert').html("App ID is required");
            $('#alert').show();
            return;
        }

        if(path.endsWith("\\"))
            path = path.substring(0, path.length - 1);
        run(appid, path, exe);

        var exec = require('child_process').exec, child;

        // child = exec('.\\execute.sh ' + appid + ' \"' + path + '\" \"' + exe + '\"',
        //     function (error, stdout, stderr) {
        //         console.log('stdout: ' + stdout);
        //         console.log('stderr: ' + stderr);
        //         if (error !== null) {
        //              console.log('exec error: ' + error);
        //         }
        //     });

    }

    let games = [];
    let c = -1;

    function idleAll() {
        var path = document.getElementById("path").value;
        var exe = document.getElementById("exe").value;

        if(path.endsWith("\\"))
            path = path.substring(0, path.length - 1);

        var exec = require('child_process').exec, child;
        const fs = require('fs');
        const cheerio = require('cheerio');

        child = exec('.\\checkFile.exe',
            function (error, stdout, stderr) {
                console.log('stdout: ' + stdout);
                console.log('stderr: ' + stderr);
                if (error !== null) {
                     console.log('exec error: ' + error);
                }
                fs.readFile('.\\info.txt', 'utf8', function (err, data) {
                    if(err) throw err;
                    if(data == 1) {
                        $('#alert').html("File missing: 'badges.html'");
                        $('#alert').show();
                        return;
                    }
                    if(data == 0) {
                        fs.readFile('.\\badges.html', 'utf8', function (err, data) {
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
                            next(path, exe);
                        });
                    }
                });
            });
    }

    function next() {
        c++;






        $('#alert').html("Idling " + games[c][1]);
        $('#alert').show();
    }

    function run(appid, path, exe) {

        var exec = require('child_process').exec, child;
        const fs = require('fs');

        if(path == "" || path == null || path == undefined) {
            child = exec('.\\idle.exe ' + appid,
                function (error, stdout, stderr) {
                    // console.log('stdout: ' + stdout);
                    // console.log('stderr: ' + stderr);
                    if (error !== null) {
                         console.log('exec error: ' + error);
                    }
                    printAlert(appid);
                });
        }
        else if(exe == "" || exe == null || exe == undefined) {
            child = exec('.\\idle.exe ' + appid + ' \"' + path + '\"',
                function (error, stdout, stderr) {
                    // console.log('stdout: ' + stdout);
                    // console.log('stderr: ' + stderr);
                    if (error !== null) {
                         console.log('exec error: ' + error);
                    }
                    printAlert(appid);
                });
        }
        else {
            child = exec('.\\idle.exe ' + appid + ' \"' + path + '\" ' + exe,
                function (error, stdout, stderr) {
                    // console.log('stdout: ' + stdout);
                    // console.log('stderr: ' + stderr);
                    if (error !== null) {
                         console.log('exec error: ' + error);
                    }
                    printAlert(appid);
                });
        }

    }

    function printAlert(appid) {
        const fs = require('fs');
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
                $('#alert').html("Executable not found in given directory");
                $('#alert').show();
            }
            else if(data == 0) {
                $('#alert').html("Idling app " + appid + " successfully");
                $('#alert').show();
            }
        });
    }

    // CEnemy.prototype.Walk = function(){this.Die(true);};

    // https://steamcommunity.com/tradeoffer/new/?partner=92670251&token=K316vcVz