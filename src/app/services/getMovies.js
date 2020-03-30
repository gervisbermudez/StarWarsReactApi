import ENVIRONMENT from "../../environments/environment";

export const path = "people";

const getCharacters = async page => {
  const results = await fetch(
    `${ENVIRONMENT.SWAPI}${path}?page=${page}`
  ).then(res => res.json());
  return results ? results : [];
};

export default getCharacters;