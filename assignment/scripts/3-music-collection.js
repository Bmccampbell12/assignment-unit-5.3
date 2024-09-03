console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

let myCollection = [];

function addToCollection(collection, title, artist, yearPublished) {
  const newMusic = {
    title: title,
    artist: artist,
    yearPublished: yearPublished

   };

  collection.push(newMusic);

  return newMusic;
};

addToCollection(myCollection, 'First Class', 'Rainbow Kitten Surprise', 2024);
addToCollection(myCollection, 'Jungle', 'Tash Sultana', 2022);
addToCollection(myCollection, 'Be Yourself', 'Wilder Woods', 2020);
addToCollection(myCollection, 'Too sweet', 'Hozier', 2023);
addToCollection(myCollection, 'Devil like me', 'Rainow Kitten Surprise', 2024);
addToCollection(myCollection, 'Dragonfly', 'Dana and Alden', 2023);

console.log(myCollection);

showCollection(myCollection);



function showCollection(collection) {

  for (let i = 0; i < collection.length; i++) {

    const album = collection[i];

    console.log(`${album.title} by ${album.artist} plublished in ${album.yearPublished}`) 
   }
}

function findByArtist(collection, artist) {

  const matchingAlbums = [];

  for (let i = 0; i < collection.length; i++){

    const album = collection[i];

    if (album.artist === artist);

    matchingAlbums.push(album);
  
  return matchingAlbums;

  }
  
}










// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
