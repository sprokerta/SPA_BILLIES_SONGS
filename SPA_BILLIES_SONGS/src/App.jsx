import React from 'react';
import { billieInfo } from './data/billieInfo';
import { albums } from './data/albums';
import AlbumCard from './components/AlbumCard';
import './App.css';

function App() {
    console.log('Information about artist:', billieInfo);
    console.log('Albums:', albums);

    return (
        <div className="App">
            <h1>{billieInfo.name}</h1>
            <img src={billieInfo.photo} alt={billieInfo.name} width="200" />
            <p>{billieInfo.description}</p>
            <h2>Albums:</h2>
            <div className="albums-container">
                {albums.map((album) => (
                    <AlbumCard key={album.id} album={album} />
                ))}
            </div>
        </div>
    );
}

export default App;
