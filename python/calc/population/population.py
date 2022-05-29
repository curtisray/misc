# calculate the number of years it will take to reach a certain population

startPop = int(input('What is the starting population: '))

endPop = int(input('What is the ending population: '))

#while startPop != int(any) or endPop != int(any):
#    startPop = int(input('Please input a number for starting population: '))
#    endPop = int(input('Please input a number for ending population: '))

years = 0
currentPop = startPop

while currentPop < endPop:
    rateOfChange = currentPop/3 - currentPop/4
    currentPop += rateOfChange
    years += 1

print('Calculating')

if currentPop > endPop or currentPop == endPop:
    print('This will take ' + str(years) + ' years, and the population will be ' + str(round(currentPop)) + ' people!')

# Enfin!