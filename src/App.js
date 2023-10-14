import logo from './logo.svg';
import Header from './components/Header';
import './App.css';
import './assets/css/style.css';
import LeftMobileMenu from './components/LeftMobileMenu';
import ProjectListMain from './components/ProjectListMain';

function App() {
  return (
    <div className="App">
      <LeftMobileMenu />
      <div className='react-content'>
        <Header />
        <ProjectListMain />
      </div>
    </div>
  );
}

export default App;