import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Canvas from '../cmps/canvas';
import { socketService } from '../services/socket.service';
import { getActionChooseWord } from '../store/choose.word.action';
import { getActionDraw } from '../store/draw.action';
import { getActionScore } from '../store/score.action';

export function Guessing() {
  const choosenWord = useSelector(storeState => storeState.chooseWordModule.choosenWord)
  const points = useSelector(storeState => storeState.chooseWordModule.points)
  const score = useSelector(storeState => storeState.scoreModule.score)
  const draw = useSelector(storeState => storeState.drawModule.draw)

  const [guessingWord, setGuessingWord] = useState('')

  // const [isDrawSent, setIsDrawSent] = useState(null)
  const [drawSent, setDrawSent] = useState(null)
  const navigate = useNavigate()
  const socketId = useSelector(storeState => storeState.socketIdModule.socketId)


  useEffect(() => {
    console.log('starting game')
  }, [])


  // socketId
  function handleChange({ target }) {
    let { value, name: field, type } = target
    value = (type === 'range') ? +value : value
    setGuessingWord((prevGuessing) => ({ ...prevGuessing, [field]: value }))
  }
  function onGuessing(ev) {
    ev.preventDefault()
    if (choosenWord.length !== 0 && guessingWord.guessing === choosenWord) {
      console.log(true);
      // socketService.emit('guessing-success')
      getActionChooseWord('')
      getActionScore(points)
      getActionDraw('')
      socketService.emit('add-points', points)
      navigate(`/word-choosing`)


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