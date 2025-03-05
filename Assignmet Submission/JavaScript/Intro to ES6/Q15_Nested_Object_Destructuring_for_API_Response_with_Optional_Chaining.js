/**
Q: 15
Title:
L2 - Nested_Object_Destructuring_for_API_Response_with_Optional_Chaining

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

const user = { 
  id: 123, 
  profile: { 
    name: "John Doe", 
    address: { 
      city: "Los Angeles", 
      zipcode: "90001" 
    } 
  } 
};

const user2 = { id: 123, profile: { name: "John Doe" } };

//destructuring
let {id,profile:{name="uname",address:{city,zipcode}}} = user;
console.log(`User ${name} (ID: ${id}) lives in ${city} (ZIP: ${zipcode})`);
console.log();  //for next line

//other way by setting default values
function objCall(obj){ 
let {id="Information not available",profile:{name,address:{city="Information not available",zipcode="Information not available"}="Information not available"}} = obj;
console.log(`User ${name} (ID: ${id}) lives in ${city} (ZIP: ${zipcode})`);
}

objCall(user2)
objCall(user)
console.log(); //for nextline

//By using optional channing

function byOptionalChanning(obj){
  let name = obj?.profile?.name || "Information not available";
  let id = obj?.id || "Information not available";
  let city = obj?.profile?.address?.city || "Information not available";
  let zipcode = obj?.profile?.address?.zipcode || "Information not available";
  
  console.log(`User ${name} (ID: ${id}) lives in ${city} (ZIP: ${zipcode})`);
}

byOptionalChanning(user)
byOptionalChanning(user2)

