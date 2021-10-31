import {
    makeMinimumChange,
    makeBiggestNumber,
    makeNumber1,
    inputs
} from "./greedy";

console.log("coin change", makeMinimumChange(1240));
console.log("Biggest number", makeBiggestNumber([6, 5, 6, 4, 5, 6], 7, 3));
inputs.forEach(([n, k]) => console.log("make number 1", makeNumber1(n, k)));
