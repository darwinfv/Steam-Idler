
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

        child = exec('.\\execute.sh ' + appid + ' \"' + path + '\" \"' + exe + '\"',
            function (error, stdout, stderr) {
                console.log('stdout: ' + stdout);
                console.log('stderr: ' + stderr);
                if (error !== null) {
                     console.log('exec error: ' + error);
                }
            });


    }

    function idleAll() {
        var path = document.getElementById("path").value;
        var exe = document.getElementById("exe").value;
        var appid = document.getElementById("appid").value;
        if(appid == "") {
            $('#alert').html("App ID is required");
            $('#alert').show();
            return;
        }

        var exec = require('child_process').exec, child;
        const fs = require('fs');

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
                });
            });
    }

