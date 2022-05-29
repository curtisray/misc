# start of script

import keyword as key

posInput = ['hello', 'goodbye', '69']

posOutput = ['Hello There!', "Au Revoir!", 'Nice.']

output = 'Unfortuantely I cannot answer that!'

def findOutput(string):
    if string in posInput[0]:
        output = posOutput[0]
        print(output)
    if string in posInput[1]:
        output = posOutput[1]
        print(output)
    if string in posInput[2]:
        output = posOutput[2]
        print(output)