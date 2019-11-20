import React, { useState, useEffect } from 'react';
import './App.css';

function MovieDetails({ match }) {
  useEffect(() => {
    fetchDetails();
    console.log(match);
  }, []);

  const [details, setDetails] = useState([]);

  const fetchDetails = async () => {
    const fetchDetails = await fetch(
      `https://swapi.co/api/films/${match.params.episode_id}`
    );
    const details = await fetchDetails.json();
    setDetails(details);
    console.log(details);
  };

  return (
    <ul>
      <li>
        Episode {details.episode_id} - {details.title}
      </li>
      <li>Director {details.director}</li>
      <li>Producer: {details.producer}</li>
      <li>Release Date: {details.release_date}</li>
      <li>
        <p>{details.opening_crawl}</p>
      </li>
      <li>Characters</li>
      <li>Planets</li>
      <li>Vehicles</li>
      <li>Species</li>
      <li>Starships</li>
    </ul>
  );
}

export default MovieDetails;
