#!/bin/bash
touch info.txt
if [ $# -eq 0 ]; then
	exit 1
elif [ $# -eq 1 ]; then
	echo "1 arg" > info.txt
	./idle.exe $1
elif [ $# -eq 2 ]; then
	echo "2 args" > info.txt
	./idle.exe $1 $2
elif [ $# -eq 3 ]; then
	echo "3 args" > info.txt
	./idle.exe $1 $2 $3
fi
echo $? >> info.txt

#backslash