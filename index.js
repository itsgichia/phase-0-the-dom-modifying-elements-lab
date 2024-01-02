// Remove the <main> element
const mainElement = document.getElementById("main");
mainElement.remove();

//Create a new <h1> element and set its id to 'victory'
const newHeader = document.createElement("h1");
newHeader.id = "victory";

// Set the inner text of the newHeader element
newHeader.textContent = "Gichia is the champion";

//Append the newHeader element to the document body or a specific container
document.body.appendChild(newHeader);