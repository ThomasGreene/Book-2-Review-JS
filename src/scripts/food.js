function createFoodComponent(foodObj) {
    return `
      <h2>${foodObj.name}</h2>
      <h3>This is the food information</h3>
      <p><strong>ingredients:</strong> ${foodObj.ingredients}</p>
    `
}

function createFoodSearchCompontent (foodObj) {
    return `
    <h2>${foodObj.text}</h2>
    <h3>${foodObj.parsed[0].food.label}</h3>
    <img src=${foodObj.parsed[0].food.image}>
    `
}

// do not need to return this function since it is simply placing the information into the DOM
function addFoodCompontentToDom(foodComponent, element) {
    document.querySelector(`#${element}`).innerHTML += foodComponent
}