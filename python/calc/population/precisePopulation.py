# calculate the number of years it will take to reach a certain population

startPop = float(input('What is the starting population: '))

endPop = float(input('What is the ending population: '))

if startPop > endPop:
    print('The population is increasing, this is not possible.')
    quit()

decimalPlace = float(input('How many decimal places would you like in your answer: '))

precision = float(1/pow(10, decimalPlace))
years = 0
currentPop = startPop

while currentPop < endPop:
    rateOfChange = currentPop/3 - currentPop/4
    currentPop += rateOfChange * precision
    years += precision

population = round(currentPop, int(decimalPlace))
time = round(years, int(decimalPlace))

if currentPop > endPop or currentPop == endPop:
    print('This will take ' + str(time) + ' years, and the population will be ' + str(population) + ' people!')

# Enfin!