import React, { useState } from "react";
import "./SearchBar.css";
import { useHistory } from "react-router-dom";

function SearchBar(props) {
  const [search, setInput] = useState("");
  let history = useHistory();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    history.push({ pathname: "/", search: `?q=${search}` });
    // alert(`Submitting search ${search}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="SearchItem">
        <div className="SearchBar">
          <label>
            <input
              type="Search"
              value={search}
              onChange={(e) => setInput(e.target.value)}
            />
          </label>
        </div>
        <div className="SearchSubmit">
          <input type="submit" onChange={handleSubmit} value="Search" />
        </div>
      </div>
    </form>
  );
}

export default SearchBar;
