// add two given values
// if the values are the same, return the square

#include <stdio.h>

int main()
{
	int input_one;
	int input_two;
	int sum;

	//obtain input one
	printf("Enter value 1: ");
	scanf("%i", &input_one);
	//obtain input two
	printf("Enter value 2: ");
	scanf("%i", &input_two);

	//logic
	if (input_one == input_two)
	{
		sum = (input_one * input_one);
		printf("The square is [%i]", sum);
	}
	else
	{
		sum = (input_one + input_two);
		printf("The sum is [%i]", sum);
	}
}
