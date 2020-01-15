/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
const JournalEntryComponent = (noteObject) => {
  return `
      <section 
        <div> Date: ${noteObject.date}</div>
        <div> Concept: ${noteObject.concept}</div>
        <div> Entry: ${noteObject.entry}</div>
        <div> Mood: ${noteObject.mood}</div>
        <button id="deleteNote--${noteObject.id}">Delete</button>
        <button id="editNote--${noteObject.id}">Edit</button>
          
      </section>
      <br>
      <hr>
      <br>
  `
}

export default JournalEntryComponent



