import "./styles.css";
import "./single-sample.js";

export default function App() {
  return (
    <div className="App">
      <h1>Playlist</h1>
      <div className="playlist-container">
        <div className="playlist-item">
          <img
            className="playlist-image"
            src="https://upload.wikimedia.org/wikipedia/en/4/45/SECOND_CHANCE_NOAH_COVER_ALBUM.jpg"
          />
          <div className="playlist-content">
            <h2 className="playlist-artist"> Hero </h2>
            <h3 className="playlist-song">Hero - Second Chance</h3>
          </div>
          <div className="playlist-action">
            <button className="playlist-button">Select</button>
          </div>
        </div>
      </div>
    </div>
  );
}
