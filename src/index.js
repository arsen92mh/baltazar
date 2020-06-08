import './index.css';
import store from "./redux/state.js";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let rerenderWholeDom = (state) => {

  ReactDOM.render(

    <React.StrictMode>
      <App store={store} state={state} />
    </React.StrictMode>,
    document.getElementById('root')

  );
}

rerenderWholeDom(store.getState());

store.subscribe(rerenderWholeDom);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


