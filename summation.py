# Write a program that finds the summation of every number from 1 to num. 
# The number will always be a positive integer greater than 0.
# Example
# summation(2) -> 3
# 1 + 2

# summation(8) -> 36
# 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

# My solution
def summation(num):
    num = num + 1
    array = [number for number in range(num)]
    return sum(array)

# One liner
def summation(num):
    return sum(xrange(num + 1))