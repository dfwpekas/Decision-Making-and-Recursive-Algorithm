function powerFunction(x, power) {
    if (power === 0) {
        return 1;
    }
    if (power < 0) {
        return "Not accepted! Put in a number above 0.";
    }
    return x * Math.pow(x, power-1);

    

};

let x = 5;
let power = 2;

console.log(`${x} raised to the power of ${power} = ${powerFunction(x, power)}.`)
