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
    <div className="Search">
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="Search"
            value={search}
            onChange={(e) => setInput(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default SearchBar;
