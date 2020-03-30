import ENVIRONMENT from "../../environments/environment";

const path = "people";

export const searchCharacters = async term => {
  const results = await fetch(
    `${ENVIRONMENT.SWAPI}${path}?search=${encodeURIComponent(term)}`
  ).then(res => res.json());
  return results ? results : [];
};

export const getCharacters = async page => {
  const results  = await fetch(
    `${ENVIRONMENT.SWAPI}${path}?page=${page}`
  ).then(res => res.json());
  return results ? results : [];
};
