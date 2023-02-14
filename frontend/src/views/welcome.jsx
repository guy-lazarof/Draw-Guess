import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { getActionPlayerName } from '../store/player.name.action';
import { Waiting } from './waiting';

export function Welcome() {
  const playerName = useSelector(storeState => storeState.playerNameModule.playerName)

  useEffect(() => {
    console.log(playerName.name);
  }, [playerName])


  const [newName, setNewName] = useState('')
  const [isPlayerName, setIsPlayerName] = useState(false)
  function handleChange({ target }) {
    let { value, name: field, type } = target
    value = (type === 'range') ? +value : value
    setNewName((prevGuessing) => ({ ...prevGuessing, [field]: value }))
  }

  function onPlayerName(ev) {
    ev.preventDefault()
    if (newName.name.length >= 2) {
      getActionPlayerName(newName)
      setIsPlayerName(true)
      console.log(playerName.name);
    }
  }

  return (

    <section className='welcome-view'>
      {!playerName &&
        <>
          <h1>Welcome to Draw Together </h1>
          <form onSubmit={(event) => { onPlayerName(event) }}
            className='player-name-form'>
            <label className='player-name-label'>
              <p>What's your name</p>
              <input type="text"
                name="name"
                id="player-name"
                placeholder="your name"
                onChange={handleChange}
                className='player-name-input'
              />
            </label>

            <button>ok</button>
          </form>
        </>}


      {/* {playerName &&
        <Waiting />
      } */}
      {playerName &&
        <h1>Welcome, {playerName.name}! </h1>
      }

    </section>
  )
}



