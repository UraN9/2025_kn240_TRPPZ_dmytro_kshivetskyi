import logo from './logo.svg';
import './App.css';
import MyFunctionComponent from "./MyFunctionComponent";
import MyClassComponent from "./MyClassComponent";
import ChildComponent from "./ChildComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
            <h1>Мій React-проєкт</h1>
            <p>Ласкаво просимо!</p>
            <MyFunctionComponent />
            <MyClassComponent />
        </div>
        <div>
            <h1>React State & Props</h1>
            <ChildComponent initialValue={0} />
            <ChildComponent initialValue={10} />
            <ChildComponent initialValue={100} />
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
