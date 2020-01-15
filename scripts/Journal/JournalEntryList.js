import { useJournal, deleteJournal } from "./JournalDataProvider.js"
import JournalEntryComponent from "./JournalEntry.js"

const entryLog = document.querySelector (".entryLog")
const eventHub = document.querySelector(".container")





  export const EntryListComponent = () => {
      // Use the journal entry data from the data provider component
      
      
      const entries = () => {
        let currentEntries = useJournal()
        return currentEntries} 
      
        eventHub.addEventListener("click", clickEvent => {
          if (clickEvent.target.id.startsWith("editNote--")) {console.log("do you hear me")
            const [deletePrefix, noteId] = clickEvent.target.id.split("--")
      
            const editEvent = new CustomEvent("editButtonClicked", {
              detail: {
                noteId: noteId
              }
            })
      
            eventHub.dispatchEvent(editEvent)
          }
        

        // eventHub.addEventListener("click", clickEvent => {
          if (clickEvent.target.id.startsWith("deleteNote--")) {
              const [deletePrefix, noteId] = clickEvent.target.id.split("--")
        
              /*
                  Invoke the function that performs the delete operation.
        
                  Once the operation is complete you should THEN invoke
                  useJournal() and render the note list again.
              */
             deleteJournal(noteId).then(
                 () => {
                     const NewJournal = useJournal()
                     
                     render(NewJournal)
                 }
             )
          }
        })

      
        const renderNotesAgain = () => {
          const allTheEntries = useJournal()
          render(allTheEntries)
        } 

        eventHub.addEventListener("click", clickEvent => {
          if (clickEvent.target.id.startsWith("editNote--")) {console.log("do you hear me")
            const [deletePrefix, noteId] = clickEvent.target.id.split("--")
      
            const editEvent = new CustomEvent("editButtonClicked", {
              detail: {
                noteId: noteId
              }
            })
      
            eventHub.dispatchEvent(editEvent)
          }
        })

        eventHub.addEventListener("moodSelected", event => {
          const moodCollection = useJournal()
          

        
              const mood = event.detail.mood
              console.log(mood)
          
            const matchingMood = moodCollection.filter((currentMood) => {
          
              if (currentMood.mood === mood){
              return currentMood}
                
          })
        
        if (matchingMood.length>0) {render(matchingMood)}
        else {render(moodCollection)}
        })
        
        eventHub.addEventListener("entryCreated", event => {
          if(document.querySelector(".entryLog").innerHTML !== "")
          {renderNotesAgain()}
        })

        eventHub.addEventListener("entryHasBeenEdited", event => {
          if(document.querySelector(".entryLog").innterHTML !== "")
          {renderNotesAgain()}
        })

        eventHub.addEventListener("searchInitiated", event => {
          const journalCollection = useJournal()
          
          const findMe = event.detail.searchBox.toUpperCase()
          debugger
          const foundEntry =journalCollection.filter((currentSearch) => {
            if (currentSearch.mood.toUpperCase().includes(findMe) || currentSearch.entry.includes(findMe))

             {
              return currentSearch 
            
            }
          
          })

          if (foundEntry.length>0) {render(foundEntry)}
            else {render(journalCollection)}

          
        })
 


      // eventHub.addEventListener("click", clickEvent => {
        
      //   if(clickEvent.target.id === "saveEntry")
      
      //   {
      //     const dateEntry = document.querySelector("#journalDate").value;
      //     const conceptEntry = document.querySelector("#conceptsCovered").value;
      //     const entryEntry = document.querySelector("#journalEntry").value;
      //     const moodEntry = document.querySelector("#myList").value;
      
    
      //     const newEntry = { 
      //       date: dateEntry,
      //       concept: conceptEntry,
      //       entry: entryEntry,
      //       mood: moodEntry
            
    
            
      //         // Key/value pairs here
      //       }
           
    
      //     saveJournal(newEntry).then(() => render(entries()))
      //   }
      // })
    
      
  
      const render = (entries) =>{
      
        entryLog.innerHTML = `
            ${entries.map((currentEntry) => {return JournalEntryComponent(currentEntry)}).join(" ")



      }`




}
render(entries())
  
}






















