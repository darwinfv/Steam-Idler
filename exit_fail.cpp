#include <iostream>
#include <fstream>
#include <string>
#include <windows.h>
#include <memory>
#include <stdexcept>
#include <string>
#include <array>
using namespace std;

std::string exec(const char* cmd) {
    array<char, 128> buffer;
    string result;
    shared_ptr<FILE> pipe(_popen(cmd, "r"), pclose);
    if(!pipe)
		throw runtime_error("popen() failed!");
    while (!feof(pipe.get())) {
        if (fgets(buffer.data(), 128, pipe.get()) != nullptr)
            result += buffer.data();
    }
    _pclose();
    return result;
}

int main(int argc, char ** argv) {
	
	if(argc > 1) {
		string exe = argv[1];
		exe = "taskkill /F /T /IM " + exe;
		system(exe.c_str());
	}
	else
		system("taskkill /F /T /IM bash.exe");
	
	system("tasklist > tasks.txt");
	ifstream f;
	f.open("tasks.txt");
	
	
}
