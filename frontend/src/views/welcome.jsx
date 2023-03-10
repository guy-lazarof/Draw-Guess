import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getActionSocketId } from '../store/socket.id.action';
import { socketService } from './../services/socket.service.js';
import { Waiting } from './waiting';
import { WordChoosing } from './word-choosing';

export function Welcome() {
  const socketId = useSelector(storeState => storeState.socketIdModule.socketId)

  const navigate = useNavigate()
  useEffect(() => {

    socketService.emit('connections');

    socketService.on('login', (data) => {
      getActionSocketId(data)
      socketService.emit('initialUsers', socketId);
    });

    socketService.on('first-navigation', (data) => {
      if (data === 'user1') {
        navigate(`/waiting`)

      }
      else if (data === 'user2') {
        socketService.emit('two-players');
        navigate(`/waiting`)
      }
    });

    return () => {
    }
  }, [])

  return (
    <section className='welcome-view'>

      <div>
        <h1>Welcome! </h1>
        <Waiting />
      </div>

    </section>
  )
}
