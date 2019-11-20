import React, { useState, useEffect } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Details() {
  useEffect(() => {}, []);

  const [details, setDetails] = useState([]);

  return (
    <div>
      <h1>Movie Details</h1>
    </div>
  );
}

export default Details;
