/**
Q: 7
Problem:
Title
Book Management System

Level
Easy

Time to solve the problem
40 mins

Overview
You are developing a simple application to manage and display information about a collection of books. This task involves implementing the system using JavaScript features including constructor functions, prototypes, module import/export, and array methods like map.

Detailed Explanation
Topics
Module Import/Export
JavaScript Constructor Functions
Prototypes
Array Methods (map)
Setup Guidelines and Instructions
Use any JavaScript environment or IDE to implement the solution.
Create separate JavaScript files for modules.
Write comments to explain the logic and flow of your code.
Problem Statement
Book Constructor:

Create a constructor function Book with the following properties:
title (string): the title of the book
author (string): the author of the book
year (number): the year the book was published
Book Prototype Method:

Add a method to Book.prototype called getSummary that returns a string: "[title] by [author], published in [year]".
books.js Module:

Create a module books.js that:
Defines and exports an array of Book instances representing a collection of books.
app.js Module:

Create another module app.js that:
Imports the array of Book instances from books.js.
Uses Array.prototype.map to create an array of book summaries by calling the getSummary method on each book.
Logs the array of book summaries to the console.
 */