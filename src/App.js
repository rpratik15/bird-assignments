
import './App.css';
// import Notepad from './Components/Notepad'
import Adddata from './Components/Add/Adddata';
import Listdata from './Components/List/Listdata';

function App() {
  return (
    <div className="App">
      
     <Adddata/>
     <Listdata/>
     {/* <Notepad/> */}
    </div>
  );
}

export default App;
