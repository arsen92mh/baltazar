import React from 'react';
import './App.css';
import Nav from './Nav/Nav';
import { Route, BrowserRouter } from 'react-router-dom';
import Header from './Content/Header/Header';
import Contentpicture from './Content/Contentpicture/Contentpicture';
import MaincontentContainer from './Content/Maincontent/MaincontentContainer';
import store from './redux/redux-store';

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="App_wrapper">
          <Nav/>
          <div className="content_wrapper">
            <Header />
            <Contentpicture />
            <MaincontentContainer state={props.state} dispatch={store.dispatch.bind(store)}/>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
