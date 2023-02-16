import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { socketService } from '../services/socket.service';
import { getActionChooseWord } from '../store/choose.word.action';

var randomWords = require('random-words');
export function WordChoosing() {
  const choosenWord = useSelector(storeState => storeState.chooseWordModule.choosenWord)
  const navigate = useNavigate()

  useEffect(() => {
    console.log(choosenWord);
  }, [choosenWord])

  let easyWord = ''
  let mediumWord = ''
  let hardWord = ''

  getWords()

  function getWords() {
    easyWord = randomWords(({ exactly: 1, maxLength: 3 }))
    mediumWord = randomWords()
    hardWord = randomWords(({ exactly: 1, maxLength: 2 }))
    while (easyWord[0].length < 3 || easyWord[0].length > 4) {
      easyWord = randomWords(({ exactly: 1, maxLength: 4 }))
    }
    while (mediumWord[0].length !== 5) {
      mediumWord = randomWords(({ exactly: 1, maxLength: 5 }))
    }
    while (hardWord[0].length < 6) {
      hardWord = randomWords(({ exactly: 1, maxLength: 20 }))
    }
  }

  function choosingWord(word, points) {
    getActionChooseWord(word, points)
    navigate(`/drawing`)
  }

  return (
    <section className='word-choosing-view'>
      <p>It's your turn!</p>
      <p> please choose a word...</p>
      <div className='choose-word'>

        <div className='easy level' onClick={() => { choosingWord(easyWord[0], 1) }}>
          <p>Easy</p>
          <p className='points'>(1 points)</p>
          <p>{easyWord}</p>
        </div>

        <div className='medium level' onClick={() => { choosingWord(mediumWord[0], 3) }}>
          <p>Medium</p>
          <p className='points'>(3 points)</p>
          <p>{mediumWord}</p>
        </div>

        <div className='hard level' onClick={() => { choosingWord(hardWord[0], 5) }}>
          <p>Hard</p>
          <p className='points'>(5 points)</p>
          <p>{hardWord}</p>
        </div>

      </div>
    </section>
  )
}