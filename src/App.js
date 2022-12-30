
import './App.css';
import Navbar from './components/Navbar';
import profile from "./1663156760981.jpeg"
function App() {
  return (
    <>
      <Navbar />

      <div className="w3-padding-large" id="main">
        <header className="w3-container w3-padding-32 w3-center w3-black" id="home">
          <h1 className="w3-jumbo"><span className="w3-hide-small">I'm</span> Hasindu Sithmin.</h1>
          <p className='w3-xxlarge'>Developer.</p>
          <img src={profile} alt="boy" className="w3-image w3-grayscale-max" width="992" height="1108" />
        </header>
      </div>
    </>
  );
}

export default App;
