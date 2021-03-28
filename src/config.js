const  BASE_URL = 'https://api.github.com';

export const getAllGists = userName => `${BASE_URL}/users/${userName}/gists`;
export const getGist = id => `${BASE_URL}/gists/${id}`;