import math = require("mathjs");
import {Matrix} from "mathjs";


export class Nueron{
    private _weights : Matrix = math.matrix([[func.random()],[func.random()],[func.random()]]);
   private  input: Matrix;
   private output: Matrix;

    constructor( input: number[][], output: number[][]) {
        this.input = math.matrix(input);
        this.output = math.transpose(math.matrix(output)) as Matrix;
    }


    get weights(): math.Matrix {
        return this._weights;
    }

    calc = (new_in:number[])=>func.sigmoid((math.multiply(math.matrix(new_in), this._weights)._data[0]));

    train(iter:number):void{
        for (let i = 0; i < iter; i++) {
            var out = func.sig(math.multiply(this.input, this._weights) as number[])
            var er:Matrix = math.subtract(this.output,out) as Matrix
            var d = func.sig_d(out as number[]);
            var er_sig = math.dotMultiply(er, d)
            var adjustments = math.multiply(math.transpose(this.input), er_sig)
            this._weights = math.add(this._weights, adjustments) as Matrix;
        }
    }

    newData = (input: number[][],output: number[][])=> {
        this.input = math.matrix(input)
        this.output = math.transpose(math.matrix(output)) as Matrix;
    };

    toString():string{
       return `${ this._weights} ${this.output}`
    }
}

export class func {

    static random = ():number => 2 * Math.random() - 1

    static sig = (arr:number[])=>arr.map(x=>func.sigmoid(x))
    static sig_d = (arr:number[])=>arr.map(x=>func.sigmoid_der(x))

    static  sigmoid=(x:number)=>1 / (1 + math.exp(-x))
    private static  sigmoid_der=(x:number)=>x* (1-x)

}


