
def distinct(lst:list):
    tmp = []
    for x in lst:
        if not tmp.__contains__(x):
            tmp.append(x)
    return tmp

def rm_count(lst,distc):
    ln = []
    for x in distc:
        tmp = lst[:]
        tmp = list(filter(lambda a: a !=x, tmp))
        ln.append(tmp.__len__())
    return ln


def find_odd(lst):
    distc = distinct(lst)
    ln_lst = rm_count(lst,distc)
    ln = lst.__len__()
    for index, l in enumerate(ln_lst):
        if (ln - l) % 2 == 1:
            return distc[index]

def encode(word,x):
    if word.count(x) > 1:
        return ")"
    else :
        return "("

def duplicate_encode(word):
   capitalize = list(map(lambda x: x.capitalize(), word))
   return  "".join(list(map(lambda x: encode(capitalize, x), capitalize)))


def get_sum(a,b):
    res = 0
    if a > b:
        up = a
        down = b
    else:
        up = b
        down = a
    for a in range(down, up+1):
        res += a
    return res


def acc(index,l):
    return  l.capitalize() + "".join(list(map(lambda _: l.lower(), range(0, index)))) + "-"

def accum(s):
  return  "".join([acc(i,x) for i,x in enumerate(s)])[:-1]


def fib(i):
    if i == 0:
        return 0
    elif i==1:
        return 1
    else:
        return fib(i-1) + fib(i-2)



def predicate(l):
    if l[0] >= 55 and l[1] > 7:
        return "Senior"
    return "Open"
def openOrSenior(data):
    return [predicate(x) for x in data]

def odd_dict(lst):
    c= {}
    [(c.update({i:x})) if x%2==1 else () for i,x in enumerate(lst)]
    return c

#def sort_array(source_array):
