#include <iostream>
#include <conio.h>
#include <string>
#include <fstream>
#include <dirent.h>
#include <windows.h>
using namespace std;

int main(int argc, char ** argv) {
	
	string app; // arg 1
	string exe = "hl2.exe"; // arg 3
	string path = "C:\\Program Files (x86)\\Steam\\steamapps\\common\\The Lab\\"; // arg 2
	
	if(argc == 1) {
		exit(1); // lack of arguments
	}	
	if(argc > 1) {
		app = argv[1];
	}
	if(argc > 2) {
		path = argv[2];
	}
	if(argc > 3) {
		exe = argv[3];
	}
	
	DIR *dir;
	struct dirent *ent;
	if ((dir = opendir (path.c_str())) != NULL) {
		closedir(dir);
	}
	else {
		exit(2); // incorrect path, directory doesn't exist
	}
	
	string steam = path + "steam_appid.txt";

	ofstream f;
	f.open(steam.c_str(), ios::trunc);
	if (!f) {
        exit(3); // steam_appid.txt not found
    }
    
    f<<app;
    f<<" ";
    f.close();
    
    exe = path + exe;
    ShellExecute(NULL, "open", exe.c_str(), NULL, NULL, SW_SHOWDEFAULT);
    exit(0);
    	
}
