# automates the flipping of a coin

# imports

import time
import random

# end of imports

# introduction
x = input('Skip intro? (y/n): ')

if x == 'y':
    pass
else:
    print('Welcome to the coin flipping bot!')

    time.sleep(1.5)

    print('Here you can simulate the flipping of a coin!')

    time.sleep(1)

# end of introduction

# inputs
flips = int(input('How many times should I flip the coin: '))

visible = input('Would you like to see every flip? (y/n): ')

# end of inputs

# functions

def flip():
    posFace = ['heads', 'tails']
    face = posFace[random.randrange(0,2)]
    return face

# end of functions

# script

toFlip = flips
counter = 0
heads = 0
tails = 0

playing = False
    # flip the coin
while toFlip > 0:
    toFlip -= 1
    face = flip()
    counter += 1
    # adjust the score
    if face == 'heads':
        heads += 1
    if face == 'tails':
        tails += 1
    # adjust visibility
    if visible == 'y':
        print(face)
    if visible == 'n':
        if playing == True:
            continue
        else:
            playing = True
            print('Flipping the coin...')
            if flips > 10000:
                time.sleep(3)
                print('I only have one coin, this could take a bit...')
                time.sleep(3)

            
    # get the score
score = str(heads) + ':' + str(tails)

    # output the results
print('Done!')
time.sleep(.5)
print(score)
time.sleep(.5)
print('You flipped the coin ' + str(counter) + ' times! There were ' + str(heads) + ' heads and ' + str(tails) + ' tails!')

# end of script