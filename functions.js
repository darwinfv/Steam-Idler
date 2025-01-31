
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

        var exec = require('child_process').exec, child;

        child = exec('.\\exit.exe ' + exe,
            function (error, stdout, stderr) {
                console.log('stdout: ' + stdout);
                console.log('stderr: ' + stderr);
                if (error !== null) {
                     console.log('exec error: ' + error);
                }
                if(path.endsWith("\\"))
                    path = path.substring(0, path.length - 1);
                run(appid, path, exe);
            });
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

    var timer;

    function next(path, exe) {
        c++;
        clearTimeout(timer);
        var path = document.getElementById("path").value;
        var exe = document.getElementById("exe").value;

        var exec = require('child_process').exec, child;

        child = exec('.\\exit.exe ' + exe,
            function (error, stdout, stderr) {
                console.log('stdout: ' + stdout);
                console.log('stderr: ' + stderr);
                if (error !== null) {
                     console.log('exec error: ' + error);
                }
                run(games[c][2], path, exe, games[c][1]);
            });

        timer = setTimeout('next(path, exe)', 1000 * 60 * 60 * 2);
    }

    function run(appid, path, exe, game = null) {

        var exec = require('child_process').exec, child;
        const fs = require('fs');

        if(path == "" || path == null || path == undefined) {
            child = exec('.\\idle.exe ' + appid,
                function (error, stdout, stderr) {
                    console.log('stdout: ' + stdout);
                    console.log('stderr: ' + stderr);
                    if (error !== null) {
                         console.log('exec error: ' + error);
                    }
                    if(game == null)
                        printAlert(appid);
                    else
                        printAlert(game);
                });
        }
        else if(exe == "" || exe == null || exe == undefined) {
            child = exec('.\\idle.exe ' + appid + ' \"' + path + '\"',
                function (error, stdout, stderr) {
                    console.log('stdout: ' + stdout);
                    console.log('stderr: ' + stderr);
                    if (error !== null) {
                         console.log('exec error: ' + error);
                    }
                    if(game == null)
                        printAlert(appid);
                    else
                        printAlert(game);
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
                    if(game == null)
                        printAlert(appid);
                    else
                        printAlert(game);
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
                if(isNaN(appid))
                    $('#alert').html("Idling " + games[c][1]);
                else
                    $('#alert').html("Idling app " + appid + " successfully");
                $('#alert').show();
            }
        });
    }

    function reIdle() {

        var path = document.getElementById("path").value;
        var exe = document.getElementById("exe").value;

        if(path.endsWith("\\"))
            path = path.substring(0, path.length - 1);
        if(path == "" || path == null || path == undefined)
            path = "C:\\Program Files (x86)\\Steam\\steamapps\\common\\Team Fortress 2";
        if(exe == null || exe == "" || exe == undefined)
            exe = "hl2.exe";

        var exec = require('child_process').exec, child;

        child = exec('.\\exit.exe ' + exe,
            function (error, stdout, stderr) {
                console.log('stdout: ' + stdout);
                console.log('stderr: ' + stderr);
                if (error !== null) {
                     console.log('exec error: ' + error);
                }
                child = exec('\"' + path + '\\' + exe + '\"',
                    function (error, stdout, stderr) {
                        console.log('stdout: ' + stdout);
                        console.log('stderr: ' + stderr);
                        if (error !== null) {
                            console.log('exec error: ' + error);
                        }
                    });
            });

    }

    function reload() {
        clearTimeout(timer);
        var exe = document.getElementById("exe").value;

        var exec = require('child_process').exec, child;

        child = exec('.\\exit.exe ' + exe,
            function (error, stdout, stderr) {
                console.log('stdout: ' + stdout);
                console.log('stderr: ' + stderr);
                if (error !== null) {
                     console.log('exec error: ' + error);
                }
            });

        $('#alert').html("Not Idling. Ready to Idle.");
        $('#alert').show();
    }
