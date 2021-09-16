import logo from './logo.svg';
import './App.css';
import './bootstrap.css';
import PopupMenu from './PopupMenu'
import SidenavMenu from './SidenavMenu';
import TopnavMenu from './TopnavMenu';

function App() {
  return (
    <div className="App">
   <div className="container" id="popupmenocontainer">
      <div id="popupmenu">
        <PopupMenu/>
      </div>
      </div>
      {/* wrap container around the sidenavmenu to add "left sided offset" */}
      {/* <div id="sidenavmenu">
        <SidenavMenu/>
      </div> */}
    <div className="container" id="topnavmenu">
      <TopnavMenu/>
    </div>
      
    </div>
  );
}

export default App;
