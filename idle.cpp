#include <iostream>
#include <conio.h>
#include <string>
#include <fstream>
#include <dirent.h>
#include <windows.h>
using namespace std;

const string path = "C:\\Program Files (x86)\\Steam\\";

//void startup (LPCTSTR lpApplicationName) {
//	STARTUPINFO si;
//	PROCESS_INFORMATION pi;
//	
//	ZeroMemory( &si, sizeof(si) );
//	si.cb = sizeof(si);
//	ZeroMemory( &pi, sizeof(pi) );
//	
//	CreateProcess( lpApplicationName, "idle", NULL, NULL, FALSE, 0, NULL, NULL, &si, &pi );
//	
//	CloseHandle( pi.hProcess );
//    CloseHandle( pi.hThread );
//}

int main(int argc, char ** argv) {
	
	int app;
	string abs = "steamapps\\common\\Team Fortress 2\\";
	abs = path + abs;
	
	DIR *dir;
	struct dirent *ent;
	if ((dir = opendir (abs.c_str())) != NULL) {
		closedir(dir);
		cout<<"Enter App ID: ";
	}
	else {
	  cout<<"ERROR: Incorrect path specified";
	  getch();
	  exit(1);
	}
	
	cin>>app;
	string steam = abs + "steam_appid.txt";

	ofstream f;
	f.open(steam.c_str(), ios::trunc);
	if (!f) {
        cout<<"ERROR: Unable to open file";
        getch();
        exit(1);
    }
    
    f<<app;
    f<<" ";
    f.close();
    
    string exe = abs + "hl2.exe";
    ShellExecute(NULL, "open", exe.c_str(), NULL, NULL, SW_SHOWDEFAULT);
	
	getch();
	
}
