import React from 'react';
import './SongLists.css';

function SongList({ album }) {
    return (
        <div className="song-list">
            <div className="album-header">
                <img
                    src={album.cover}
                    alt={album.title}
                    className="album-header-cover"
                />
                <div className="album-header-info">
                    <h2>{album.title}</h2>
                    <p className="album-year">
                        {album.year} * {album.songs.length} songs
                    </p>
                </div>
            </div>
            <div className="songs-container">
                {album.songs.map((song, index) => (
                    <div key={song.id} className="song-item">
                        <span className="song-number">{index + 1} </span>
                        <div className="song-info">
                            <span className="song-title">{song.title}</span>
                            <span className="song-plays">
                                {song.plays} plays
                            </span>
                        </div>
                        <span className="song-duration">{song.duration}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SongList;
