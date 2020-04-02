import React from "react";
import { connect } from "react-redux";
import store from "../../store/store";
import {
  CHANGE_SECTION
} from "../../store/actions";
import SearchBar from "../../components/SearchBar";
import resetHome from "../../utils/handlers/homeHandler";

function Menu(props) {
  const { section } = props;

  const goToSection = section => {
    store.dispatch({ type: CHANGE_SECTION, payload: section });
  };

  const toHome = () => {
    resetHome();
    goToSection("HOME");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a href="#!" className="navbar-brand" onClick={toHome}>
        The Star Wars API
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className={`nav-item ${section === "HOME" ? "active" : ""}`}>
            <a href="#!" className="nav-link pointer" onClick={toHome}>
              Home
            </a>
          </li>
        </ul>
      </div>
      <div className="col-3">
        <SearchBar />
      </div>
    </nav>
  );
}

const mapStateToProps = state => ({
  section: state.section,
  currentPage: state.currentPage
});

export default connect(mapStateToProps)(Menu);
