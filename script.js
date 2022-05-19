//"use strict";

let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

let personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
   
};


let lastFim_1 = prompt('Один из последних просмотренных фильмов?', '');
let critic_1 = prompt('На сколько оцените его?', '');
let lastFim_2 = prompt('Один из последних просмотренных фильмов?', '');
let critic_2 = prompt('На сколько оцените его?', '');

personalMovieDB.movies[lastFim_1] = critic_1;
personalMovieDB.movies[lastFim_2] = critic_2;

console.log(personalMovieDB);