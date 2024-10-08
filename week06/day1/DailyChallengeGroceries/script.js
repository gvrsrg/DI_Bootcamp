// Create an arrow function named displayGroceries, that console.logs the 3 fruits from the groceries object. Use the forEach method.

// Create another arrow function named cloneGroceries.
// In the function, create a variable named user that is a copy of the client variable. (Tip : make the user variable equal to the client variable)
// Change the client variable to “Betty”. Will we also see this modification in the user variable ? Why ?
// In the function, create a variable named shopping that is equal to the groceries variable.
// Change the value of the totalPrice key to 35$. Will we also see this modification in the shopping object ? Why ?
// Change the value of the paid key to false. Will we also see this modification in the shopping object ? Why ?

// Invoke the cloneGroceries function.

let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

const displayGroceries = (arr)=>{
    console.log("Groceries for " + client + ": ")
    arr.forEach(item => console.log(item))
}

displayGroceries(groceries.fruits)

const cloneGroceries = () =>{

    let user = client
    client = "Betty"
    console.log(user, client);
    let shopping = groceries
    console.log(shopping)
    shopping.totalPrice = "35$"
    shopping.paid = false
    console.log(shopping, groceries)
}

cloneGroceries()



