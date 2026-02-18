import React from 'react';
import './AlbumCard.css';

function AlbumCard({ album }) {
    return (
        <div className="album-card">
            <img src={album.cover} alt={album.title} className="album-cover" />
            <div className="album-info">
                <h3 className="album-title">{album.title}</h3>
                <p className="album-year">{album.year}</p>
                <p className="album-songs">{album.songs.length} songs</p>
            </div>
        </div>
    );
}

export default AlbumCard;
