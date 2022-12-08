// On the document load:
// - a For loop to loop through local storage and display each item.
let results = document.getElementById('results')
let chuckCounterContainer = document.getElementById('chuck-counter-container');
let dadCounterContainer = document.getElementById('dad-counter-container')
let clearJokesButton = document.getElementById('clear-jokes-btn');
let resultsContainerFull = document.getElementById('results-container-full');
let noJokesSaved = document.getElementById('no-jokes-saved');
let scoreCardContainer = document.getElementById('score-card')


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
    let chuckCount = localStorage.getItem('chuckJokeCounter');
    let dadCount = localStorage.getItem("dadJokeCounter");
    if (chuckCount === null){
        chuckCount = 0; 
    }
    if (dadCount === null){
        dadCount = 0; 
    }


    if(chuckCount === 0  && dadCount === 0) {
        scoreCardContainer.style.display = "none";
        console.log('no jokes no counter!') 
    } else {
        scoreCardContainer.style.display = "block"; 
        chuckCounterContainer.textContent = "Chuck Norris Jokes: " + chuckCount;
        dadCounterContainer.textContent = "Dad Jokes: " + dadCount;
    }
    

}

clearJokesButton.addEventListener('click', () => {
    localStorage.clear();
    window.location.reload();
})




displayJokesList();