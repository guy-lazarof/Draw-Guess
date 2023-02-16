import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { PropagateLoader } from 'react-spinners';

import { getActionChooseWord } from '../store/choose.word.action';
import { getActionDraw } from '../store/draw.action';
import { getActionScore } from '../store/score.action';
import { socketService } from './../services/socket.service';

// import { getActionSocketId } from '../store/socket.id.action';
export function Waiting() {
  const socketId = useSelector(storeState => storeState.socketIdModule.socketId)
  const draw = useSelector(storeState => storeState.drawModule.draw)

  const navigate = useNavigate()

  useEffect(() => {
    socketService.on('word-choosing', () => {
      if (socketId) {
        navigate(`/word-choosing`)
      }
    });

    socketService.on('get-word', (data) => {
      getActionChooseWord(data.word, data.points)
    });

    socketService.on('load-draw', (data) => {
      getActionDraw(data)
      navigate(`/guessing`)

    });


    return () => {
      // socket.off('connect');
      // socket.off('disconnect');
      socketService.off('load-draw');
    };
  }, [])
  // socketId
  return (
    <section className='waiting-view'>
      <p className="loader-content">Waiting to your partner</p>
      <div className="loader"><PropagateLoader color="#03ffc3" /></div>
    </section>
  )
}