/*

An event listener on the "Start" button
    - run a function that will fetch and display the jokes to the user

An event listener that will get the targeted button, and based on which button was clicked,
It will save the corresponding joke to localStorage
After saving, new jokes will be displayed for the user to vote on

-- Jokes Page --

On the document load:
- a For loop to loop through local storage and display each item.

getDadJokes
getChuckNorris
displayJoke()

*/



const displayJoke = (chuck, dad) => {
    let chuckJoke = document.getElementById('chuck-joke');
    let dadJoke = document.getElementById('dad-joke');
    chuck = "test";
    dad = "test2"

    chuckJoke.textContent = chuck;
    dadJoke.textContent = dad;
}