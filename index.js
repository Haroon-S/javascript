//let points = 50 

// let winPoints = points + 70

// let losePoints = points + 25

// console.log(points)
// console.log(winPoints)
// console.log(losePoints)

//function

// let num1 = 42
// let num2 = 52
// let num3 = 62

// function number ()
// {
//     console.log(num1)
//     console.log(num2)
//     console.log(num3)
// }

// number()



// let num1 = 0
// function number ()
// {
//     num1++
//     console.log(num1)
// }

// number()
// number()
// number()

// let counter = document.getElementById("count")
// let num1 = 0
// let savedNum
// let string1 = "you have 3 new notifications!"
// let string2 = "Haroon"
// let string3 = string1 + " : " + string2


// console.log(string3)
// function numberAdd ()
// {
//     num1++
//     counter.textContent = num1
//     console.log("Your number is " + "" + num1)
// }
// function numberDel ()
// {
//     num1--
//     counter.textContent = num1
//     console.log("Your number is " + "" + num1)
// }

// function reset ()
// {
//     num1 = 0
//     counter.textContent = num1
//     console.log("Your number is " + "" + num1)
// }

// function save ()
// {
//     savedNum = num1
//     let previous = document.getElementById("prev")
//     previous.textContent += num1 + " - "
//     num1 = 0
//     counter.textContent = num1
//     console.log(num1)
// }


// let name = "Haroon Shahid "
// let greetings = "Welcome, "
// let myGreetings = greetings + name
// let welcome = document.getElementById("welcomeHa")
// welcome.textContent = greetings + name
// console.log(myGreetings)

// let emo = "👋"

// welcome.textContent += emo




// let errorMsg = document.getElementById("error")
// "Sorry something went wrong!"

// function showError ()
// {
//     errorMsg.textContent = "Sorry something went wrong!"

// }



// let num1 = 8
// let num2 = 2

// let value1 = document.getElementById("num1-el").textContent = num1
// let value2 = document.getElementById("num2-el").textContent = num2
// let ans = document.getElementById("sum-el")


// function add()
// {
//     let calculation = num1 + num2
//     ans.textContent = "Sum : " + calculation
// }
// function sub()
// {
//     let calculation = num1 - num2
//     ans.textContent = "Sub : " + calculation
// }
// function div()
// {
//     let calculation = num1 / num2
//     ans.textContent = "Div : " + calculation
// }
// function mul()
// {
//     let calculation = num1 * num2
//     ans.textContent = "Mul : " + calculation
// }




// document.getElementById("demo").innerHTML = 5 + 6;


// document.write(5 + 6);

let text = "The rain in SPAIN stays mainly in the plain"; 
let arr = text.match(/ain/gi);
if (arr === null) {
    console.log("Not found")
} else {
    console.log("Found")
}
console.log(arr)
document.getElementById("demo").innerHTML = text.match(/ain/gi);