import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { PropagateLoader } from 'react-spinners';

import { socketService } from './../services/socket.service';

// import { getActionSocketId } from '../store/socket.id.action';
export function Waiting() {
  const socketId = useSelector(storeState => storeState.socketIdModule.socketId)
  const navigate = useNavigate()

  useEffect(() => {
    socketService.on('word-choosing', () => {
      if (socketId) {
        navigate(`/word-choosing`)
      }
    });

    socketService.on('load-draw', () => {
      navigate(`/guessing`)

    });

  }, [])
  // socketId
  return (
    <section className='waiting-view'>
      <p className="loader-content">Waiting to your partner</p>
      <div className="loader"><PropagateLoader color="#03ffc3" /></div>
    </section>
  )
}