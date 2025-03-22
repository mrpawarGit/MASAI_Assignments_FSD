/*
Q: 13 
Title: Simulating a Loading Screen with setInterval

Problem Statement:
Create a JavaScript program that simulates a loading screen using setInterval. The program should:
  1.Start by logging "Loading..." every 1 second.
  2.After 5 seconds, stop the loading messages and log "Loaded successfully!".

Use setInterval to repeat the loading message and clearInterval to stop it after 5 seconds.
*/

const loading = setInterval(() => {
  console.log("Loading...")
}, 1000)

setTimeout(() => {
  clearInterval(loading)
  console.log("Loaded successfully!");
}, 5000)