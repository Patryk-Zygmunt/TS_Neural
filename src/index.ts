import {func, Nueron} from "./neuron";
import {Matrix} from "mathjs";
import math = require("mathjs");

var weight : Matrix = math.matrix([[func.random()],[func.random()],[func.random()]]);
var training_in:Matrix = math.matrix([[0, 0,1], [1,1,1], [1,0,1],[0,1,1]]);
var training_out: Matrix = math.transpose(math.matrix([[0,1,1,0]])) as Matrix;
//console.log (func.sig(math.multiply(training_in,weight) as number[]))
//for (let i = 0; i <10000 ; i++) {
    var out = func.sig(math.multiply(training_in, weight) as number[])  //MNOŻENIE MACIERZY
    var er:Matrix = math.subtract(training_out,out) as Matrix
     var d = func.sig_d(out as number[]);
    var er_sig = math.dotMultiply(er, d)
    var adjustments = math.multiply(math.transpose(training_in), er_sig)
    weight = math.add(weight, adjustments) as Matrix;
//}
console.log(weight.toString())
console.log(math.dot(weight,math.transpose(math.matrix([[0],[1],[0]]))
))















