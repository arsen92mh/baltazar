import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Nav/Nav';
import { Route, BrowserRouter, NavLink } from 'react-router-dom';
import Cl from './Content/CL/Cl';
import Il from './Content/IL/Il';
import Sl from './Content/SL/Sl';
import Cc from "./Content/CC/Cc";
import Mpl from "./Content/MPL/Mpl";
import Common from "./Content/Common/Common";
import Docs from "./Content/Documents/Docs";
import Header from './Content/Header/Header';
import Contentpicture from './Content/Contentpicture/Contentpicture';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <div className="App_wrapper">
        <Nav/>
        <div className="content_wrapper">
          <Header/>
          <Contentpicture/>
          <div className="main_content">
          <Route path="/cl" component={Cl}/>
          <Route path="/sl" component={Sl}/>
          <Route path="/il" component={Il}/>
          <Route path="/cc" component={Cc}/>
          <Route path="/mpl" component={Mpl}/>
          <Route path="/common" component={Common}/>
          <Route path="/docs" component={Docs}/>
          </div>
        </div>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
