import React from 'react';
import './SongModal.css';

function SongModal({ song, onClose }) {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>
                    ×
                </button>

                <div className="modal-header">
                    <h2>{song.title}</h2>
                    <p className="modal-album">
                        from the album "{song.albumName}"
                    </p>
                </div>

                <div className="modal-lyrics">
                    {song.lyrics.split('\n').map((line, i) => (
                        <p key={i} className="lyrics-line">
                            {line || '\u00A0'}
                        </p>
                    ))}
                </div>
                <div className="modal-footer">
                    <p>{song.duration}</p>
                </div>
            </div>
        </div>
    );
}

export default SongModal;
