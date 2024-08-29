import './App.css';
import Carosal from './components/carosal/carosal';
import Details from './components/details/details';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Home from './landing-page/home';

function App() {
  return (
    <div style={{
      height: '100vh', backgroundColor: 'rgb(18 18 18 / 1)', overflowX: 'hidden', display: 'flex',
      flexDirection: 'column'
    }}>
      <div><Header /></div>
      <div>
        <Home />
      </div>
      <div>
        <video width="100%" height="auto" autoPlay loop muted playsInline >
          <source src="/images/Linea_Hype-video.mp4" type="video/mp4" />
        </video>
      </div>
      <div>
        <Carosal />
      </div>
      <div>
        <Details />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
