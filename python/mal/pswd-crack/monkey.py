# script designed to generate random strings until it matches with an input

import random
import time

stdin = input("Input the string you would like me to find (not case sensetive, alphabet only): ").lower()

start = time.time()

# first, generate a string the same length as the input
def genStr(stdin):
   length = len(stdin)

   alphabet = list("abcdefghijklmnopqrstuvwxyz ") # characters that the function can use including space

   newStr = []

   for char in stdin:
       newStr.append(random.choice(alphabet))

   stdout = "".join(newStr)
   print(stdout)
   return stdout


count = 0
# now generate a new string until it matches stdin
while True:
    count += 1
    if genStr(stdin) == stdin: 
        print("Match Found!")
        break
end = time.time()
print("Time Elapsed: " + str(end - start) + " seconds")
print("It took " + str(count) + " attempts!")
