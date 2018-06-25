#include <iostream>
#include <conio.h>
#include <string>
#include <fstream>
#include <dirent.h>
#include <windows.h>
#include <sys/stat.h>
using namespace std;

inline bool exists (const string name) {
  struct stat buffer;   
  return (stat (name.c_str(), &buffer) == 0); 
}

inline void write(int code) {
	ofstream i;
	i.open("info.txt");
	i<<code;
	i.close();
}

inline void print(string path) {
	ofstream i;
	i.open("test.txt");
	i<<path;
	i.close();
}

inline string withSlash(string path) {
	if(path[path.length() - 1] == '\\')
		return path;
	else
		return path + "\\";
}

inline string withoutSlash(string path) {
	
}

int main(int argc, char ** argv) {
	
	string app; // arg 1
	string exe = "hl2.exe"; // arg 3
	string path = "C:\\Program Files (x86)\\Steam\\steamapps\\common\\Team Fortress 2\\"; // arg 2
	
	if(argc == 1) {
		write(1);
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
	
	if(path[path.length() - 1] == '\\')
		path = path.substr(0, path.length() - 1);
	
	DIR *dir;
	struct dirent *ent;
	if ((dir = opendir (path.c_str())) != NULL) {
		closedir(dir);
	}
	else {
		write(2);
		exit(2); // incorrect path, directory doesn't exist
	}
	
	path = path + "\\";
	string steam = path + "steam_appid.txt";
	
	ifstream i;
	i.open(steam.c_str());
	if(!i) {
		write(3);
		exit(3); // steam_appid.txt not found
	}

	ofstream f;
	f.open(steam.c_str(), ios::trunc);
    
    f<<app;
    f<<" ";
    f.close();
    
    exe = path + exe;
    if(!exists(exe)) {
    	write(4);
    	exit(4); // executable not found
    }
    
    ShellExecute(NULL, "open", exe.c_str(), NULL, NULL, SW_SHOWDEFAULT);
    write(0);
    exit(0);
    	
}
