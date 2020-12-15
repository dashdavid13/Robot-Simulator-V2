document.addEventListener("DOMContentLoaded", function() {
  // initializes the board
  init();

  // ADD CODE HERE!

  const whereMovesGo = document.querySelector("ul#moves-container")
  
  
  document.addEventListener("keydown", function(evt) {
    const li = document.createElement("li")
      
      
      if (evt.key === "ArrowLeft") {
        // console.log("Left Arrow was pressed!")
        li.textContent = "left"
        whereMovesGo.append(li)
      } else if (evt.key === "ArrowRight") {
        // console.log("Right Arrow was pressed!")
        li.textContent = "right"
        whereMovesGo.append(li)
      } else if (evt.key === "ArrowUp"){
        // console.log("Up Arrow was pressed!")
        li.textContent = "up"
        whereMovesGo.append(li)
      } else if (evt.key === "ArrowDown"){
        // console.log("Down Arrow was pressed!")
        li.textContent = "down"
        whereMovesGo.append(li)
      }
  })

  let button = document.querySelector("#move-button")
  
  button.addEventListener("click", function(evt){
   if (whereMovesGo.children[0]){
      let li = document.querySelector("#moves-container li")
      move(li.textContent)
      li.remove()
   }
    
    // delete the li from the ul
  //whereMovesGo.addEventListener("click", function(event){
  //   if event.target.something === "LI" 
  //   event.target.remove()
  // })
    
  })

  listLi = document.querySelector("whereMovesGo li")

  listLi.addEventListener("click", function(evt) {
    console.log("here's the li")
  })


})





// // STEP 1: Find the closest common ancestor and add an event listener
// const listings = document.querySelector('#listings')

// listings.addEventListener('click', function (event) {
//     // STEP 2: identify the element we care about by using some conditional logic to determine which element was clicked on
//     if (event.target.matches('.delete-button')) {
//         // STEP 3: DOM manipulation!
//         const postDiv = event.target.closest('div.post')
//         postDiv.remove()
//     }
//     else if (event.target.dataset.buttonType === 'upvote') {
//         const postDiv = event.target.closest('div.post')
//         const likesPtag = postDiv.querySelector('.likes-count')
//         let numOfLikes = parseInt(likesPtag.textContent) + 1
//         likesPtag.textContent = numOfLikes
//     }
// })





