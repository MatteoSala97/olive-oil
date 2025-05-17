import logo from './logo.svg';
import './App.css';
import './styles.scss';

import Title from './components/Title.jsx';
import Header from './components/HeaderThingy.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <Title/>
      </header>
    </div>
  );
}

export default App;
