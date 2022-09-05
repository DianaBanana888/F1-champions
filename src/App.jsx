import './App.css';
import TableRender from './views/TableRender';
import MediaQuery from 'react-responsive';

function App() {
  return (
    <>
      <MediaQuery maxWidth={699}>
        <img src="header.jpeg" alt="F1-header-image" width="100%" height="100px" />
      </MediaQuery>
      <MediaQuery minWidth={700}>
        <div className="intro">
          <span>
            F1 world champions starting from 2005 until now.
            <br />
            Click on an item to see the list of the winners for every race for the selected year.
          </span>
        </div>
      </MediaQuery>

      <div className="render render-small">
        <TableRender />
      </div>
    </>
  );
}

export default App;
