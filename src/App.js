import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const search = async (e) => {
    setQuery(e.target.value);
    const response = await axios.get(`http://localhost:8000/search/${e.target.value}`);
    setResults(response.data);
  };

  return (
    <div>
      <input type="text" value={query} onChange={search} placeholder="Search for a TV show" />
      <ul>
        {results.map(result => (
          <li key={result.id}>{result.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
