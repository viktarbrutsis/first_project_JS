function calculateVolumeAndArea(num) {
   if (isNaN(num) || num <= 0 || !Number.isInteger(num)) {
       console.log('Произошла ошибка')
   } else {
       console.log (`Объем куба: ${num * num * num}, площадь всей поверхности: ${num * num * 6}`);
   }
}
calculateVolumeAndArea(5.2);

function calculateVolumeAndArea(num) {
   let str = '';
   if (typeof(num) === 'string' || num <= 0 || !Number.isInteger(num)) {
       return 'При вычислении произошла ошибка';
     
   } else {
       str = `Объем куба: ${num * num * num}, площадь всей поверхности: ${num * num * 6}`; 
       return str;
   }
 
}
calculateVolumeAndArea(10);

function getCoupeNumber(num) {
   if ( typeof(num) !== 'number' || num < 0 || !Number.isInteger(num))  {
       return 'Ошибка. Проверьте правильность введенного номера места'
   } else if (num === 0 || num > 36) {
       return 'Таких мест в вагоне не существует'
   } else {
       return Math.ceil(num/4);
   }
}

function getTimeFromMinutes(num) {
   let hour;
   let minute;
   let str;
   if (typeof(num) !== 'number' || !Number.isInteger(num) || num < 0) {
       str = 'Ошибка, проверьте данные';
       return str
   } else {
       minute = num % 60;
       hour = Math.floor(num / 60);
       if (hour == 1) {
           str = `Это ${hour} час и ${minute} минут`
           return str;
       } else if (hour == 2 || hour == 3 || hour == 4) {
           str = `Это ${hour} часа и ${minute} минут`
           return str
       } else {
           str = `Это ${hour} часов и ${minute} минут`
           return str
       }   
   }
}

function findMaxNumber(a, b ,c, d) {
   if (typeof(a) !== 'number' ||
       typeof(b) !== 'number' ||
       typeof(c) !== 'number' ||
       typeof(d) !== 'number') {
       return 0;
   } else {
       console.log(Math.max(a, b ,c, d));
   }
}

findMaxNumber(1, 5, 6.6, 10.5, 10, 35, 47);

function fib(num) {
   let arr = [0, 1];
   let i = 2;
   let str = '0 1';
   if (typeof(num) !== 'number' || !Number.isInteger(num) || num == 0) {
      return '';
   } else if (num == 1) {
      console.log(str);
   } 
   else if (num == 2) {
      console.log(arr);
   } 
   else  
   do {
               arr[i] =  arr[i - 1] + arr[i - 2];
               str = str + ' ' + arr[i];
               i++;
            }
            while (num > arr.length);
            console.log(str);    
   }

fib(7);

function fib(num) {
   let arr = [0, 1];
   let i = 2;
   let str = '0 1';
   if (typeof(num) !== 'number' || !Number.isInteger(num) || num == 0) {
      return '';
   } else if (num == 1) {
      return '0';
   } 
   else if (num == 2) {
      return str;
   } 
   else  
   do {
               arr[i] =  arr[i - 1] + arr[i - 2];
               str = str + ' ' + arr[i];
               i++;
            }
            while (num > arr.length);
            return str;    
   }

fib(7);