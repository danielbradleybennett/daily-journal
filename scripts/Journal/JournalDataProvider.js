

let journal = [];

export const useJournal = () => {
  return journal
}


export const saveJournal = note => {

  return fetch("http://localhost:8088/entries", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(note)
  })
    .then(() => getJournal())
    .then(() => console.log('current state of Journal', journal))
}


export const getJournal = () => {
  return fetch("http://localhost:8088/entries")
    .then(response => response.json())
    .then(parsedJournal => {
      journal = parsedJournal.slice()

    })

}


export const deleteJournal = noteId => {
  return fetch(`http://localhost:8088/entries/${noteId}`, {
    method: "DELETE"
  })
    .then(getJournal)
}

export const editEntry = (noteObject) => {
  return fetch(`http://localhost:8088/entries/${noteObject.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(noteObject)
  })
    .then(getJournal)
}

/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

    // This is the original data. Can't Touch This.
    // const journal = [
    //   {
    //       date: "07/24/2025",
    //       concept: "HTML & CSS",
    //       entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
    //       mood: "Ok"
    //   },
    //   {
    //       date: "07/24/2025",
    //       concept: "Javascript",
    //       entry: "We began to use Javascript to automate the HTML representation of Martin's fish, locations, and tips",
    //       mood: "Overwhelmed"
    //   },
    //   {
    //       date: "11/25/2019",
    //       concept: "Javascript",
    //       entry: "We fixed the dynamic event listeners.",
    //       mood: "Confused"


    //   }
    // ]

    // /*
    //   You export a function that provides a version of the
    //   raw data in the format that you want
    // */
    // export const useJournalEntries = () => {
    //   const sortedByDate = journal.sort(
    //       (currentEntry, nextEntry) =>
    //           Date.parse(currentEntry.date) - Date.parse(nextEntry.date)

    //   )
    //   return sortedByDate

    // }