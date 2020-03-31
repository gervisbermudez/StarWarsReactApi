import React from "react";
import { connect } from "react-redux";
import Card from "../../components/Card";
import Spinner from "../../components/Spinner";
import Pagination from "../../components/Pagination";
import store from "../../store/store";
import { GET_BACK } from "../../store/actions";
import resetHome from "../../utils/handlers/homeHandler";


function Characters(props) {
  let { characters, isSearchResult } = props;

  characters = characters.map((value, index) => (
    <Card key={index} index={index} movie={value} />
  ));

  const back = () => {
    resetHome();
    store.dispatch({ type: GET_BACK });
  };
  
  return (
    <div>
      {characters.length ? (
        <div className="row">
          <div className="col-12 pb-5">
            {isSearchResult ? <h2 className="pb-4">Resultados: </h2> : ""}
            <div className="card-columns">{characters}</div>
          </div>
          {isSearchResult ? (<div className="col-md-12 align-self-center pt-4">
            <button onClick={back} className="btn btn-primary">
              Volver
            </button>
          </div>) : ''}
          <div className="col-12">{!isSearchResult ? <Pagination /> : ""}</div>
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
}

const mapStateToProps = state => ({
  characters: state.characters,
  isSearchResult: state.isSearchResult,
  currentPage: state.currentPage
});

export default connect(mapStateToProps)(Characters);
