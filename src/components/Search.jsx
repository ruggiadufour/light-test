import React, { useState, useEffect } from "react";
import SearchIcon from "../assets/images/search.svg";
import { useAppState } from "../context/app";

export default function Search() {
  const { dispatch, state } = useAppState();
  const [searchText, setSearchText] = useState("");

  function handleSearch() {
    if (searchText !== "") {
      const filtered = state.games.filter((game) =>
        game.title.toLowerCase().includes(searchText.toLowerCase())
      );
      dispatch({ type: "setFiltered", payload: filtered });
    }
  }
  function handleChange(e) {
    setSearchText(e.target.value);
  }
  function handleKeyPress(e) {
    if (e.key === "Enter") {
      handleSearch();
    }
  }
  function cleanSearch() {
    dispatch({ type: "setFiltered", payload: state.games });
    setSearchText("");
  }

  useEffect(() => {
    if (searchText === "") {
      cleanSearch();
    }
  }, [searchText]);

  return (
    <div className="search">
      <div className="search-wrapper">
        <input
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
        <button
          hidden={searchText === ""}
          className="input-delete"
          onClick={cleanSearch}
        >
          ❌
        </button>
        <button onClick={handleSearch}>
          <img src={SearchIcon} width="40px" alt="buscar" />
        </button>
      </div>
    </div>
  );
}
