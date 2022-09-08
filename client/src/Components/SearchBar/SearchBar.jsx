import React, { useState } from 'react';
import { Search } from 'react-bootstrap-icons';
import './SearchBar.css';
import { changePagina } from '../../Redux/actions/actions';
import { useDispatch } from 'react-redux';

function SearchBar({ setFilter }) {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  function handleInput(e) {
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setFilter('search', input);
    dispatch(changePagina(1));
  }

  return (
    <div className="pt-4">
      <input
        className="search__input ps-2"
        type="text"
        placeholder="Buscar"
        value={input}
        onChange={handleInput}
        onKeyDown={(e) => {
          if (e.key === 'Enter') handleSubmit(e);
        }}
      />

      <button
        className="search__btn"
        name="search"
        type="submit"
        onClick={handleSubmit}
      >
        <Search />
      </button>
    </div>
  );
}

export default SearchBar;
