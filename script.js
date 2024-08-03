

var data;
let front = true;

const authors = document.querySelectorAll(".author");
const texts = document.querySelectorAll(".text");
const body = document.getElementById("body");
const button = document.querySelectorAll(".new-quote");

const blockFront = document.querySelector(".block__front");
const blockBack = document.querySelector(".block__back");

const authorFront = authors[0];
const authorBack = authors[1];

const textFront = texts[0];
const textBack = texts[1];

const buttonFront = button[0];
const buttonBack = button[1];


// An arrow function used to get a quote randomly
const displayQuote = () =>{


    let index = Math.floor(Math.random()*data.length);

    // Stores the quote present at the randomly generated index
    let quote = data[index].text;

    // Stores the author of the respective quote
    let author = data[index].author;

    // Making the author anonymous if no author is present
    if(!author){
        author = "Anonymous"
    }



    if(front){
        // Changing the front if back-side is displayed
        textFront.innerHTML = quote;
        authorFront.innerHTML = author;
    }else{
        // Changing the back if front-side is displayed
        textBack.innerHTML = quote;
        authorBack.innerHTML = author;
    }
    
    front = !front;

}

// Fetching the quotes from the type.fit API using promises
fetch("https://type.fit/api/quotes")
    .then(function(response) {
        return response.json(); 
    }) // Getting the raw JSON data
    .then(function(data) {

        this.data = data; 

        // Displaying the quote When the Webpage loads
        displayQuote() 
});


// Adding an onclick listener for the button
function newQuote(){
    
    // Rotating the Quote Box
    blockBack.classList.toggle('rotateB');
    blockFront.classList.toggle('rotateF');

    // Displaying a new quote when the webpage loads
    displayQuote();
}
