document.getElementById("pickRandom").addEventListener("click", function() {
    // Fetch the list of names from the external text file
    fetch('listofnames.txt')
        .then(response => response.text())
        .then(data => {
            // Split the text into an array of names
            const namesArray = data.split('\n').filter(name => name.trim() !== '');

            // Check if there are names in the list
            if (namesArray.length === 0) {
                alert("The list of names is empty.");
                return;
            }

            // Pick a random name from the list
            const randomIndex = Math.floor(Math.random() * namesArray.length);
            const randomName = namesArray[randomIndex];

            // Display the randomly chosen name
            document.getElementById("randomName").textContent = randomName;
            document.getElementById("resultHeader").classList.remove("hidden");
        })
        .catch(error => {
            console.error('Error fetching the list of names:', error);
        });

        
        
});



 // Array of random choices
 const choices = [
    "OH, HOW ABOUT SOME FUCKING",
    "YOU READY FOR SOME FUCKING",
    "WATCH SOME FUCKING",
    "GET YOUR N-PASS READY AND FEAST YOUR EYES ON THIS",
    "LET'S MOSEY!",
    "YOU HAVEN'T SEEN DEATH NOTE?! AT LEAST WATCH THIS",
    "THE RACE WAR STARTS NOOOOW!!!",
    "YOU THINK YOUR DAD BEAT YOU? GET READY FOR THIS",
    "THE GAMECUBE WAS GREAT, FUCK YOU!",
    "ALWAYS ROTATE YOUR SAVES! OH AND WATCH SOME FUCKING",
    "THERE'S NO TIME! WATCH SOME FUCKING",
    "DROP YOUR SHIELD AND WATCH SOME FUCKING",
    "WATCH THIS MYSTERIOUS JOGO",
    "WANNA GET GREASY? THEN WATCH SOME",
    "GIRLS ARE WATCHING",
    "THIS IS THE HYPEST SHIT!",
    "HE LOVES IT! DO YOU?",
    "YUCK IT UP WHILE WATCHING SOME",
    "WHAT A MYSTERIOUS GAME",
     "IT'S FINE",
     "THE SEA IS BASICALLY THE SKY OF THE GROUND",
     "YOU'RE DEAD INSIDE, YOU CAN WATCH ANYTHING NOW! SO WATCH SOME FUCKING",
     "DON'T WORRY ABOUT IT",
     "DON'T LET IT SET IN",
     "IT'S SETTING IN",
     "YOUR NECK IS ITCHY"
     
    // Add more choices as needed
];

document.getElementById("pickRandom").addEventListener("click", function() {
    // Randomly select a choice from the array
    const randomIndex = Math.floor(Math.random() * choices.length);
    const randomChoice = choices[randomIndex];

    // Set the randomly chosen choice as the text of the <h2> element
    document.getElementById("resultHeader").textContent = randomChoice;

    // Show the <h2> element when the button is clicked
    document.getElementById("resultHeader").classList.remove("hidden");

    
});

// Function to handle the initial click
function handleInitialClick() {
    // Change the text when clicked for the first time
    document.getElementById("pickRandom").textContent = "FUCK THAT. RECOMMEND ME SOMETHING ELSE.";
    // Remove the click event listener so it doesn't change again
    document.getElementById("pickRandom").removeEventListener("click", handleInitialClick);
}

// Add a click event listener to the "pickRandom" div
document.getElementById("pickRandom").addEventListener("click", handleInitialClick);
