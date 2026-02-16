import React, { useState } from 'react';
import { billieInfo } from './data/billieInfo';
import { albums } from './data/albums';
import AlbumCard from './components/AlbumCard';
import SongList from './components/SongsList';
import './App.css';

function App() {
    const [selectedAlbum, setSelectedAlbum] = useState(null);

    console.log('Information about artist:', billieInfo);
    console.log('Albums:', albums);

    const handleAlbumClick = (album) => {
        setSelectedAlbum(album);
    };

    const handleBackClick = () => {
        setSelectedAlbum(null);
    };

    return (
        <div className="App">
            <h1>{billieInfo.name}</h1>
            <img src={billieInfo.photo} alt={billieInfo.name} width="200" />
            <p>{billieInfo.description}</p>
            {!selectedAlbum ? (
                <>
                    <h2>Albums:</h2>
                    <div className="albums-container">
                        {albums.map((album) => (
                            <div
                                key={album.id}
                                onClick={() => handleAlbumClick(album)}
                                style={{ cursor: 'pointer' }}
                            >
                                {' '}
                                <AlbumCard album={album} />
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <>
                    <button onClick={handleBackClick} className="back-button">
                        Back to albums
                    </button>
                    <h3>{selectedAlbum.name}</h3>
                    <SongList album={selectedAlbum} />
                </>
            )}
        </div>
    );
}

export default App;
