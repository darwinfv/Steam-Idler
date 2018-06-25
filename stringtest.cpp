#include <iostream>
#include <string>
using namespace std;

inline string withSlash(string path) {
	cout<<path;
	if(path[path.length() - 1] == '\\')
		cout<<path;
	else
		return "blan";
}

int main() {
	string path = "something\\";
	
	path = path.substr(0, path.length() - 1);
	
	cout<<path;
		
		
}
