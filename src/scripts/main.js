fetch("http://localhost:8088/food")
.then( data => data.json())
.then( foodData => {
  console.log(foodData)
})
