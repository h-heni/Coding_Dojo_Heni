x = [ [5,2,3], [10,8,9] ] 
students = [
    {'first_name':  'Michael', 'last_name' : 'Jordan'},
    {'first_name' : 'John', 'last_name' : 'Rosales'}
]
sports_directory = {
    'basketball' : ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer' : ['Messi', 'Ronaldo', 'Rooney']
}
z = [ {'x': 10, 'y': 20} ]

# # Update Values in Dictionaries and Lists
# # 1
x[1][0]=15
print (x)
# # 2
students[0]['last_name']='Bryant'
print(students)
# # 3
sports_directory['soccer'][0]='Andres'
print(sports_directory)
# # 4
z[0]["y"]=30
print(z)

# Iterate Through a List of Dictionaries
students = [
        {'first_name':  'Michael', 'last_name' : 'Jordan'},
        {'first_name' : 'John', 'last_name' : 'Rosales'},
        {'first_name' : 'Mark', 'last_name' : 'Guillen'},
        {'first_name' : 'KB', 'last_name' : 'Tonel'}
    ]
# should output: (it's okay if each key-value pair ends up on 2 separate lines;
# bonus to get them to appear exactly as below!)
# first_name - Michael, last_name - Jordan
# first_name - John, last_name - Rosales
# first_name - Mark, last_name - Guillen
# first_name - KB, last_name - Tonel
def iterateDictionary(students):
    for i in range(len(students)):
        out=''
        for ky,vale in students[i].items() :
            # print(f'first_name - {students[i]["first_name"]}, last_name - {students[i]["last_name"]}')
            out+=f'{ky} - {vale} ,'
        print(out)


iterateDictionary(students) 
# 3/Get Values From a List of Dictionaries
def iterateDictionary2(key_name,some_list):
    for i in range(len(some_list)):
        print(some_list[i][key_name])
iterateDictionary2("first_name",students)

# 4 Iterate Through a Dictionary with List Values
dojo = {
    'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
    'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
}
# output:
# 7 LOCATIONS
# San Jose
# Seattle
# Dallas
# Chicago
# Tulsa
# DC
# Burbank
    
# 8 INSTRUCTORS
# Michael
# Amy
# Eduardo
# Josh
# Graham
# Patrick
# Minh
# Devon
def printInfo(some_dict):
    print(len(some_dict["locations"]),'LOCATIONS')
    for i in range(len(some_dict['locations'])):
        print (some_dict["locations"][i])


    print(len(some_dict["instructors"]),'INSTRUCTORS')
    for i in range(len(some_dict['instructors'])):
        print (some_dict["instructors"][i])




printInfo (dojo)