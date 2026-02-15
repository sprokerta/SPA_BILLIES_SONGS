import React from 'react';
import { billieInfo } from './data/billieInfo';
import { albums } from './data/albums';
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
            {albums.map((album) => (
                <div key={album.id}>
                    <h3>
                        {album.name} ({album.year})
                    </h3>
                    <img src={album.cover} alt={album.name} width="100" />
                    <p>Songs: {album.songs.length}</p>
                </div>
            ))}
        </div>
    );
}

export default App;
