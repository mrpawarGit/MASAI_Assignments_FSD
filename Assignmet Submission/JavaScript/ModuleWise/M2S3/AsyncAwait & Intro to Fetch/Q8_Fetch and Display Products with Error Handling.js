/**
Q: 8 Title: Fetch and Display Products with Error Handling

Problem Statement:
Create a product listing page that fetches data from the 
FakeStoreAPI (https://fakestoreapi.com/products) and displays the product details in a 
grid format. Each product should show its image, title, price, and a button 
labeled "View Details". If the API call fails (e.g., an incorrect URL is used), 
display a user-friendly error message.

Key Requirements:
    1. Fetch data from the API using the Fetch API and display the products in console dynamically.
    2. Implement error handling to display a message like "Failed to fetch products. 
       Please try again later" when the API call fails.
    3. Use a try-catch block to handle errors with async/await.
    4. Finally implement reduce method to calculate the sum of all the products price . 
       But make sure that you're using reduce method to do so , if not then the assignment 
       will be flagged as Not - Submitted
 */

// fetch('https://fakestoreapi.com/products')
// .then(response=>response.json())
// // .then(response=>response.forEach(element => {
// //    console.log(element.category)
// // }))
// .then(response=>console.log(response))

async function dispProducts(){
   

   try{
      let fetching = await fetch('https://fakestoreapi.com/products')

      if(!fetching.ok){
         throw new Error("Unable to Fetch");
      }

      let products = await fetching.json()
      //all products
      //console.log("All Products:",products)

      //all products details
      products.forEach((product)=>{
         console.log("Title:",product.title)
         console.log("Price:",product.price)
         console.log("Image:",product.image)
      })
      
      // total price of all products
      let category = products.reduce((acc,product)=>{
         acc[product.title] = (acc[product.title]||0) + product.price
         return acc
      },{})

      console.log(category)

      //sum of all prices
      let total = products.reduce((sum,product)=>{
         return sum += product.price
      },0)
      
      console.log("Total:",total.toFixed(2));
      
   }
   catch(error){
      //console.log("Failed to fetch products.Please try again later")
      console.error("Failed to fetch products.Please try again later")
   }

}

dispProducts();