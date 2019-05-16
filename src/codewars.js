function bus(arr){
   return arr.reduce((p1,p2)=>(p1 + (p2[0] - p2[1])),0)
}

const oddOrEven = (arr)=>arr.reduce((a,b)=>a+b) % 2 ? "even" : "odd"

const array_diff = (a,b) => a.filter(x=>b.includes(x))

function isPrime(x){
    x = Math.abs(x)
    const lemmat = new Map([[0 , false] ,[1 ,false] , [2 ,true]])
    if(lemmat.has(x)) return lemmat.get(x)
    const div =  [...Array(parseInt(x/2))].fill().map((e,i)=>i+2);
    return  div.every(d=>x % d != 0)
}

function fizzBuzz(){
    str= ""
    for (i=1 ;i<=100;i++ ){
        s=""
       if(i % 3 === 0) s="Fizz"
       if(i % 5 === 0) s+="Buzz"
      str+=( s ? s : i) + ","
    }
    console.log(str)
}

var fizzBuzzCustom = function(stringOne="Fizz", stringTwo="Buzz", numOne=3, numTwo=5) {
    const tmp =  [...Array(100)].fill().map((e,i)=>i+1);
    return tmp.map(x=>{
        n = x
        if (n % numOne === 0) x=stringOne
        if (n % numTwo === 0) x = typeof x == 'number' ?stringTwo: x + stringTwo
        return x
    })
};
