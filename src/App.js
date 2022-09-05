import logo from './logo.svg';
import './App.css';
const totoTitle = "Facebook"
const totoDes ="Facebook for all"
const date = new date()
const monsth = date.getmonth()
const css ={
  backgroundColor:"red"
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <h1 style={css}>This is mine</h1>
          <h3>Hi</h3>
          <p>{totoDes}</p>
          <p> {monsth}</p>
  
         
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
