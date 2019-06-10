fetch("http://localhost:8088/food")
.then( data => data.json())
.then( foodData => {
  console.log(foodData)
  foodData.forEach( foodItem => {
    fetch(`https://world.openfoodfacts.org/api/v0/product/${foodItem.barcode}.json`)
    .then( foodFromAPI => foodFromAPI.json())
    .then( foodItemFromAPI => {
      if (foodItemFromAPI.product.ingredients_text) {
        foodItem.ingredients = foodItemFromAPI.product.ingredients_text
      } else {
        foodItem.ingredients = "ingredients not listed"
      }
      document.querySelector("#food-list").innerHTML += createFoodComponent(foodItem)
    })
  })
})

function createFoodComponent(foodObj) {
  return `
    <h2>${foodObj.name}</h2>
    <p><strong>ingredients:</strong> ${foodObj.ingredients}</p>
  `
}
