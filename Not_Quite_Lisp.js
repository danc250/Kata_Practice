int main(int argc, char* argv[])

/* ARGC represents number of things entered into command line when running the program on a terminal. ARGV is an array that holds the string values of the  when running the program */

{
	if (argc < 2)
	{
		fprintf(stderr, "Must provide input filename: \n");
		return -1;

		/* If ARGC2 input is less than 2, we'll print standard error and return from main with non-zero code */
	}

}

/* This reads the file into memory */
char *input;
int fileSize = ____________
if (fileSize < 0)
{
	fprintf(stderr, "File read failed: \n", strerror(errno));
	return -1;
	/* If the file size is less than 0, we'll print standard error message to stderr and return a non-zero */
}

printf("Day 1: \n");