/**
Q: 13 Title: L1 - Grouping_and_Summing_with_reduce()

Problem Statement:
You are given an array of strings representing product categories. Your task is to use reduce() to create an object that counts the occurrences of each category in the array.

Steps:

Use reduce() to group the categories and count how many times each category appears.
Return the resulting object.
Example:

Input: ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"]

Output: { electronics: 2, clothing: 2, toys: 3 }

Extra Challenge: After creating the object, use Object.entries() and sort() to sort the categories by their counts in descending order and return an array of sorted categories.
 */

const products = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];

//app1
const freq = {};
const freqUsingReducer = products.reduce((acc,cur)=>{
  let key = freq[cur];
  if(key){
    freq[cur] += 1; 
  }
  else{
    freq[cur] = 1; 
  }
  return freq[cur];
},0) 

console.log(freq);


//app2
const freqCount = products.reduce((acc,cur)=>{
  acc[cur] = (acc[cur] || 0) + 1;
  return acc
},{});

console.log(freqCount)

//Extra Challenge

//console.log(Object.entries(freq))

const sortedPro = Object.entries(freq).sort((a,b)=>{return b[1]-a[1]});

//printing sorted array of descending order
console.log(sortedPro);