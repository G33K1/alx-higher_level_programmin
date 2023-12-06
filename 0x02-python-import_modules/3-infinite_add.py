#!/usr/bin/python3
import sys
if __name__ == "__main__":
    argument = sys.argv[1:]
    total = 0
    for i in argument:
        int_arg = int(i)
        total += int_arg
    print("{}".format(total))
