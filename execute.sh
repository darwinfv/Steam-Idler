#!/bin/bash
if [ $# -eq 1 ]; then
	./idle.exe $1
elif [ $# -eq 2 ]; then
	./idle.exe $1 $2
elif [ $# -eq 3 ]; then
	./idle.exe $1 $2 $3
fi
echo $?
