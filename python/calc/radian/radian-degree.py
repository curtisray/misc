import time

# convert between radians and degrees

type = input('Are you converting from radians (r) or degrees (d): ')
time.sleep(.5)

decimal = int(input('How many decimal places for your answer: '))

for character in type:
    # convert radians
    if character == 'r':
        print('Converting from Radians...')
        time.sleep(.5)
        print('-----------------')
        print("Use 'p' to denote pi.\nUse '/' to denote division.")
        print('-----------------')
        time.sleep(.5)
        value = input('Enter a value in Radians: ')
        time.sleep(.5)
        value = value.lower()

        hasDiv = False
        hasPi = False
        hasBoth = False
        hasNone = False

        hasPi0 = False
        hasPi1 = False

        for character in value:
            if character == '/':
                hasDiv = True
            if character == 'p':
                hasPi = True
        
        if hasDiv == True and hasPi == True:
            hasBoth = True
            hasDiv = False
            hasPi = False

        if hasDiv == False and hasPi == False and hasBoth == False:
            hasNone = True

        if hasDiv == True: 
            value = value.split('/')
            value = float(value[0])/float(value[1])

        if hasPi == True:
            value = value.replace('p', '')
            value = value.replace('i', '')
            value = float(value) * 3.14159265
    
        if hasBoth == True:
            value = value.split('/')
            
            for character in value[0]:
                if character == 'p':
                    hasPi0 = True

            for character in value[1]:
                if character == 'p':
                    hasPi1 = True
            
            if hasPi0 == True: 
                value[0] = value[0].replace('p', '')
                value[0] = value[0].replace('i', '')
                value[0] = float(value[0])
                value[0] = value[0] * 3.14159265

            if hasPi1 == True:
                value[1] = value[1].replace('p', '')
                value[1] = value[1].replace('i', '')
                value[1] = value[1] = float(value[1])
                value[1] = value[1] * 3.14159265

            # now divide 
            value = float(value[0])/float(value[1])
        
        degrees = float(value)*57.2957795    

        # round the number to the desired decimal
        if decimal == 0:
            degrees = int(degrees)
        else:
            degrees = round(degrees, decimal)

        print(str(degrees) + ' degrees')

        quit()
    
    # convert degrees
    if character == 'd':
        print('Converting from Degrees...')
        time.sleep(.5)
        value = float(input('Enter a value in Degrees: '))
        value = value * 0.01745329 # number of radians in a degree
        time.sleep(.5)

        # round the number to the desired decimal
        if decimal == 0:
            value = int(value)
        else:
            value = round(value, decimal)

        print(str(value) + ' rad')

        quit()