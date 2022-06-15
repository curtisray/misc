// print the area of a circle

#include <stdio.h>

int main()
{
	// declar input and output variables
	int radius;
	double area;
	
	// get user input
	printf("Radius Length: ");
	scanf("%i", &radius);
	printf("Computing for [ %i ] as the given radius.\n", radius);

	// calculate the area
	area = 3.1415926535 * (radius * radius);

	// print the output
	printf("The area is %f!\n", area);
	return 0;
}
