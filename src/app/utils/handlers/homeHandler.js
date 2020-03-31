import { getCharacters } from "../../services/getCharacters";
import store from "../../store/store";
import {
  GET_CHARACTERS,
  SET_PAGINATION,
  SET_SEARCH
} from "../../store/actions";
const numberPattern = /\d+/g;

const resetHome = () => {
  document.getElementById("search").value = null;
  store.dispatch({ type: SET_SEARCH, payload: false });
  let { currentPage } = store.getState();
  store.dispatch({ type: GET_CHARACTERS, payload: [] });
  getCharacters(currentPage).then(response => {
    store.dispatch({ type: GET_CHARACTERS, payload: response.results });
    store.dispatch({
      type: SET_PAGINATION,
      payload: {
        currentPage: currentPage,
        nextPage: response.next ? response.next.match(numberPattern)[0] : null,
        previousPage: response.previous
          ? response.previous.match(numberPattern)[0]
          : null
      }
    });
  });
};

export default resetHome;
