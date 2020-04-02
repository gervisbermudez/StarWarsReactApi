import React from "react";
import { connect } from "react-redux";
import Card from "../../components/Card";
import Spinner from "../../components/Spinner";
import Pagination from "../../components/Pagination";
import store from "../../store/store";
import { GET_BACK, SET_SHOWLOADING } from "../../store/actions";
import resetHome from "../../utils/handlers/homeHandler";

const filterCharacters = (characters, trash) => {
  return characters.filter(value => {
    if (trash.length === 0) {
      return true;
    }
    return !trash.includes(value.name);
  });
};

function Characters(props) {
  let { characters, isSearchResult, showLoading } = props;
  
  characters = characters.map((value, index) => (
    <Card key={index} index={index} character={value} />
  ));

  const back = () => {
    store.dispatch({ type: SET_SHOWLOADING, payload: true });
    store.dispatch({ type: GET_BACK });
    resetHome();
  };

  if (isSearchResult && characters.length === 0) {
    showLoading = false;
  }

  return (
    <div>
      {characters.length ? (
        <div className="row">
          <div className="col-12 pb-5">
            {isSearchResult ? <h2 className="pb-4">Resultados: </h2> : ""}
            <div className="card-columns">{characters}</div>
          </div>
          {isSearchResult ? (
            <div className="col-md-12 align-self-center pt-4">
              <button onClick={back} className="btn btn-primary">
                Volver
              </button>
            </div>
          ) : (
            ""
          )}
          <div className="col-12">{!isSearchResult ? <Pagination /> : ""}</div>
        </div>
      ) : showLoading ? (
        <Spinner />
      ) : (
        characters.length === 0 ? (
          <div className="col-md-12 align-self-center pt-4">
            <h4>No hay resultados</h4>
            <button onClick={back} className="btn btn-primary">
              Volver
            </button>
          </div>
        ) : ''
      )}
    </div>
  );
}

const mapStateToProps = state => ({
  characters: filterCharacters(state.characters, state.trash),
  isSearchResult: state.isSearchResult,
  currentPage: state.currentPage,
  trash: state.trash,
  showLoading: state.showLoading
});

export default connect(mapStateToProps)(Characters);
