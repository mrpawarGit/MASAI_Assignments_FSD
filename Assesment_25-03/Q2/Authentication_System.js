/**
Problem 2: Multi-User Authentication System (Closures & Abstraction)
You need to build a multi-user authentication system where:

Users can sign up with createUser(username, password).
Users can log in using user.login(password).
Users can change their password with user.changePassword(oldPassword, newPassword).
Users cannot access the password directly.
Input Example:

const user1 = createUser("alice_01", "AlicePass!");
const user2 = createUser("bob_42", "BobSecure123");

console.log(user1.login("wrongPass")); // ❌ "Incorrect password!"
console.log(user1.login("AlicePass!")); // ✅ "Welcome, alice_01!"

user1.changePassword("AlicePass!", "NewAlicePass!");
console.log(user1.login("AlicePass!")); // ❌ "Incorrect password!"
console.log(user1.login("NewAlicePass!")); // ✅ "Welcome, alice_01!"

console.log(user2.login("BobSecure123")); // ✅ "Welcome, bob_42!"

Constraints:

Multiple users must be supported.
Passwords should remain private.

 */

function createUser(username,password){
  let pass = password;
  
    let user = {
      login : function(password)
      {
        if(password===pass){
        return `Welcome, ${username}!`;
        }
        else{
        return "Incorrect password!";
        }
      },
      changePassword : function(oldPassword,newPassword){
        if(oldPassword===pass){
          pass=newPassword;
        }
        else{
          console.log("Incorrect old Password");
        }
      }
  }

  return user;
 
}

const user1 = createUser("alice_01", "AlicePass!");
const user2 = createUser("bob_42", "BobSecure123");

console.log(user1.login("AlicePass!"));
console.log(user2.login("BobSecure123"));

user1.changePassword("AlicePass!", "NewAlicePass!");
console.log(user1.login("AlicePass!"));
console.log(user1.login("NewAlicePass!"));


