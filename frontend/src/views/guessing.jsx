import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Canvas from '../cmps/canvas';
import { getActionChooseWord } from '../store/choose.word.action';
import { getActionScore } from '../store/score.action';

export function Guessing() {
  const choosenWord = useSelector(storeState => storeState.chooseWordModule.choosenWord)
  const points = useSelector(storeState => storeState.chooseWordModule.points)
  const score = useSelector(storeState => storeState.scoreModule.score)
  const [guessingWord, setGuessingWord] = useState('')
  const navigate = useNavigate()

  function handleChange({ target }) {
    let { value, name: field, type } = target
    value = (type === 'range') ? +value : value
    setGuessingWord((prevGuessing) => ({ ...prevGuessing, [field]: value }))
  }

  function onGuessing(ev) {
    ev.preventDefault()
    if (choosenWord.length !== 0 && guessingWord.guessing === choosenWord) {
      console.log(true);
      navigate(`/word-choosing`)
      getActionChooseWord('')
      getActionScore(points)
    }
    else {
      console.log(false);
    }
  }

  return (
    <section className='guessing-view'>
      <p className='score-counter'>score:{score}</p>
      <Canvas status={true} />
      <form onSubmit={(event) => { onGuessing(event) }}
        className='guessing-form'>

        <label className='guessing-label'>
          <input type="text"
            name="guessing"
            id="guessing"
            placeholder="your guessing"
            onChange={handleChange}
            className='guessing-input'
            maxLength={choosenWord.length}
          />
        </label>

        <button className='guess-btn'>guess</button>
      </form>
    </section>
  )
}