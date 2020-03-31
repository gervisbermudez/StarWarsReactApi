import React, { useState } from "react";
import store from "../../store/store";
import { from, BehaviorSubject } from "rxjs";
import { searchCharacters } from "../../services/getCharacters";
import { useObservable } from "../../utils/handlers/userObservable";
import {
  GET_CHARACTERS,
  SET_PAGINATION,
  SET_SEARCH
} from "../../store/actions";
import {
  filter,
  mergeMap,
  debounceTime,
  distinctUntilChanged
} from "rxjs/operators";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSearch } from "@fortawesome/free-solid-svg-icons";

let previousVal = "";
let searchSubject = new BehaviorSubject("");
let searchResultObservable = searchSubject.pipe(
  filter(val => val.length > 1),
  debounceTime(750),
  distinctUntilChanged(),
  mergeMap(val => {
    if (previousVal !== val) {
      previousVal = val;
      store.dispatch({ type: GET_CHARACTERS, payload: [] });
      return from(searchCharacters(val));
    } else {
      return from([]);
    }
  })
);

function SearchBar() {
  const [search, setSearch] = useState("");

  const setResults = response => {
    store.dispatch({ type: GET_CHARACTERS, payload: response.results });
    store.dispatch({ type: SET_SEARCH, payload: true });
    store.dispatch({
      type: SET_PAGINATION,
      payload: {
        currentPage: 1,
        nextPage: null,
        previousPage: null
      }
    });
  };

  useObservable(searchResultObservable, setResults);

  const handleSearchChange = e => {
    const newValue = e.target.value;
    setSearch(newValue);
    searchSubject.next(newValue);
  };

  return (
    <div className="input-group mb-3 float-right">
      <input
        type="text"
        value={search}
        onChange={handleSearchChange}
        className="form-control"
        placeholder="Search character..."
        aria-label="Recipient's username"
        aria-describedby="button-addon2"
        id="search"
      />
      <div className="input-group-append">
        <button
          onClick={handleSearchChange}
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
        >
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
