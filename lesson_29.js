"use strict";

let numberOfFilms;

function start() {
   numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

   while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
      numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
   }
}

start();

let personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
   
};

function rememberMyFilms() {
   for (let i = 0; i < 2; i++) {
      let lastFilm_1 = prompt('Один из последних просмотренных фильмов?', ''),
          critic_1 = prompt('На сколько оцените его?', '');
   
      if (lastFilm_1 != null && critic_1 != null && lastFilm_1 != '' && critic_1 != '' && lastFilm_1.length < 50 && critic_1.length < 50) {
         personalMovieDB.movies[lastFilm_1] = critic_1;
      } else {
         console.log('error');
         i--;
      }  
   
   }
}

rememberMyFilms();

function detectPersonalLevel () {
   if (personalMovieDB.count < 10) {
      console.log("Просмотрено слишком мало фильмов!!!");
   } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
      console.log("Достойный результат!!!");
   } else if (personalMovieDB.count >= 30) {
      console.log("Вы киноман!!!");
   } else {
      console.log("Прозошла ошибка");
   }
}

detectPersonalLevel();

function showMyDB(info) {
   if (info == false) {
      console.log(personalMovieDB);
   }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
   for (let i = 0; i < 3; i++) {
      personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`);
   }
   console.log(personalMovieDB.genres);
}

writeYourGenres();


