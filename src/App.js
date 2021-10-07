import './App.css';
import Sidebar from './Sidebar.js';
import Main from './Main.js';

function App() {     
  return (
    <div className="App">
      {/* left sidebar */}
      <div className="app_sidebar">
        <Sidebar/>
      </div>
      {/* main body */}
      <div className="app_main">
        <Main/>
      </div>
    </div>
  );
}

export default App;
