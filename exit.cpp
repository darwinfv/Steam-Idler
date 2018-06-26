#include <iostream>
#include <fstream>
#include <string>
#include <windows.h>
using namespace std;

int main(int argc, char ** argv) {
	
	if(argc > 1) {
		string exe = argv[1];
		exe = "taskkill /F /T /IM " + exe + " < tasks.txt";
		system(exe.c_str());
	}
	else
		system("taskkill /F /T /IM hl2.exe < tasks.txt");
	
//	system("tasklist > tasks.txt");
//	ifstream f;
//	f.open("tasks.txt");
	
}
