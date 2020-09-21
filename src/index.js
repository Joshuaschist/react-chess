import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './components/game.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Game />,
     document.getElementById('root')
);

serviceWorker.register();
