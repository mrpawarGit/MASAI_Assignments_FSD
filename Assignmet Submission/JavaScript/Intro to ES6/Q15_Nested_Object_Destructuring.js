/**
Q: 15
Title:
L2 - Nested Object Destructuring for API Response with Optional Chaining

Problem Statement:
You are working with data fetched from an API, which returns a user object with nested properties. Use object destructuring along with optional chaining (make sure you read about it in MDN) to extract specific properties, including those nested inside other objects. The user data might sometimes have missing fields, so optional chaining will help safely handle such cases.

Steps:
Given a user object with the following structure:
const user = { id: 123, profile: { name: "John Doe", address: { city: "Los Angeles", zipcode: "90001" } } };

Use destructuring along with optional chaining to extract:
id from the user object.
name from the profile.
city and zipcode from the address.
If any of the properties are missing (e.g., no address object), return "Information not available" for the missing field.
Return a string in the following format: "User John Doe (ID: 123) lives in Los Angeles (ZIP: 90001)". If some data is missing, adjust the sentence accordingly, for example: "User John Doe (ID: 123) lives in Los Angeles (ZIP: Information not available)".
Example Input: const user = { id: 123, profile: { name: "John Doe", address: { city: "Los Angeles", zipcode: "90001" } } };

Example Output:

"User John Doe (ID: 123) lives in Los Angeles (ZIP: 90001)"

Example Input (missing fields):

const user = { id: 123, profile: { name: "John Doe" } };

Example Output (with missing fields):

"User John Doe (ID: 123) lives in Information not available (ZIP: Information not available)"

 */