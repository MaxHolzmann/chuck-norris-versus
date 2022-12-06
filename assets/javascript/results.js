// On the document load:
// - a For loop to loop through local storage and display each item.
let results = document.getElementById('results')
let counterContainer = document.getElementById('counter-container');


const displayJokesList = () => {
    for(let i = 0; i <= localStorage.length; i++) {
        if(localStorage.getItem(i)) {
            let joke = document.createElement('p')
            joke.textContent = localStorage.getItem(i)
            results.appendChild(joke);
        } else {
            console.log('null?')
        }
    }

    counterContainer.textContent = "Chuck Norris Jokes: " + localStorage.getItem('chuckJokeCounter') + " versus Dad Jokes: " + localStorage.getItem("dadJokeCounter");

}



displayJokesList();