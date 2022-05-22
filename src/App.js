
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Ccomponent from './component/Ccomponent';
import Fcomponent from './component/Fcomponent';
import Counter from './component/Counter';


function App() {
  return (

    <div className="App" >
        <h1>Hello World</h1>
        <ul>
          <li><h1>ReactJs</h1></li>
          <li><h1>Git</h1></li>
        </ul>
        <Ccomponent />
        <Fcomponent />
        <Counter />
    </div>
  );
}

export default App;
