import math = require("mathjs");


export class Nueron{
    weights : number[]=[];
    input: number[]=[];
    output: number[]=[];

    constructor( input: number[], output: number[]) {
        this.input = input;
        this.output = output;
    }


    static  init():Nueron{
        return new Nueron([],[])
    }



    toString():string{
       return `${ this.weights} ${this.output}`
    }
}

export class func {

    static random = ():number => 2 * Math.random() - 1

    static sig = (arr:number[])=>arr.map(x=>func.sigmoid(x))
    static sig_d = (arr:number[])=>arr.map(x=>func.sigmoid_der(x))

    private static  sigmoid=(x:number)=>1 / (1 + math.exp(-x))
    private static  sigmoid_der=(x:number)=>x* (1-x)

}


