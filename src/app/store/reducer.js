import {
  CHANGE_SECTION,
  SET_PAGINATION,
  SET_DETAILS,
  GET_CHARACTERS,
  REMOVE_CHARACTER,
  SET_SEARCH,
  SET_TRASH,
  GET_BACK
} from "./actions";

const initialState = {
  section: "HOME",
  prevSection: "HOME",
  characters: [],
  detail: null,
  previousPage: null,
  nextPage: 2,
  currentPage: 1,
  isSearchResult: false,
  trash: []
};

export const removeCharacter = (index, characters = []) => {
  return characters.filter((value, i) => {
    return i !== index;
  });
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SECTION:
      return {
        ...state,
        section: action.payload
      };
    case GET_CHARACTERS:
      return {
        ...state,
        characters: action.payload
      };
    case REMOVE_CHARACTER:
      return {
        ...state,
        characters: removeCharacter(action.payload, state.characters)
      };
    case SET_PAGINATION:
      return {
        ...state,
        previousPage: action.payload.previousPage,
        nextPage: action.payload.nextPage,
        currentPage: action.payload.currentPage
      };
    case SET_DETAILS:
      return {
        ...state,
        detail: action.payload
      };
    case SET_SEARCH:
      return {
        ...state,
        isSearchResult: action.payload
      };
    case SET_TRASH:
      return {
        ...state,
        trash: action.payload
      };
    case GET_BACK:
      return {
        ...state,
        section: state.prevSection,
        isSearchResult: false
      };
    default:
      return state;
  }
}
export default reducer;
