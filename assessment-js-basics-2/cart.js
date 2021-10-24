///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

 const summedPrice = cart.reduce((sum,element) => sum + element.price,0);

 console.log(summedPrice);

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

const calcFinalPrice = (cartTotal,couponValue,tax) => (cartTotal * (tax+1) - couponValue).toFixed(2);

console.log(calcFinalPrice(summedPrice,5,0.6));

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
    //name, for delivery of food we need a name of the customer so we can confirm we are deliver to right person, this would be a string because a name usually a noun 
    //address, we would need an address to know where to deliver food, this would be an object because it usually has a few properties, for example, a street number, a street name, a zipcode, a city and a state.
    //payment type, we would need to know how the customer is paying for the good, this would be a string ex: credit, debit, cash
    //tip percentage, we would need a tip to describe how much a customer wants to tip , this be a number because tips are usually describes as percentage of total order.
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

const customer = {
    name: "Jerahmeel Wilson",
    address: {
        streetNumber: 123,
        streetName: "Maple Road",
        zipcode: 60930,
        city: "Baton Rouge",
        state:"Louisana"
    },
    paymentType: "credit",
    tip: 0.15, 
}