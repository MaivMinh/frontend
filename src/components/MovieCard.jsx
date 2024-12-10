import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div style={styles.card}>
      <div style={styles.posterWrapper}>
        <img src={movie.poster} alt={movie.title} style={styles.poster} />
      </div>
      <div style={styles.details}>
        <h3 style={styles.title}>{movie.title}</h3>
        <p style={styles.year}>{movie.year}</p>
      </div>
    </div>
  );
};

export default MovieCard;

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    width: '220px',
    overflow: 'hidden',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
  },
  posterWrapper: {
    position: 'relative',
    width: '100%',
    height: '330px',
    overflow: 'hidden',
  },
  poster: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  details: {
    padding: '10px',
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  title: {
    fontSize: '18px',
    margin: '5px 0',
  },
  year: {
    fontSize: '14px',
    color: '#555',
  },
};

