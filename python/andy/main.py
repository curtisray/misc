# where output is the value per line
# loop through the values

# print the value of the letter plus the next letter for n number of times

# n = a number (1-10) that represents how many characters are in a line

# once you have printed n number of times, '\n'

output = ''
#for value in range(65, 91, 1):
for i in range(5):
    for j in range(i+1):
        print("* ", end="")
    print("\n")