function firstTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        result[i] = arr[i];
    }
    
    return result;
}

function secondTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
       
        for (let i = 0; i < data.length; i++) {
            if (typeof(data[i]) === 'string' ) {
                data[i] = data[i] + ' - done';
                
            } 
            else if(typeof(data[i]) === 'number'){
                data[i] = data[i] * 2;
                
            }
            
        }
        console.log(data);
    
    return data;
}

function thirdTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];
    for (let i = 0; i < data.length; i++) {
        result[i] = data[data.length - 1 - i];
    }

    return result;
}

const lines = 5;
let result = '';
for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += " ";
        }
        for (let j = 0; j < 2 * i + 1; j++) {
            result += "*";
            }
            result += "\n";
            }
console.log(result);