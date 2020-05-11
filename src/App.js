import React, { useState } from "react";
import "./styles.css";
import Search from "./components/Search";
import axios from "axios";

export default function App() {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: ""
  });

  const apiUrl = "https://www.omdbapi.com/?apikey=dfe6d885&";

  const search = e => {
    if (e.key === "Enter") {
      axios(apiUrl + "&s=" + state.s).then(({ data }) => {
        let results = data.Search;
        setState(prevState => {
          return { ...prevState, results: results };
        });
      });
    }
  };

  const handleInput = e => {
    let s = e.target.value;
    setState(prevState => {
      return { ...prevState, s: s };
    });
  };

  return (
    <div className="App">
      <h1>Movie Collections</h1>
      <Search handleInput={handleInput} search={search} />
    </div>
  );
}
