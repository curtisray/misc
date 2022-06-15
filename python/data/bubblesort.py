# bubble sort script

#TODO
# generate a list of random numbers
# print the list to user
# bubble sort the list
    # for every item in the list, check if the item before it is larger
        # if the item before is larger, add the item before followed by the new item to the sorted list
        # if not, continue to the next item

import random
import sys

# generate list to sort number between 0 and 500

list_length = int(input("Enter the length of the list: "))
list_max = int(input("Enter the maximum integer value: "))

# quickstop (for safety)
if list_max < 1:
    print("Value to low, terminating script...")
    sys.exit()

random_list = []

for i in range(list_length):
    random_list.append(random.randrange(list_max + 1))

print(random_list)
print("Sorting...")

ordered_list = []
list_sorted = False

while list_sorted == False:
    for item in range(list_length):
        if random_list[item-1] > random_list[item]:
            ordered_list = ordered_list[0:-1]
            if item != 0:
                ordered_list.append(random_list[item-1])
            ordered_list.append(random_list[item])
        else:
            ordered_list.append(random_list[item])
print(ordered_list)
