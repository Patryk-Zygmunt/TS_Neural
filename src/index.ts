import {func, Nueron} from "./neuron";
import {Matrix} from "mathjs";
import math = require("mathjs");


var training_in=[[0, 0,1], [1,1,1], [1,0,1],[0,1,1]];
var training_out=[[0,1,1,0]];

var neuron = new Nueron(training_in,training_out)
neuron.train(10000)
console.log(neuron.calc([0, 0,1]));
















