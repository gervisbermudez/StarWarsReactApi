import React from "react";
import { connect } from "react-redux";
import Card from "../../components/Card";
import Spinner from "../../components/Spinner";
import Pagination from "../../components/Pagination";

function Characters(props) {
  let { characters } = props;

  characters = characters.map((value, index) => (
    <Card key={index} index={index} movie={value} />
  ));

  return (
    <div>
      {characters.length ? (
        <div className="row">
          <div className="col-12 pb-5">
            <div className="card-columns">{characters}</div>
          </div>
          <div className="col-12">
            <Pagination />
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
}

const mapStateToProps = state => ({
  characters: state.characters
});

export default connect(mapStateToProps)(Characters);
