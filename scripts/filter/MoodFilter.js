const MoodFilter = () => {
  return `
      <fieldset class="fieldset">
          <label for="journalDate">Mood for the day</label>
          
              <input type="radio" id="mood"
                  name="moodFilter" value="Content">
              <label for="mood1">Content</label>

              <input type="radio" id="mood2"
                  name="moodFilter" value="Happy">
              <label>Happy</label>

              <input type="radio" id="mood3"
                  name="moodFilter" value="Sad">
              <label>Sad</label>

              <input type="radio" id="mood4"
                  name="moodFilter" value="Depressed">
              <label>Depressed</label>

              <input type="radio" id="mood5"
                  name="moodFilter" value="Rage">
              <label>Rage</label>

              <input type="radio" id="mood6"
                  name="moodFilter" value="Confused">
              <label>Confused</label>

              <input type="radio" id="mood7"
                  name="moodFilter" value="Overwhelmed">
              <label>Overwhelmed</label>
      </fieldset>

      
      
      
    


      `
}

export default MoodFilter