# my first ever bot!

# 5:44 PM, 25 January 2022

import responses as resp
import keywords as key
import random
import time

# generate bot names

posBotName = ['Grisha', 'Levi', 'Frasier', 'Mallory', 'Holly', 'Lauren']
chosBotName = random.randrange(0, len(posBotName))
bnSimple = posBotName[chosBotName]
bn = bnSimple + ': '

# start of script

# introduction
intro = input('Bot: Would you like and introduction?\n' + 'You: ')

if intro == 'yes' or intro == 'y':
    print(bn + 'My name is ' + bnSimple + '! I am a chatbot developed by Curtis Maloney!') #Кертис
    time.sleep(2)
    yourName = input(bn + 'What is your name?\n' + 'You: ')
    time.sleep(1)
    print(bn + ' Nice to meet you ' + yourName + '!')
    time.sleep(1)
else: 
    bn = 'Bot: '


# filter alphanumeric from response
response = input(bn + 'Ask me anything ...\n' + 'You: ')
time.sleep(1)

charFilter = [' ', '.', ',', ';', ':', '!', '?', '@', '#']

cleanResp = response.lower()

for character in cleanResp:
    if character.isalnum() == False:
        cleanResp = cleanResp.replace(character, ' ')

# print(cleanResp)

# split cleaned response into a list

cleanList = cleanResp.split()

# print(cleanList)


# check if list contains keyword

isKnown = []

for string in cleanList:
    if string in key.known:
        isKnown.append(True)
    else:
        isKnown.append(False)
# print(isKnown)

# return the percent of known words in the list

numTrue = 0

for bool in isKnown:
    if bool == True:
        numTrue = numTrue + 1


accuracy = numTrue/len(isKnown)

percentAcc = ('(' + str(accuracy * 100) + '%' + ')')
# select a response from a list of responses based on identified keywords

for string in cleanList:
    if string in resp.posInput:
        resp.findOutput(string)
