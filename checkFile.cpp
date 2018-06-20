#include <iostream>
#include <fstream>
using namespace std;

int main() {
	
	ifstream f;
	f.open("badges.html");
	ofstream i;
	i.open("info.txt");
	if(!f) {
		i<<1;
		i.close();
		f.close();
		exit(1);
	}
	else {
		i<<0;
		i.close();
		f.close();
		exit(0);
	}
	
}
