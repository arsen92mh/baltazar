import React from 'react';
import './App.css';
import Nav from './Nav/Nav';
import { Route, BrowserRouter } from 'react-router-dom';
import Header from './Content/Header/Header';
import Contentpicture from './Content/Contentpicture/Contentpicture';
import Maincontent from './Content/Maincontent/Maincontent';
import store from './redux/state';

function App(props) {

  return (
    <BrowserRouter>
      <div className="App">
        <div className="App_wrapper">
          <Nav linkData={props.state.linkData} newSublinkData={props.state.newSublinkData} dispatch={store.dispatch.bind(store)} />
          <div className="content_wrapper">
            <Header />
            <Contentpicture />
            <Maincontent state={props.state} dispatch={store.dispatch.bind(store)}/>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
