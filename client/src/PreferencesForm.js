import React, { useState } from 'react'

const PreferencesForm = () => {

  const [matchPreferences, setMatchPreferences] = useState({
       instruments: '',
       instruments_wanted: '',
       skill: '',
       genres: '',
       goals: '',
       money: '',
       host: ''
  })


  return (
    <>

<body>
  <main class="container">

        <h2>My Preferences</h2>

        <form>

        <div class="grid">


          <label for="my-instruments">
            My Instruments
            <input type="text" id="instruments" name="instruments" placeholder="my instruments" required />
          </label>

          <label for="their-instruments">
            Their Instruments
            <input type="text" id="instruments_wanted" name="instruments_wanted" placeholder="instruments I want to play with" required />
          </label>

          </div>

          <br/>

        <div class="grid">
          <div>
            <label>Skill Level</label>
            <select id="skill" required>
              <option value="" selected>Skill Level</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Experienced</option>
              <option>Pro</option>
            </select>
          </div>

          <div>
            <fieldset>
              <legend>What are you looking for?</legend>
              <label for="goals">
                <input type="radio" id="goals" name="goals" value={matchPreferences.goals} checked />
                Jam Sessions
              </label>
              <label for="recording">
                <input type="radio" id="recording" name="goals" value={matchPreferences.goals} />
                Recording Sessions
              </label>
              <label for="performances">
                <input type="radio" id="performances" name="goals" value={matchPreferences.goals} />
                Performances
              </label>
              <label for="long-term">
                <input type="radio" id="long-term" name="goals" value={matchPreferences.goals} />
                Tours
              </label>
            </fieldset>
          </div>

          <div>
            <fieldset>
              <legend>Money Goals</legend>
              <label for="gig">
                <input type="radio" id="gig" name="money" value={matchPreferences.money} checked />
                Split the gig
              </label>
              <label for="contract">
                <input type="radio" id="contract" name="money" value={matchPreferences.money} />
                Sign a contract
              </label>
              <label for="pay">
                <input type="radio" id="pay" name="money" value={matchPreferences.money} />
                I can pay
              </label>
              <label for="broke">
                <input type="radio" id="broke" name="money" value={matchPreferences.money} />
                None
              </label>
            </fieldset>
          </div>

          <div>
            <label>Can you host?</label>
            <select id="host" required>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>



        </div>
          <button type="submit" className="primary-button">Save</button>

        </form>


        </main>
</body>
    
    </>
  )
}

export default PreferencesForm