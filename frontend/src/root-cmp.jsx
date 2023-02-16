import './assets/styles/main.scss';

import { useEffect, useState } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import { AppFooter } from './cmps/app-footer';
import { AppHeader } from './cmps/app-header';
import { socket, socketService } from './services/socket.service.js';
import { About } from './views/about';
import { Drawing } from './views/drawing';
import { Guessing } from './views/guessing';
import { Waiting } from './views/waiting';
import { Welcome } from './views/welcome';
import { WordChoosing } from './views/word-choosing';

export function RootCmp() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [usersTest, setUsersTest] = useState(0);

  function connections() {
    socketService.emit('connections');
  }

  return (
    <div className="App">
      < Router >

        <section className="main-layout app">
          <AppHeader />
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/drawing" element={<Drawing />} />
            <Route path="/guessing" element={<Guessing />} />
            <Route path="/waiting" element={<Waiting />} />
            <Route path="/word-choosing" element={<WordChoosing />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <AppFooter />
        </section>
      </Router >
    </div>
  );
}


