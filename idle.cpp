#include <iostream>
#include <conio.h>
#include <string>
#include <fstream>
#include <dirent.h>
using namespace std;

const string path = "C:\\Program Files (x86)\\Steam\\";

int main() {
	
	int app;
	const string abs = "steamapps\\common\\Team Fortress 2\\";
	const string folder = path + abs;
	
	DIR *dir;
	struct dirent *ent;
	if ((dir = opendir (folder.c_str())) != NULL) {
		cout<<"Enter App ID: ";
	}
	else {
	  cout<<"ERROR: Incorrect path specified";
	  getch();
	  exit();
	}
	
	cin>>app;
	
	
	
	getch();
	
}
