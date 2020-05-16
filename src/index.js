import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Maincontent from "./Content/Maincontent/Maincontent"

let linkData = [
  { id: 1, path: "/cl", name: "CL" },
  { id: 2, path: "/sl", name: "SL" },
  { id: 3, path: "/il", name: "IL" },
  { id: 4, path: "/mpl", name: "MPL" },
  { id: 5, path: "/cc", name: "CC" },
  { id: 6, path: "/common", name: "Общее" },
  { id: 7, path: "/docs", name: "Документы" }
]

let clLinksData = [
  { id: 1, path: "/cl/anketa", name: "Анкета клиента"},
  { id: 2, path: "/cl/aspr", name: "Сообщения АСПР"},
  { id: 3, path: "/cl/rt", name: "Рабочий телефон"},
  { id: 4, path: "/cl/site", name: "Сайт организации"},
  { id: 5, path: "/cl/komment", name: "Комментарии/СП"},
  { id: 6, path: "/cl/cldocs", name: "Документы"},
  { id: 7, path: "/cl/inform", name: "Информационные источники"},
  { id: 8, path: "/cl/cf", name: "CoreFinans"}
]

let slLinksData = [
  { id: 1, path: "/sl/slvr", name: "SL ВР"},
  { id: 2, path: "/sl/factoring", name: "Факторинг"}
]

let ilLinksData = [
  { id: 1, path: "/il/ilvr", name: "IL ВР"},
  { id: 2, path: "/il/il2", name: "IL 2"}
]

let mplLinksData = [
  { id: 1, path: "/mpl/mpl1", name: "MPL1"},
  { id: 2, path: "/mpl/mpl2", name: "MPL2"}
]

let cclLinksData = [
  { id: 1, path: "/cc/cc1", name: "cc1"},
  { id: 2, path: "/cc/cc2", name: "cc1"}
]

let commonLinksData = [
  { id: 1, path: "/common/common1", name: "common1"},
  { id: 2, path: "/common/common2", name: "common2"}
]

let docsLinksData = [
  { id: 1, path: "/docs/docs1", name: "docs1"},
  { id: 2, path: "/docs/docs2", name: "docs2"}
]




let routeData = [
  { id: 1, path: "/cl", comp: <Maincontent clLinksData={clLinksData}/> },
  { id: 2, path: "/sl", comp: <Maincontent slLinksData={slLinksData}/> },
  { id: 3, path: "/il", comp: <Maincontent ilLinksData={ilLinksData}/> },
  { id: 4, path: "/cc", comp: <Maincontent cclLinksData={cclLinksData}/> },
  { id: 5, path: "/mpl", comp: <Maincontent mplLinksData={mplLinksData}/> },
  { id: 6, path: "/common", comp: <Maincontent commonlLinksData={commonLinksData}/> },
  { id: 7, path: "/docs", comp: <Maincontent docslLinksData={docsLinksData}/> },
]

ReactDOM.render(
  
  <React.StrictMode>
    <App linkData={linkData} routeData={routeData} clLinksData={clLinksData} slLinksData={slLinksData} ilLinksData={ilLinksData} cclLinksData={cclLinksData} mplLinksData={mplLinksData} commonLinksData={commonLinksData} docsLinksData={docsLinksData}/>
  </React.StrictMode>,
  document.getElementById('root')
);





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
