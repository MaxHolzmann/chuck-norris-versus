// On the document load:
// - a For loop to loop through local storage and display each item.
let results = document.getElementById('results')
let chuckCounterContainer = document.getElementById('chuck-counter-container');
let dadCounterContainer = document.getElementById('dad-counter-container')
let clearJokesButton = document.getElementById('clear-jokes-btn');
let resultsContainerFull = document.getElementById('results-container-full');
let noJokesSaved = document.getElementById('no-jokes-saved');


const displayJokesList = () => {
    for(let i = 0; i <= localStorage.length; i++) {
        if(localStorage.getItem(i)) {
            let joke = document.createElement('p')
            joke.textContent = localStorage.getItem(i)
            results.appendChild(joke);
            noJokesSaved.classList.add('hide-results')
        } 

        //Checks if the one item in local storage is "debug"
        if(localStorage.length === 1 && localStorage.key(0) === "debug") {
            resultsContainerFull.classList.add('hide-results');
       }

       //checks if local storage is empty
       if(localStorage.length === 0) {
        resultsContainerFull.classList.add('hide-results');
        }

    }

    if(localStorage.getItem('chuckJokeCounter')  && localStorage.getItem("dadJokeCounter")) {
        chuckCounterContainer.textContent = "Chuck Norris Jokes: " + localStorage.getItem('chuckJokeCounter');
        dadCounterContainer.textContent = "Dad Jokes: " + localStorage.getItem("dadJokeCounter");
    } else {
        console.log('no jokes no counter!') 
    }
    

}

clearJokesButton.addEventListener('click', () => {
    localStorage.clear();
    window.location.reload();
})




displayJokesList();