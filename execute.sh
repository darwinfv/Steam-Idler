#!/bin/bash
if [ $# -eq 1 ]; then
	echo "1 arg"
	./idle.exe $1
elif [ $# -eq 2 ]; then
	echo $2
	# ./idle.exe $1 $2
elif [ $# -eq 3 ]; then
	echo "3 arg"
	./idle.exe $1 $2 $3
fi
echo $?
