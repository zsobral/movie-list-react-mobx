import axios from 'axios';

export const fetchMe = () => {
  return axios.get('/api/users/me');
};

export const fetchUsers = () => {
  return axios.get('/api/users');
};

export const login = (email, password) => {
  return axios.post('/api/auth/email', { email, password });
};

export const logout = () => {
  return axios.delete('/api/logout');
};

export const register = (name, email, password) => {
  return axios.post('/api/users', { name, email, password });
};

export const searchMovies = query => {
  return axios.get('/api/tmdb/movies', { params: { query } });
};

export const saveMovieList = movies => {
  return axios.post('/api/movie-lists', { movies });
};

export const fetchUserMovieLists = () => {
  return axios.get('/api/movie-lists/me');
};

export const fetchMovieLists = () => {
  return axios.get('/api/movie-lists');
};

export const fetchMovieListById = id => {
  return axios.get(`/api/movie-lists/${id}`);
};
