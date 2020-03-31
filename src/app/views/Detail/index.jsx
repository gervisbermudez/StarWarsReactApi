import React from "react";
import { connect } from "react-redux";
import store from "../../store/store";
import { GET_BACK } from "../../store/actions";
import Spinner from "../../components/Spinner";

function Detail(props) {
  const { detail } = props;
  const back = () => {
    store.dispatch({ type: GET_BACK });
  };
  return (
    <div className="movie-detail">
      {!detail ? (
        <Spinner />
      ) : (
        <div className="container">
          <div className="row">
            <div className="col-md-12 align-self-center pb-4">
              <h2>{detail.name}</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 align-self-center pb-2">
              <ul>
                <li>
                  <b>Height: </b> {detail.height}
                </li>
                <li>
                  <b>Mass: </b> {detail.mass}
                </li>
                <li>
                  <b>Hair color: </b> {detail.hair_color}
                </li>
                <li>
                  <b>Skin color: </b> {detail.skin_color}
                </li>
                <li>
                  <b>Eye color: </b> {detail.eye_color}
                </li>
                <li>
                  <b>Birth year: </b> {detail.birth_year}
                </li>
                <li>
                  <b>Gender: </b> {detail.gender}
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 align-self-center pt-4">
              <button onClick={back} className="btn btn-primary">
                Volver
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = state => ({
  detail: state.detail
});

export default connect(mapStateToProps)(Detail);
