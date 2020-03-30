import React from "react";
import store from "../../store/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import {
  REMOVE_CHARACTER,
  CHANGE_SECTION,
  SET_DETAILS
} from "../../store/actions";

function Card(props) {
  const { movie, index } = props;

  const remove = index => {
    store.dispatch({ type: REMOVE_CHARACTER, payload: index });
  };

  const toDetail = () => {
    store.dispatch({ type: CHANGE_SECTION, payload: "DETAIL" });
    store.dispatch({ type: SET_DETAILS, payload: movie });
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title pointer" onClick={toDetail}>
          {movie.name}
        </h5>
        <p className="card-text">
          <b>Gender:</b> {movie.gender} <br />
          <b>Height:</b> {movie.height} <br />
        </p>
        <button onClick={() => remove(index)} className="btn btn-primary">
          <FontAwesomeIcon icon={faTrash} /> Remove
        </button>
      </div>
    </div>
  );
}

export default Card;
