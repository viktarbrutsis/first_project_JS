//for (let i = 0; i < 3; i++) {
//   console.log(i);
//   for (let j = 0; j < 3; j++) {
//      console.log(j);
//   }
//}

//*
//**
//***
//****
//*****
//******

//

//let str = '';
//for (let i = 1; i <= 6; i++) {
//   str += '*';
//   console.log(str);
//}

//let result = "";
//let length = 7;

//for (let i = 1; i < length; i++) {
//   for (let j = 0; j < i; j++) {
//      result += "*";
//   }
//   result += "\n";
//}

//console.log(result);

first: for (let i = 1; i < 3; i++) {
   console.log(`First level: ${i}`);
      for (let j = 0; j < 3; j++) {
         console.log(`Second level: ${j}`);
         for (let k = 0; k < 3; k++) {
            if (k ===2) continue first; // продолжаем с метки, цикл дальше не идет
            console.log(`Third level: ${k}`);
         }
      }
   }

   first: for (let i = 1; i < 3; i++) {
      console.log(`First level: ${i}`);
         for (let j = 0; j < 3; j++) {
            console.log(`Second level: ${j}`);
            for (let k = 0; k < 3; k++) {
               if (k ===2) break first; // вообще останавливает цикл
               console.log(`Third level: ${k}`);
            }
         }
      }