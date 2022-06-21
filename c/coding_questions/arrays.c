// file containing multiple functions regarding arrays
// functions are designed for coding questions on the internet
// https://www.w3resource.com/c-programming-exercises/basic-algo/index.php ~q.34++

#include <stdio.h>

int main()
{
	int arrayLength;
	printf("Enter a length for the generated array: ");
	scanf("%i", &arraylength);
	//generate an array to be used
	genArray(arrayLength);
	printf("%i\n", ranArray);
	return 0;
}

genArray(arrayLength)
{
	extern array ranArray[arrayLength+1];
	//generate an array of given length
	for (a=0; a<arrayLength; a++)
	{
		int ranNum = rand();
		strcat(gendArray, ranNum);
	}
	return 0;
}
