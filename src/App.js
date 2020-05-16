import React from 'react';
import './App.css';
import Nav from './Nav/Nav';
import { Route, BrowserRouter } from 'react-router-dom';
import Header from './Content/Header/Header';
import Contentpicture from './Content/Contentpicture/Contentpicture';
import Maincontent from './Content/Maincontent/Maincontent';




function App(props) {

  return (
    <BrowserRouter>
      <div className="App">
        <div className="App_wrapper">
          <Nav linkData={props.linkData} />
          <div className="content_wrapper">
            <Header />
            <Contentpicture />
            <Maincontent routeData={props.routeData} clLinksData={props.clLinksData} slLinksData={props.slLinksData} ilLinksData={props.ilLinksData} cclLinksData={props.cclLinksData} mplLinksData={props.mplLinksData} commonLinksData={props.commonLinksData} docsLinksData={props.docsLinksData}/>
          </div>
        </div>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
