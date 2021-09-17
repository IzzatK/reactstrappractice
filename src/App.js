import logo from './logo.svg';
import './App.css';
import './bootstrap.css';
import PopupMenu from './PopupMenu'
import SidenavMenu from './SidenavMenu';
import TopnavMenu from './TopnavMenu';
import SigninCard from './SigninCard'

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

    <div className="container offset-xl-4 col-xl-4 col-xs-4 col-sm-4">
      <div className="row">
        <SigninCard/>

      </div>
    </div>
      
    </div>
  );
}

export default App;
