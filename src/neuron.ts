export class Nueron{
    weights : number[]=[];
    input: number[]=[];
    output:number;

    constructor(weights: number[], input: number[], output: number) {
        this.weights = weights;
        this.input = input;
        this.output = output;
    }


    toString():string{
       return `${ this.weights} ${this.output}`
    }
}

export var t=2;