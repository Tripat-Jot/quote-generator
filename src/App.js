import logo from './logo.svg';
import './App.css';
import './components/QuoteGenerateApp'
import QuoteGenerateApp from './components/QuoteGenerateApp';

function App() {
  return (
    <div className="App">
      <h1>Random Quote Generator</h1>
        <QuoteGenerateApp/>
    </div>
  );
}

export default App;
