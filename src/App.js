import logo from './logo.svg';
import './App.css';
import Footer from './components/Navigation';
import Navigation from './components/Navigation';
import MainLP from './components/MainLP';

function App() {
  return (
    <div className="App">
      <Navigation />
      <MainLP />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Testing 123
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
      <Footer />
    </div>
  );
}

export default App;
