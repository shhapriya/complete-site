// JavaScript function to change the text
function changeText() {
    // Array of different texts to display
    const texts = ["Planta Queen in NYC has amazing vegan food!", "The Computer History Museum in Palo Alto is a great sight to see ", 
    "Many of the famous Game of Thrones filming locations are located in Dublin"];
  
    // Get the displayText element
    const displayTextElement = document.getElementById("displayText");
  
    // Get a random index from the texts array
    const randomIndex = Math.floor(Math.random() * texts.length);
  
    // Update the text content with the randomly selected text
    displayTextElement.textContent = texts[randomIndex];
  }