import React from "react";
import { connect } from "react-redux";
import { SET_PAGINATION } from "../../store/actions";
import store from "../../store/store";

function Pagination(props) {
  let { currentPage, previousPage, nextPage } = props;

  const viewPage = function(page) {
    page = Number.parseInt(page);
    if (page === 1) {
      nextPage = 2;
      previousPage = null;
    } else {
      nextPage = page + 1;
      previousPage = page - 1;
    }

    store.dispatch({
      type: SET_PAGINATION,
      payload: {
        currentPage: page,
        nextPage: nextPage,
        previousPage: previousPage
      }
    });
  };

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        <li className={"page-item" + (previousPage ? "" : " disabled")}>
          <a
            className="page-link"
            href="#!"
            onClick={() => {
              viewPage(previousPage);
            }}
          >
            Previous
          </a>
        </li>
        <li className="page-item active">
          <a
            className="page-link"
            href="#!"
            onClick={() => {
              viewPage(currentPage);
            }}
          >
            {currentPage}
          </a>
        </li>
        <li className="page-item">
          <a
            className="page-link"
            href="#!"
            onClick={() => {
              viewPage(currentPage + 1);
            }}
          >
            {currentPage + 1}
          </a>
        </li>
        <li className="page-item">
          <a
            className="page-link"
            href="#!"
            onClick={() => {
              viewPage(currentPage + 2);
            }}
          >
            {currentPage + 2}
          </a>
        </li>
        <li className={"page-item" + (nextPage ? "" : "disabled")}>
          <a
            className="page-link"
            href="#!"
            onClick={() => {
              viewPage(nextPage);
            }}
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
}

const mapStateToProps = state => ({
  nextPage: state.nextPage,
  previousPage: state.previousPage,
  currentPage: state.currentPage
});

export default connect(mapStateToProps)(Pagination);
