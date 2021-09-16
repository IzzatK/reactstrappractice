import logo from './logo.svg';
import './App.css';
import './bootstrap.css';
import PopupMenu from './PopupMenu'
import SidenavMenu from './SidenavMenu';

function App() {
  return (
    <div className="App">
   
      <div id="popupmenu">
        <PopupMenu/>
      </div>
      <div id="sidenavmenu">
        <SidenavMenu/>
      </div>
      
    </div>
  );
}

export default App;
