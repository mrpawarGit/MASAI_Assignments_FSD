/**
Q: 2
Problem Statement: A movie streaming service wants to analyze its watchlist.

Requirements:
const movies = [
  { title: "Drishyam", genre: "Thriller", rating: 8.5, watchTime: 140 },
  { title: "Lagaan", genre: "Drama", rating: 8.1, watchTime: 180 },
  { title: "Dangal", genre: "Sports", rating: 8.3, watchTime: 161 },
  { title: "Gully Boy", genre: "Musical", rating: 7.4, watchTime: 130 },
  { title: "Kabir Singh", genre: "Romance", rating: 6.9, watchTime: 150 }
];

Implement the following logic:
  -Map to convert watchTime from minutes to hours.
  -Filter movies with a rating above 7.5.
  -Reduce to find the total watch time of all highly-rated movies.
  -Map to extract only the title and watch time of the best movies.

Expected Output:
-List of highly-rated movies with watch time in hours.
-Total watch time of these movies.
 */

const movies = [
  { title: "Drishyam", genre: "Thriller", rating: 8.5, watchTime: 140 },
  { title: "Lagaan", genre: "Drama", rating: 8.1, watchTime: 180 },
  { title: "Dangal", genre: "Sports", rating: 8.3, watchTime: 161 },
  { title: "Gully Boy", genre: "Musical", rating: 7.4, watchTime: 130 },
  { title: "Kabir Singh", genre: "Romance", rating: 6.9, watchTime: 150 }
];

//1 -Map() to convert watchTime from minutes to hours.

const newMovies = movies.map((obj)=>{
  return{
    title:obj.title,
    genre:obj.genre,
    rating: obj.rating,
    watchTime: ((obj.watchTime)/60).toFixed(2)
  }
})

//2 -Filter movies with a rating above 7.5
const topRated = newMovies.filter(obj=>obj.rating>7.5);

//3 -Reduce to find the total watch time of all highly-rated movies.
const watchTime = topRated.reduce((total,obj)=>total + Number(obj.watchTime),0);

//4 -Map to extract only the title and watch time of the best movies.
const topMovies = topRated.map((obj)=>{
  return{
    name:obj.title,watchTime:obj.watchTime
  }
})

console.log("\nMovies with Runtime in Hr:",newMovies); //1
console.log("\nTop Rated Movies:",topRated); //2
console.log("\nTotal Watchtime:",watchTime,"Hr."); //3
console.log("\nTop Mivies:",topMovies); //4