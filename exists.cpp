#include <iostream>
#include <sys/stat.h>
#include <string>
using namespace std;

inline bool exists (const string name) {
  struct stat buffer;   
  return (stat (name.c_str(), &buffer) == 0); 
}

int main() {
	
	cout<<exists("execute.sh");
	cout<<exists("exec.sh");
	
}
