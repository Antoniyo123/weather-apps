import logo from './logo.svg';
import './App.css';
import Weather from './weather';
import PlayerVideo from './PlayerVideo'

function App() {
  return (
    <div className="App">
      <Weather/>
      <div className="video-container">
        <PlayerVideo thumbnailSrc={require('./img/city.jpg')} videoSrc={require('./video/video-satu.mp4')} />
        <PlayerVideo thumbnailSrc={require('./img/earth.jpg')} videoSrc={require('./video/video-satu.mp4')} />
        <PlayerVideo thumbnailSrc={require('./img/glass.jpg')} videoSrc={require('./video/video-satu.mp4')} />
      </div>
      </div>
  );
}

export default App;
