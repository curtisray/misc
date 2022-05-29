# sorts a list of values in a specified order

from posixpath import split


list = []

initInput = input('Enter a list of values (seperate with alphanumeric):\n')

print(input)

# cleans the input and splits it into a list of strings

for character in initInput: 
    if character.isalnum() == False:
        cleanInput = initInput.replace(character, ' ')
        list = cleanInput.split(' ')

print(list)

# determin the prefered sorting method

sortMethod = input('What is the preferred sorting method (alphabetical/numerical): ')

sortDirection = input('Would you like to invert the sorting (yes/no): ')

# alphabetical sorting
x = int(0)

for string in list:
    
    if len(list) > x:
        firstLetter = character[x][0]
        x += 1
    print(firstLetter)

# numerical sorting
