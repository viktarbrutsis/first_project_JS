"use strict";

let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

let personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
   
};

//for (let i = 0; i < 2; i++) {
//   let lastFilm_1 = prompt('Один из последних просмотренных фильмов?', ''),
//       critic_1 = prompt('На сколько оцените его?', '');

//   if (lastFilm_1 != null && critic_1 != null && lastFilm_1 != '' && critic_1 != '' && lastFilm_1.length < 50 && critic_1.length < 50) {
//      personalMovieDB.movies[lastFilm_1] = critic_1;
//   } else {
//      console.log('error');
//      i--;
//   }  

//}
let i = 0;
do {
   let lastFilm_1 = prompt('Один из последних просмотренных фильмов?', '');
       critic_1 = prompt('На сколько оцените его?', '');
       if (lastFilm_1 != null && critic_1 != null && lastFilm_1 != '' && critic_1 != '' && lastFilm_1.length < 50 && critic_1.length < 50) {
               personalMovieDB.movies[lastFilm_1] = critic_1;

       
            } else {
               console.log('error');
               i--;
            }

      i++;
} while (i < 2)

if (personalMovieDB.count < 10) {
   console.log("Просмотрено слишком мало фильмов!!!");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
   console.log("Достойный результат!!!");
} else if (personalMovieDB.count >= 30) {
   console.log("Вы киноман!!!");
} else {
   console.log("Прозошла ошибка");
}

console.log(personalMovieDB);

//do {
   //   let lastFim_1 = prompt('Один из последних просмотренных фильмов?', '');
   //   if (lastFim_1 == '' || lastFim_1 == null || lastFim_1.length > 50) {
   //         alert('Вы ввели неверный ответ, попробуйте еще раз');
   //         lastFim_1 = prompt('Один из последних просмотренных фильмов?', '');
   //   } else {
   //      critic_1 = prompt('На сколько оцените его?', '');
   //      if (critic_1  == '' || critic_1 == null || critic_1.length > 50) {
   //      alert('Вы ввели неверный ответ, попробуйте еще раз');
   //      critic_1 = prompt('На сколько оцените его?', '');
   //   }
   //   personalMovieDB.movies[lastFim_1] = critic_1;
   //}

   //i++;

   //}
   //while (i < 2);