import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Canvas from '../cmps/canvas';
import { socketService } from '../services/socket.service';
import { getActionScore } from '../store/score.action';

export function Drawing() {
  const score = useSelector(storeState => storeState.scoreModule.score)
  const draw = useSelector(storeState => storeState.drawModule.draw)
  const navigate = useNavigate()

  useEffect(() => {
    socketService.on('add-points-drawer', (points) => {
      getActionScore(points)
    });

  }, [])


  function onSendDraw() {
    socketService.emit('send-draw', draw)
    navigate(`/waiting`)
  }

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