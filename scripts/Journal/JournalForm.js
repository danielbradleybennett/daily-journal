import { useJournal, saveJournal, editEntry } from "./JournalDataProvider.js"

const contentTarget = document.querySelector(".journalContainer")
const eventHub = document.querySelector(".container")




export const JournalFormComponent = () => {
  
  eventHub.addEventListener("editButtonClicked", event => {
    const entryToBeEdited = event.detail.noteId

    const allEntriesArray = useJournal()

    const theFoundEntry = allEntriesArray.find(
      (currentEntryObject) => {
        return currentEntryObject.id === parseInt(entryToBeEdited, 10)
      }

    )
    document.querySelector("#journalDate").value = theFoundEntry.date
    document.querySelector("#conceptsCovered").value = theFoundEntry.concept
    document.querySelector("#journalEntry").value = theFoundEntry.entry
    document.querySelector("#myList").value = theFoundEntry.mood
    document.querySelector("#note-id").value = theFoundEntry.id

  })



  eventHub.addEventListener("click", clickEvent => {

    if (clickEvent.target.id === "saveEntry") {
      const hiddenInputValue = document.querySelector("#note-id").value

      if (hiddenInputValue !== "") {
        const editedEntry = {
          id: parseInt(document.querySelector("#note-id").value, 10),
          date: document.querySelector("#journalDate").value,
          concept: document.querySelector("#conceptsCovered").value,
          entry: document.querySelector("#journalEntry").value,
          mood: document.querySelector("#myList").value,
        }

        editEntry(editedEntry).then(() => {
          eventHub.dispatchEvent(new CustomEvent("entryHasBeenEdited"))
        })

      } else {
        const dateEntry = document.querySelector("#journalDate").value;
        const conceptEntry = document.querySelector("#conceptsCovered").value;
        const entryEntry = document.querySelector("#journalEntry").value;
        const moodEntry = document.querySelector("#myList").value;


        const newEntry = {
          date: dateEntry,
          concept: conceptEntry,
          entry: entryEntry,
          mood: moodEntry
       }


        saveJournal(newEntry).then(() => {
          const message = new CustomEvent("entryCreated")
          eventHub.dispatchEvent(message)
        })
      }
    }
  })
  


  const render = () => {
    contentTarget.innerHTML = `
  <div class="dailyjournal">
  <input type="hidden" id="note-id"/> 
  <form action="">
    <fieldset>
      <label>Date of Entry</label>
      <input type="date" id="journalDate">
    </fieldset>
  

    <fieldset>
      <label>Concepts Covered</label>
      <input type="text" id="conceptsCovered">
    </fieldset>  
 
    <fieldset>
      <label>Journal Entry</label>
      <textarea id="journalEntry" cols="50" rows="2"></textarea>
    </fieldset>
    
    <fieldset>
      <label>Mood for the Day</label>
      <select id="myList">
            <option value = "Content">Content</option>
            <option value = "Happy">Happy</option>
            <option value = "Sad">Sad</option>
            <option value = "Depressed">Depressed</option>
            <option value = "Rage">Rage</option>
            <option value = "Confused">Confused</option>
            <option value = "Overwhelmed">Overwhelmed</option>

      </select>
    </fieldset>
    </div>
    </form>
    <button id="saveEntry">Record Journal Entry</button>
    <fieldset>
        <label for="searchBar">Search Journal</label>
          <input type="search" id="searchBar">
    </fieldset>

  `}

  render()


}