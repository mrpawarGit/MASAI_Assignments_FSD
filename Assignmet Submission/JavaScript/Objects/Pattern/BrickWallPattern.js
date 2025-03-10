/**
Title: Brick Wall Pattern

Level: Level 1 - Easy

Time to Solve the Problem: 15 Mins

Problem Description

Write a program to print a brick wall pattern of height H and width W. Each brick is represented by the symbol "[]" and each row of bricks is offset to create the typical brick wall pattern.

Input Format:

The first line contains the height H of the brick wall. The second line contains the width W of the brick wall (how many bricks in a row). Constraints:

1 <= H <= 20 1 <= W <= 20

Output Format:

Print the brick wall pattern with the specified height and width.

Sample Input: 4 5

Sample Output:

        [] [] [] [] []
          [] [] [] [] []
        [] [] [] [] []
          [] [] [] [] []

 */
function printBrickWall(row,col){

let bag = "";
          for(let i=1;i<=row;i++){
            for(let j=1;j<=col;j++){
              if(i%2!=0){
                bag += "[]  ";
              }
              else{
                bag += "  []";
              }
            }
            bag +="\n";
          }

          console.log(bag);
        }

printBrickWall(4,5);
//printBrickWall(6,7);