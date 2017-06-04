import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import registerServiceWorker from './Components/registerServiceWorker';
import './style/index.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
