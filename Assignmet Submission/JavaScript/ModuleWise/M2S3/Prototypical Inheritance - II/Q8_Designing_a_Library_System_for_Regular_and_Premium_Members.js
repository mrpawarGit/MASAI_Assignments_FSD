/**
Q: 8
Title
Designing a Library System for Regular and Premium Members

Level
Medium

Time to solve the problem
90 mins

Overview
In this problem, you will design and implement a simple library system that manages books and library members. The system will distinguish between regular members and premium members, allowing premium members to borrow more books and access special collections. This problem will test your understanding of JavaScript constructor functions, prototypes, inheritance, and the use of call, apply, and bind.

Detailed Explanation
Topics
JavaScript Constructor Functions
Prototypes and Inheritance
Method Overriding
Function Context (call, apply, bind)
Setup Guidelines and Instructions
Use any JavaScript environment or IDE to implement the solution.
Create separate JavaScript files or use modules to organize your code for better readability.
Write comments to explain the logic and flow of your code.
Problem Statement
You are tasked with designing a simple library system for a small community library. The system should track books and the members who borrow them. The library should have two types of members: regular members and premium members. Premium members have additional privileges, such as borrowing more books and accessing special collections.

To implement this system, follow these steps:

Book Constructor: Create a constructor function for Book that takes the following parameters:

title: the title of the book
author: the author of the book
isAvailable: a boolean indicating if the book is available for borrowing (default is true)
Member Constructor: Create a constructor function for Member that takes the following parameters:

name: the name of the member
borrowedBooks: an array to store the titles of books borrowed by the member (default is an empty array)
Borrow Book Method: Add a method to the Member prototype to allow members to borrow a book. This method should:

Take a Book object as an argument.
Check if the book is available.
If the book is available, mark it as not available and add the book's title to the member's borrowedBooks array.
If the book is not available, log a message saying the book is already borrowed.
Ensure that a member can borrow no more than 3 books at a time.
Premium Member Constructor: Create a constructor function for PremiumMember that inherits from Member and takes the same parameters. Additionally, PremiumMember should have:

A specialCollectionAccess property set to true.
Override Borrow Book Method: Override the borrowBook method in PremiumMember to allow borrowing of special collection books. Use call or apply to reuse the Member borrowBook method as appropriate. Also, premium members can borrow up to 5 books at a time.

Demonstrate the Functionality:

Create several book objects.
Create a regular member and a premium member.
Show borrowing books and the difference in behavior between regular and premium members.
Use bind to create a bound function for borrowing books for a member.
 */