import React, { useEffect } from "react";
import store from "./store/store";
import { GET_CHARACTERS, SET_PAGINATION } from "./store/actions";
import { connect } from "react-redux";
import "./App.css";
import Menu from "./components/Menu";
import Characters from "./views/Characters";
import Detail from "./views/Detail";
import { getCharacters } from "./services/getCharacters";

function App(props) {
  const { section, currentPage } = props;
  const numberPattern = /\d+/g;

  useEffect(() => {
    getCharacters(currentPage).then(response => {
      store.dispatch({ type: GET_CHARACTERS, payload: response.results });
      store.dispatch({
        type: SET_PAGINATION,
        payload: {
          currentPage: currentPage,
          nextPage: response.next
            ? response.next.match(numberPattern)[0]
            : null,
          previousPage: response.previous
            ? response.previous.match(numberPattern)[0]
            : null
        }
      });
    });
  }, [currentPage, numberPattern]);

  return (
    <div className="App">
      <Menu />
      <div className="container pb-4 pt-4">
        {
            (section === "HOME" && <Characters />) ||
            (section === "DETAIL" && <Detail />)
        }
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  section: state.section,
  currentPage: state.currentPage
});

export default connect(mapStateToProps)(App);
