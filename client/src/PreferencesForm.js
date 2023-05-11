import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "./context/user";
import { NavLink, useNavigate } from "react-router-dom";

const PreferencesForm = () => {
  const { user, loggedIn, updateMyPreferences } = useContext(UserContext);

  const { instruments, instruments_wanted, skill, genres, goals, money, host } =
    user.preference || {};

  const navigate = useNavigate();

  const [matchPreferences, setMatchPreferences] = useState({
    instruments: "",
    instruments_wanted: "",
    skill: "",
    genres: "",
    goals: "",
    money: "",
    host: false,
  });

  console.log("matchPreferences", matchPreferences);

  useEffect(() => {
    if (user.preference) {
      setMatchPreferences({
        instruments,
        instruments_wanted,
        skill,
        genres,
        goals,
        money,
        host,
      });
    }
  }, [user]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    updateMyPreferences(matchPreferences);
  };

  return (
    <>
      <dialog open>
        <article className="dialog">
          <header>
            <NavLink to="/my-profile" class="close">
              <p>Back</p>
            </NavLink>
          </header>
          <h2>Preferences</h2>
          <hr />
          <br />

          <form onSubmit={handleFormSubmit}>
            <div>
              <label htmlFor="my-instruments">
                My Main Instrument
                <input
                  type="text"
                  id="instruments"
                  name="instruments"
                  value={matchPreferences.instruments}
                  onChange={(e) =>
                    setMatchPreferences({
                      ...matchPreferences,
                      instruments: e.target.value,
                    })
                  }
                  placeholder="my instruments"
                  required
                />
              </label>

              <label htmlFor="their-instruments">
                Their Main Instrument
                <input
                  type="text"
                  id="instruments_wanted"
                  name="instruments_wanted"
                  value={matchPreferences.instruments_wanted}
                  onChange={(e) =>
                    setMatchPreferences({
                      ...matchPreferences,
                      instruments_wanted: e.target.value,
                    })
                  }
                  placeholder="instruments I want to play with"
                  required
                />
              </label>
            </div>

            <br />

            <div >
              <label>Skill Level</label>
              <select
                id="skill"
                required
                value={matchPreferences.skill}
                onChange={(e) =>
                  setMatchPreferences({
                    ...matchPreferences,
                    skill: e.target.value,
                  })
                }
              >
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="experienced">Experienced</option>
                <option value="pro">Pro</option>
              </select>
              <div>
                <fieldset id="goals">
                  <legend>What are you looking for?</legend>
                  <label htmlFor="jam">
                    <input
                      type="radio"
                      id="jam"
                      name="match_preference"
                      value="jam"
                      checked={matchPreferences.goals === "jam"}
                      onChange={(e) =>
                        setMatchPreferences({
                          ...matchPreferences,
                          goals: e.target.value,
                        })
                      }
                    />
                    Jam
                  </label>

                  <label htmlFor="perform">
                    <input
                      type="radio"
                      id="perform"
                      name="match_preference"
                      value="perform"
                      checked={matchPreferences.goals === "perform"}
                      onChange={(e) =>
                        setMatchPreferences({
                          ...matchPreferences,
                          goals: e.target.value,
                        })
                      }
                    />
                    Perform
                  </label>
                  <label htmlFor="record">
                    <input
                      type="radio"
                      id="record"
                      name="match_preference"
                      value="record"
                      checked={matchPreferences.goals === "record"}
                      onChange={(e) =>
                        setMatchPreferences({
                          ...matchPreferences,
                          goals: e.target.value,
                        })
                      }
                    />
                    Record
                  </label>
                  <label htmlFor="compose">
                    <input
                      type="radio"
                      id="compose"
                      name="match_preference"
                      value="compose"
                      checked={matchPreferences.goals === "compose"}
                      onChange={(e) =>
                        setMatchPreferences({
                          ...matchPreferences,
                          goals: e.target.value,
                        })
                      }
                    />
                    Compose
                  </label>
                </fieldset>
              </div>

              <div>
                <fieldset>
                  <legend>Money Goals</legend>

                  <label htmlFor="free">
                    <input
                      type="radio"
                      id="free"
                      name="money"
                      value="free"
                      checked={matchPreferences.money === "free"}
                      onChange={(e) =>
                        setMatchPreferences({
                          ...matchPreferences,
                          money: e.target.value,
                        })
                      }
                    />
                    Free
                  </label>

                  <label htmlFor="split">
                    <input
                      type="radio"
                      id="split"
                      name="money"
                      value="split"
                      checked={matchPreferences.money === "split"}
                      onChange={(e) =>
                        setMatchPreferences({
                          ...matchPreferences,
                          money: e.target.value,
                        })
                      }
                    />
                    Split
                  </label>

                  <label htmlFor="paid">
                    <input
                      type="radio"
                      id="paid"
                      name="money"
                      value="paid"
                      checked={matchPreferences.money === "paid"}
                      onChange={(e) =>
                        setMatchPreferences({
                          ...matchPreferences,
                          money: e.target.value,
                        })
                      }
                    />
                    Paid
                  </label>

                  <label htmlFor="negotiable">
                    <input
                      type="radio"
                      id="negotiable"
                      name="money"
                      value="negotiable"
                      checked={matchPreferences.money === "negotiable"}
                      onChange={(e) =>
                        setMatchPreferences({
                          ...matchPreferences,
                          money: e.target.value,
                        })
                      }
                    />
                    Negotiable
                  </label>
                </fieldset>
              </div>

              <div>
                <label>Can you host?</label>
                <select
                  id="host"
                  required
                  value={matchPreferences.host}
                  onChange={(e) =>
                    setMatchPreferences({
                      ...matchPreferences,
                      host: e.target.value === "true",
                    })
                  }
                >
                  <option value={"true"}>Yes</option>
                  <option value={"false"}>No</option>
                </select>
              </div>
            </div>
            <button type="submit" className="primary-button">
              Save
            </button>
            <br />

          </form>
                      
          <footer>
            <NavLink to="/my-profile" class="close">
              <p>Close</p>
            </NavLink>
            </footer>
        </article>
      </dialog>
    </>
  )
}

export default PreferencesForm;
