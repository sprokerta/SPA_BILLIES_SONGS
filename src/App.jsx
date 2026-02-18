import React, { useState } from 'react';
import { billieInfo } from './data/billieInfo';
import { albums } from './data/albums';
import AlbumCard from './components/AlbumCard';
import SongList from './components/SongsList';
import SongModal from './components/SongModal';
import './App.css';

function App() {
    const [selectedAlbum, setSelectedAlbum] = useState(null);
    const [selectedSong, setSelectedSong] = useState(null);

    const handleAlbumClick = (album) => {
        setSelectedAlbum(album);
        setSelectedSong(null);
    };

    const handleBackClick = () => {
        setSelectedAlbum(null);
        setSelectedSong(null);
    };

    const handleSongClick = (song) => {
        setSelectedSong(song);
    };

    const handleCloseModal = () => {
        setSelectedSong(null);
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

                    <SongList
                        album={selectedAlbum}
                        onSongClick={handleSongClick}
                    />
                </>
            )}

            {selectedSong && (
                <SongModal song={selectedSong} onClose={handleCloseModal} />
            )}
        </div>
    );
}

export default App;
