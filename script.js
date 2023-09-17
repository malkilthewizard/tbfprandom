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
        })
        .catch(error => {
            console.error('Error fetching the list of names:', error);
        });
});
