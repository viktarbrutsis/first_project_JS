const someString = 'This is some strange string';

function reverse(str) {
   let newStr = '';
   if (typeof(str) === 'string') {  
      for (let i = str.length - 1; i >= 0; i-- ) {
         newStr = newStr +  str.charAt(i);
      }
      console.log(newStr);
   } else return 'Ошибка!';
   
}

function reverse(str) {
   let newStr = str.split('').reverse();
   newStr = newStr.join('');
   console.log(newStr);
}
reverse(someString);

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
let allCurrincies = baseCurrencies.concat(additionalCurrencies);

function availableCurr(arr, missingCurr) {
   let str = 'Доступные валюты: \n';
   if (arr.length === 0) {
      return `Нет доступных валют`;
   } else {
      for (let i = 0; i < arr.length; i++) {
         if (arr[i] === missingCurr) {
            continue;
         }
         str += `${arr[i]}\n`;
      }
      console.log(str);

   }
}

availableCurr(allCurrincies);