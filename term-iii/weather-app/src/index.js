import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; //if importing a js file, we can leave out the .js extension
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
