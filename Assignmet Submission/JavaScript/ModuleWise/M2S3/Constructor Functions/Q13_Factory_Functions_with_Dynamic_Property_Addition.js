/*
Q: 13
Title:
L1 - Factory Functions with Dynamic Property Addition

Problem Statement:
Create a factory function createInventoryItem to represent items in an inventory system. Each item should have properties like name, category, and price. Add a method describeItem() that outputs the item's details. Extend this functionality by creating another factory function addItemDiscount, which accepts an inventoryItem object, a discountPercent, and adds a discountedPrice property based on the discount. Finally, create a method applyDiscount() in addItemDiscount that recalculates and outputs the discounted price.

Steps:

-Define createInventoryItem to take name, category, and price.
-Add a method describeItem() to createInventoryItem to print the item's details.
-Define addItemDiscount, which accepts an inventoryItem object and discountPercent.
-Calculate discountedPrice based on the original price and discountPercent.
-Add a method applyDiscount() to addItemDiscount that logs the discountedPrice for the item.

Example:
const item = createInventoryItem("Laptop", "Electronics", 1500);
item.describeItem();
// Output: Item: Laptop, Category: Electronics, Price: 1500

const discountedItem = addItemDiscount(item, 10);
discountedItem.applyDiscount();
//Output: Discounted Price for Laptop: 1350
*/

function createInventoryItem(name, category, price){
    let inventory = {};
    inventory.name = name
    inventory.category = category
    inventory.price = price
    inventory.describeItem =function(){
      console.log(`Item: ${this.name}, Category: ${this.category}, Price: ${this.price}`)
    }

    return inventory;
}

function addItemDiscount(inventoryItem, discountPercent){
  let obj = JSON.parse(JSON.stringify(inventoryItem)); //deep
  //let obj = inventoryItem //shallow copy

  obj.applyDiscount = function(){
    let discount = obj.price * discountPercent/100;
    let finalPrice = obj.price - discount;
    console.log("Discounted Price for Laptop:",finalPrice)
  }
  
  return obj;
}

const item = createInventoryItem("Laptop", "Electronics", 1500);
item.describeItem();
// Output: Item: Laptop, Category: Electronics, Price: 1500

const discountedItem = addItemDiscount(item, 10);
discountedItem.applyDiscount();
// Output: Discounted Price for Laptop: 1350

