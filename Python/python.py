# l=[1,2,3.14,"Hi",True]
# l.append("Hello")
# print(l)

# s=set()
# s.add(1)
# s.add(1)
# print(s)

# d={1:'A',2:'B',3:'C'}
# print(d)
# print(d.values())
# print(d.keys())
# for i,j in d.items():
#     print(i,j)


A=[1,0,2,3,1,2,4,5,2,3]
new_a=[0,0,0,0,0,0]
for i in A:
    new_a[i]+=1
print(new_a)    

S=set(A)
for i in S:
    print(i,A.count(i))

freq={}
for i in A:
    if i in freq:
        freq[i]+=1
    else:
        freq[i]=1
print(freq)  

from collections import Counter
freq=Counter(A)
print(freq)

l=[1,2,3]
from itertools import permutations
p=list(permutations(l))
print(p)

from itertools import combinations
# c=combinations(l,4)
# print(list(c))
for i in range(1,4):
    for j in combinations(l,i):
      print(j)

def function1(name):
   print("Hi",name)
function1("Hemamalini")    

class Class1():
    def __init__(self,i):
      self.i=i
    def function1(self):
        print(self.i)  
    def function2(self,j):
        print(j)   
obj=Class1(3)
obj.function1()         
obj.function2("Hello")


d={"name":"Hemamalini",
   "age":19,
   "Salary":200000}
import json
res=json.dumps(d)
print(res)

print(type(res))
with open("Users.json","r")as file:
    data=json.load(file)
print(data)
print(type(data)) 