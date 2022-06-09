const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
   let str = arr.join(' ').trim();
   if (arr.length === 0) {
       return "Семья пуста";
   } else {
       
       console.log(`Семья состоит из: ${str} `);
}
}
showFamily(family);

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach(function(item, i, arr) {
       console.log(`${i + 1} |  ${item.toLowerCase()}`);
    })
}
standardizeStrings(favoriteCities);