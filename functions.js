
    // Enable tooltips
    $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip(); 
    });

    function idleSingle() {
        var path = document.getElementById("path").value;
        var exe = document.getElementById("exe").value;
        var appid = document.getElementById("appid").value;
        if(appid == "") {
            ;
            return;
        }
        console.log(appid);
        
        // var oShell = new ActiveXObject("Shell.Application");
        // var commandtoRun = "C:\\Windows\\notepad.exe"; 
        // oShell.ShellExecute(commandtoRun,"","","open","1");




    }
