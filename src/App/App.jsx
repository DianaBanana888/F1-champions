import React from 'react';
import './App.css';
import MediaQuery from 'react-responsive';
import TableRender from '../views/TableRender';

function App() {
  return (
    <>
      <MediaQuery maxWidth={699}>
        <img src="header.jpeg" alt="F1-header" width="100%" height="100px" />
      </MediaQuery>
      <MediaQuery minWidth={700}>
        <div className="intro">
          F1 world champions starting from 2005 until now.
          <br />
          Click on an item to see the list of the winners for every race for the selected year.
        </div>
      </MediaQuery>
      <div className="render">
        <TableRender />
      </div>
    </>
  );
}

export default App;
