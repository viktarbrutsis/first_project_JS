"use strict";


let personalMovieDB = {
   count: 0,
   movies: {},
   actors: {},
   genres: [],
   privat: false,
   start: function() {
      personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
   
      while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
         personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
      }
   },
   rememberMyFilms: function() {
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
   },
   detectPersonalLevel: function() {
      if (personalMovieDB.count < 10) {
               console.log("Просмотрено слишком мало фильмов!!!");
            } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
               console.log("Достойный результат!!!");
            } else if (personalMovieDB.count >= 30) {
               console.log("Вы киноман!!!");
            } else {
               console.log("Прозошла ошибка");
            }
   },
   showMyDB: function(hidden) {
      if (hidden == false) {
         console.log(personalMovieDB);
      }
   },
   toggleVisibleMyDB: function() {
      if (personalMovieDB.privat) {
         personalMovieDB.privat = false;
      } else {
         personalMovieDB.privat = true;
      }
   },
   writeYourGenres: function() {
      for (let i = 1; i < 4; i++) {
         let genre = prompt(`Ваш любимый жанр под номером ${i}`);
         if (genre === '' || genre == null) {
            console.log('Вы ввели некорректные данные');
            i--;
         } else {
               personalMovieDB.genres[i - 1] = genre;
            }

            // Альтернативный вариант из урока
            
            // let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();

            // if (genres === '' || genres == null) {
            //     console.log('Вы ввели некорректные данные или не ввели их вовсе');
            //     i--;
            // } else {
            //     personalMovieDB.genres = genres.split(', ');
            //     personalMovieDB.genres.sort();
            // } 
            
         }
         personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}` )
         })
   }
   
}

