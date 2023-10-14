import logo from './logo.svg';
import Header from './components/Header';
import './App.css';
import './assets/css/style.css';
import LeftMobileMenu from './components/LeftMobileMenu';

function App() {
  return (
    <div className="App">
      <LeftMobileMenu />
      <Header />
    </div>
  );
}

export default App;