import { useSelector } from 'react-redux';

import Canvas from '../cmps/canvas';

export function Drawing() {
  function onSendDraw() {
    console.log('score:', score)
  }
  const score = useSelector(storeState => storeState.scoreModule.score)

  return (
    <section className='drawing-view'>
      <Canvas />
      <div>
        <p className='score-counter'>score:{score}</p>
        <button onClick={onSendDraw} className='send-btn'>send</button>
      </div>
    </section>
  )
}