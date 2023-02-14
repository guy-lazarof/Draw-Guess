import { useState } from 'react';
import { useSelector } from 'react-redux';

// import { randomWords } from 'random-words';

export function Guessing() {

  const choosenWord = useSelector(storeState => storeState.chooseWordModule.choosenWord)

  const [guessingWord, setGuessingWord] = useState('')

  function handleChange({ target }) {
    let { value, name: field, type } = target
    value = (type === 'range') ? +value : value
    setGuessingWord((prevGuessing) => ({ ...prevGuessing, [field]: value }))
  }

  function onGuessing(ev) {
    ev.preventDefault()
    if (choosenWord.length !== 0 && guessingWord.guessing === choosenWord) {
      console.log(true);
    }
    else {
      console.log(false);
    }
  }

  return (
    <section className='guessing-view'>
      <form onSubmit={(event) => { onGuessing(event) }}
        className='guessing-form'>
        <label className='guessing-label'>
          <p>Your guessing</p>
          <input type="text"
            name="guessing"
            id="guessing"
            placeholder="your guessing"
            onChange={handleChange}
            className='guessing-input'
            maxLength={choosenWord.length}
          />
        </label>

        <button>guess</button>
      </form>
    </section>
  )
}