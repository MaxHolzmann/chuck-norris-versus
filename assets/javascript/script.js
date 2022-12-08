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

let boxContainer = document.getElementById('box-container');


var getDadJokes = function () {
    var dadApiUrl = 'https://icanhazdadjoke.com/';
    fetch(dadApiUrl,{
        headers: {"Accept" : "application/json"},
        } 
         )
    .then(function (response) {
      
      if (response.ok) {
        
        response.json().then(function (data) {
           
           displayDadJoke(data.joke);
        });
        
      } else {
        alert('Error: ' + response.statusText);
      }
    })
    .catch(function (error) {

      alert('Unable to connect to Dad Jokes');
    });
} 




var getChuckNorris = function() {
    var chuckApiUrl= 'https://api.chucknorris.io/jokes/random'
    fetch(chuckApiUrl)
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
           displayChuckJoke(data.value);
        });
      } else {
        alert('Error: ' + response.statusText);
      }
    })
    .catch(function (error) {
      alert('Unable to connect to Chuck Norris');
    });
    
}

const displayJokes = () => {
  getChuckNorris(); 
  getDadJokes(); 

}

const displayChuckJoke = (joke) => {
    let chuckJoke = document.getElementById('chuck-joke');
    chuckJoke.textContent = joke;
}


const displayDadJoke = (joke) => {
    let dadJoke = document.getElementById('dad-joke');
    dadJoke.textContent = joke;
}

boxContainer.addEventListener('click', (e) => {
    console.log(e.target)
    let clickedButton = e.target;
    if(clickedButton.id === "chuck-vote") {
        localStorage.setItem(localStorage.length + 1, document.getElementById('chuck-joke').textContent)
        localStorage.setItem("chuckJokeCounter", +localStorage.getItem("chuckJokeCounter") + 1)
        console.log(localStorage.getItem("chuckJokeCounter"))
        displayJokes();
    }

    if(clickedButton.id === "dad-vote") {  
        localStorage.setItem(localStorage.length + 1, document.getElementById('dad-joke').textContent)
        localStorage.setItem("dadJokeCounter", +localStorage.getItem("dadJokeCounter") + 1)
        console.log(localStorage.getItem("dadJokeCounter"))
        displayJokes(); 
    }
});



displayJokes(); 