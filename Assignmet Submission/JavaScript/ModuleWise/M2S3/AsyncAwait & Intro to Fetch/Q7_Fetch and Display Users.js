/*
Q: 7 Title: Fetch and Display Users

Problem Statement:
Create a webpage that fetches a list of users from the 
JSONPlaceholder API (https://jsonplaceholder.typicode.com/users) and displays their names 
in console.

Key Requirements:
    1. Fetch the user data
    2. Display the names in console.
*/

fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(res => {
    res.forEach(user => console.log(user.name));
  })
  .catch(error => console.error(error));
  //.catch(error => console.log(error));
