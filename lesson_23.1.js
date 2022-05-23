// Место для первой задачи
function firstTask() {
   for (let i = 5; i <= 10; i++) {
       console.log(i);
   }
}

// Место для второй задачи
function secondTask() {
   for (let j = 20; j >= 10; j--) {
       console.log(j);
       if (j ===13) break;
   }
}

// Место для третьей задачи
function thirdTask() {
   for (let h = 2; h <=10; h++) {
       if ( h % 2 === 0) {
           console.log(h);
   
       }
   }
   
}

// Место для четвертой задачи

// Цикл, который нужно переписать:

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

function fourthTask() {
  let i = 2;
  while (i <= 16) {
      if (i % 2 === 0) {
          console.log(i);
          }
          i++;
          }
  }




function fifthTask() {
   const arrayOfNumbers = [];
   for (let i = 5; i < 11; i++) {
       arrayOfNumbers[i - 5] = i;
   }

  
   return arrayOfNumbers;
}