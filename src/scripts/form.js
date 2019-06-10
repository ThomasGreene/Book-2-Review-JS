// Add a click event that logs out the search term entered by the user

let searchInput = document.querySelector("#search-input")
document.querySelector("#search-btn").addEventListener("click", () => {
    fetch(`https://api.edamam.com/api/food-database/parser?ingr=${searchInput.value}&app_id=${app_keys.app_id}&app_key=${app_keys.app_key}`)
    .then( foodData => foodData.json())
    .then( food => {
        document.querySelector("#search-results").innerHTML = ""
        addFoodCompontentToDom(createFoodSearchCompontent(food), "search-results")
     })
})

// Query strings
// https://api.edamam.com/api/food-database/parser?name='fred'
// ?name='fred' is the query string