#!/bin/bash

if [ $# -gt 1 ]; then
	line=$( tasklist | grep $2 | cut -d' ' -f2 )
else
	line=$( tasklist | grep  hl2.exe | cut -d' ' -f2 )
fi

echo $line
