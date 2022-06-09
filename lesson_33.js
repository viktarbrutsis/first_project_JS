//const arr = [2, 4, 7, 12, 56, 40];

//arr.forEach(function(item, i, arr) {
//   console.log(`${i}: ${item} внутри массива ${arr}`);
//});

//for (let value of arr) {
//   console.log(value);
//}

//const str = prompt('', '');
//const products = str.split(",");
//console.log(products);

//const names = ['Ivan', 'Daria', 'Olga', 'Vic', 'Natasha'];
//console.log(names.join('; '));

//const names = ['Ivan', 'Daria', 'Olga', 'Vic', 'Natasha'];
//const newNames = names.sort();
//console.log(newNames);

const arr = [34, 943, 6, 2, 4, 7, 12, 56, 40];
arr.sort(compareNum);
console.log(arr);

function compareNum (a, b) {
   return a - b;
}

//const arr = [2, 4, 7, 12, 56, 40];

//arr.forEach(function(item, i, arr) {
//   console.log(`${i}: ${item} внутри массива ${arr}`);
//});

//for (let value of arr) {
//   console.log(value);
//}

//const str = prompt('', '');
//const products = str.split(",");
//console.log(products);

//const names = ['Ivan', 'Daria', 'Olga', 'Vic', 'Natasha'];
//console.log(names.join('; '));

//const names = ['Ivan', 'Daria', 'Olga', 'Vic', 'Natasha'];
//const newNames = names.sort();
//console.log(newNames);

const arrNew = [34, 943, 6, 2, 4, 7, 12, 56, 40];
arr.sort(compareNum);
console.log(arrNew);

function compareNum (a, b) {
   return a - b;
}
