import './App.css';
import Todos from './components/Todos';

function App() {
  
  return (
    <div className="App">
      <h1>redux with react</h1>
      <Todos/>
    </div>
  );
}

export default App;

// step1: install packages
// step2: constant define
// step3: async action creator
// step4: reducer
// step5: create store
// step6: provide store from index.js file
// step7: use store using useSelector
// step8: adding css style 