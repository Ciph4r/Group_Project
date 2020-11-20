import './App.css';
import GroundRnR from './components/GroundRnR'
import { Provider } from 'react-redux'
import {store} from './store/index'

function App() {
  return (
    <Provider store = {store}>
      <div className="App">
          <GroundRnR/>
      </div>
    </Provider>
  );
}

export default App;
