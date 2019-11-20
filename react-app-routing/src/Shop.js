import React, { useState, useEffect } from 'react';
import './App.css';

function Shop() {
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
    <div>
      {data.map(data => (
        <li key={data.episode_id}>
          Episode {data.episode_id} - {data.title}
        </li>
      ))}
    </div>
  );
}

export default Shop;
