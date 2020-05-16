import React from "react";
import style from "./Maincontent.module.css";
import { NavLink, Route } from "react-router-dom";


const Maincontent = (props) => {

    
  let clLinks = props.clLinksData.map(d => <NavLink to={d.path}>{d.name}</NavLink>);
  let slLinks = props.slLinksData.map(d => <NavLink to={d.path}>{d.name}</NavLink>);
  let ilLinks = props.ilLinksData.map(d => <NavLink to={d.path}>{d.name}</NavLink>);
  let mplLinks = props.mplLinksData.map(d => <NavLink to={d.path}>{d.name}</NavLink>);
  let ccLinks = props.cclLinksData.map(d => <NavLink to={d.path}>{d.name}</NavLink>);
  let commonLinks = props.commonLinksData.map(d => <NavLink to={d.path}>{d.name}</NavLink>);
  let docsLinks = props.docsLinksData.map(d => <NavLink to={d.path}>{d.name}</NavLink>);
    
    

    return (
        <div className={style.wrapper}>
            <div className={style.header}>

                <Route path="/cl">{clLinks}</Route>
                <Route path="/sl">{slLinks}</Route>
                <Route path="/il">{ilLinks}</Route>
                <Route path="/mpl">{mplLinks}</Route>
                <Route path="/cc">{ccLinks}</Route>
                <Route path="/common">{commonLinks}</Route>
                <Route path="/docs">{docsLinks}</Route>

            </div>

            <div className={style.content}>

                

            </div>
        </div>
    );
}


export default Maincontent;