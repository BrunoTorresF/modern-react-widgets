import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';

const URL_BASE = 'https://en.wikipedia.org/w/api.php';

const Search = () => {
  const [term, setTerm] = useState('programming');
  const [results, setResults] = useState([]);

  const getWikiResults = async (term) => {
    const { data } = await axios.get(URL_BASE, {
      params: {
        action: 'query',
        list: 'search',
        origin: '*',
        format: 'json',
        srsearch: term,
      },
    });
    const results = data?.query?.search ?? [];
    setResults(results);
  };

  useEffect(() => {
    if (term) {
      getWikiResults(term);
    }
  }, [term]);

  const handleUserInput = (e) => {
    const { value } = e.target;
    setTerm(value);
  };

  return (
    <div>
      <h2>Search</h2>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            className="input"
            type="text"
            value={term}
            onChange={handleUserInput}
          />
        </div>
      </div>
      <section></section>
    </div>
  );
};

export default Search;
