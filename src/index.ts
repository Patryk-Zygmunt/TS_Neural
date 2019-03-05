import {func, Nueron} from "./neuron";
import {Matrix} from "mathjs";
import math = require("mathjs");

var weight : Matrix = math.matrix([func.random(),func.random(),func.random()]);
var training_in:Matrix = math.matrix([[0, 0,1], [1,1,1], [1,0,1]]);
var training_out: Matrix = math.transpose(math.matrix([0,1,1])) as Matrix;
//console.log(weight)//console.log(training_in)
//console.log (func.sig(math.multiply(training_in,weight) as number[]))
//for (let i = 0; i <1000 ; i++) {
    var out = func.sig(math.multiply(training_in, weight) as number[])
console.log(out);console.log(training_out)
    var er = math.subtract(training_out, math.transpose(out))
console.log(er)
 var d = func.sig_d(out as number[]);
    var er_sig = math.multiply(er, func.sig_d(out as number[]))
    var adjustments = math.multiply(math.transpose(training_in), er_sig)
    weight = math.add(weight, adjustments) as Matrix;
//}

console.log(weight)















