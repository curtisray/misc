# logarithm functions


# to do...
  # function to find log_10(input)
  # function to find log_n(input)

usrin = float(input('log(x), x = ?:'))

precision = int(input('Decimal places for answer?:'))

answered = False
# find the log_10 of input
def log10(usrin, precision):
  while answered == False:
    i = 0
    tmpout = pow(10,i)
    if tmpout > usrin:
      i -= 1
    if tmpout < usrin:
      i +- 1
