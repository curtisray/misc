# rock paper scissors game in the console

import time
import random

# welcome prompt
print('Welcome to Rock Paper Scissors! Good Luck!')
time.sleep(.25)
input("Press 'Enter' to continue... Press 'q' to quit... ")

# function generates a response (comp) for the computer
def genResp():
    posResp = ['Rock!', 'Paper!', 'Scissors!']
    comp = posResp[random.randrange(0,3)]
    return comp

# function determines winner
def getWin():
    for comp in genResp():
        while comp == 'rock':
            if resp == 'r' or 'rock':
                ties += 1
                print('Tie!')
            if resp == 'p' or 'paper':
                player += 1
                print('You win.')
            if resp == 's' or 'paper':
                computer += 1
                print('I win!')
player = 0
computer = 0
ties = 0
gamesPlayed = 0

playing = True

while playing == True:
    resp = input("Rock(r), Paper(p), Scissors(s): ")
    if resp == 'q':
        print('Thanks for playing!')
        playing = False
    else:
        comp = genResp()
        print(comp)
        getWin()
        time.sleep(.25)
        print(str(player) + ':' + str(computer))
        gamesPlayed += 1
        time.sleep(.5)

if player > computer:
    winner = 'Player'
    print(winner + ' WINS!')
if player < computer:
    winner = 'Computer'
    print(winner + ' WINS!')
if player == computer:
    print('ITS A TIE!')

time.sleep(.5)

print('We played ' + str(gamesPlayed) + ' games! The score was ' + str(player) + ':' + str(computer))

player = 0
computer = 0    
