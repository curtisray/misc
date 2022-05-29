# encryption algorith

# caesar cipher that encypts a message for a given key

key = int(input('Enter the key (max 26): '))

alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

message = input('Type your message (letters only): ')
rawMessage = []

newMessage = []

# functions

def cipher(character):
    for i in range(0,26):
        if alphabet[i] == character and i + key < 26:
            newCharacter = alphabet[i + key]
            newMessage.append(newCharacter)
        if alphabet[i] == character and i + key > 25:
            newCharacter = alphabet[(i + key) - 26]
            newMessage.append(newCharacter)
        if alphabet[i] != character:
            pass
    return newMessage

# start of script
for character in message:
    rawMessage.append(character)

for character in rawMessage:
    cipher(character)

cipherText = ''.join(newMessage)
print(cipherText)