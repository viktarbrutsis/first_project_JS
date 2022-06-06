const usdCurr = 28;
const eurCurr = 32;

function convert(amount, curr) {
    console.log(curr * amount);
}
convert(500, usdCurr);
convert(500, eurCurr);

function test() {
    for (let i = 0; i < 5; i++) {
    console.log(i);
    if (i === 3) return i
    }
}
const res = test();
// console.log(res);

function sayHello(name) {
    console.log(`Привет ${name}`)
    
}
sayHello('Viktar');

function getMathResult(a, b) {
    let result = a;

    if ( b <=0 || (typeof(b) == 'string')) {
        console.log(a);
    }
    else if (a === b) {
        console.log(result);
    }
    else {
        for ( let i = 2; i <= b; i++) {
            result = result + '---' + a * i; 
            
        }
        console.log(result);
            
    }
    return
}
getMathResult(3, 3);
