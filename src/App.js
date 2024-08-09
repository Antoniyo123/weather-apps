import logo from './logo.svg';
import './App.css';
import Weather from './weather';
import PlayerVideo from './PlayerVideo'
import InteractiveContent from './InteractiveContent';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Weather/>
      <Navbar />
      <div className="video-container">
        <PlayerVideo thumbnailSrc={require('./img/city.jpg')} videoSrc={require('./video/video-satu.mp4')} />
        <PlayerVideo thumbnailSrc={require('./img/earth.jpg')} videoSrc={require('./video/video-satu.mp4')} />
        <PlayerVideo thumbnailSrc={require('./img/glass.jpg')} videoSrc={require('./video/video-satu.mp4')} />
      </div>
      <InteractiveContent />
      <div style={{ height: '100vh', backgroundColor: '#f0f0f0' }}>
        <h1>Scroll down to see navbar change</h1>
      </div>
      </div>
  );
}

export default App;
