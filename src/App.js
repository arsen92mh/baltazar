import React from 'react';
import './App.css';
import Nav from './Nav/Nav';
import {  BrowserRouter } from 'react-router-dom';
import Header from './Content/Header/Header';
import Contentpicture from './Content/Contentpicture/Contentpicture';
import Maincontent from './Content/Maincontent/MaincontentNew';

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="App_wrapper">
          <Nav/>
          <div className="content_wrapper">
            <Header />
            <Contentpicture />
            <Maincontent/>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
