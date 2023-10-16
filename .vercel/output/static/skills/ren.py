#!/usr/bin/env python3

from sys import argv
from os import rename
from re import sub

for f in argv[1:]:
    new_name = sub(r"plain|original|-", '', f)
    rename(f, new_name)
