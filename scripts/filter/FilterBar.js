import MoodFilter from "./MoodFilter.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".filters")

/*
 You need to make a new HTML element with a class of
 `filters` in index.html
*/

export const FilterBar = () => {



  document.querySelector("#searchBar").addEventListener("keypress", event => {
    
     if (event.keyCode === 13) {
       const searchHappening = event.target.value
       const search = new CustomEvent("searchInitiated", {
         detail: {
         searchBox: searchHappening
 
       }
       })
 
   eventHub.dispatchEvent(search)
 
 }
    } )

  eventHub.addEventListener("click", event => {
    console.log("hello filter")
    if (event.target.name === "moodFilter") {
      const selectedMood = event.target.value

      const message = new CustomEvent("moodSelected", {
        detail: {
          mood: selectedMood
        }

      })
      eventHub.dispatchEvent(message)
    }
  })




const render = () => {
  contentTarget.innerHTML = `
            ${MoodFilter()}
        `
}

render()
}