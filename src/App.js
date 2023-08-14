// import logo from './logo.svg';
import './App.css';
import './Footer';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Resume from './Resume';
import Footer from './Footer';
import image from './eevee.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={image} alt="none" className='eeveeImg'></img>
        <h1 className='myName'>Leng Chang</h1>
        <nav className='navBar'>
          <ul>
            <a className='siteNav' href="#AboutMe">About Me</a>
            <a className='siteNav' href="#Portfolio">Portfolio</a>
            <a className='siteNav' href="#Resume">Resume</a>
            <a className='siteNav' href="#Contact">Contact</a>
          </ul>
        </nav>
      </header>
      <AboutMe />
      <Portfolio />
      <Resume />
      <Footer />
    </div>
  );
}

export default App;
