import React, { useState } from 'react';
import './SongsList.css';

function SongList({ album, onSongClick }) {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredSongs = album.songs.filter((song) =>
        song.title.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    return (
        <div className="songs-list">
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
            <input
                type="text"
                placeholder="Search songs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
            />
            <div className="songs-container">
                {filteredSongs.length > 0 ? (
                    filteredSongs.map((song, index) => (
                        <div
                            key={song.id}
                            className="song-item"
                            onClick={() =>
                                onSongClick({
                                    ...song,
                                    albumName: album.title,
                                })
                            }
                        >
                            <span className="song-number">{index + 1} </span>
                            <div className="song-info">
                                <span className="song-title">{song.title}</span>
                                <span className="song-plays">
                                    {song.plays} plays
                                </span>
                            </div>
                            <span className="song-duration">
                                {song.duration}
                            </span>
                        </div>
                    ))
                ) : (
                    <p className="no-matches">No matches found</p>
                )}
            </div>
        </div>
    );
}

export default SongList;
