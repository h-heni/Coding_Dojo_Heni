# Basic
for i in range(151):
    print(i)
# Multiples of five
for i in range(5,1001):
    if i%5==0:
        print(i)
# counting
for i in range(1,101):
    if i%10==0:
        print('Coding Dojo')
    elif i%5==0:
        print('Coding')
    else:
        print(i)
# whoa
sum=0
for i in range(1,500000,2):
    sum+=i
print(sum)
# Countdown
for i in range(2018,0,-4):
    print(i)
# flexible
low_num=2
high_num=9
mult=3
for i in range(low_num,high_num+1):
    if i%mult==0:
        print(i)