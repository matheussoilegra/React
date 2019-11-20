import React, { useState, useEffect } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Movie() {
  useEffect(() => {
    fetchData();
  }, []);

  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch('https://swapi.co/api/films/');
    const data = await response.json();
    // console.log(data.results);
    setData(data.results);
  };

  return (
    <ul>
      {data.map(data => (
        <li key={data.episode_id}>
          <Link to={`/movie/${data.episode_id}`}>
            Episode {data.episode_id} - {data.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Movie;
