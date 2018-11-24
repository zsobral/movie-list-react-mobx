import { decorate, observable, action, computed, runInAction } from 'mobx';

import * as api from '../api';

class MovieListStore {
  movieLists = [];
  movieList = null;
  loading = false;
  error = null;

  constructor(rootStore) {
    this.rootStore = rootStore;
    this.fetchMovieLists = this.fetchMovieLists.bind(this);
    this.fetchMovieListById = this.fetchMovieListById.bind(this);
  }

  async fetchMovieLists() {
    this.loading = true;
    this.error = null;
    try {
      const response = await api.fetchMovieLists();
      runInAction('fetch movie lists success', () => {
        this.movieLists = response.data;
        this.loading = false;
      });
    } catch (error) {
      runInAction('fetch movie lists failure', () => {
        this.loading = false;
        this.error = error.response.data.error;
      });
    }
  }

  async fetchMovieListById(id) {
    this.loading = true;
    this.error = null;
    try {
      const response = await api.fetchMovieListById(id);
      runInAction('fetch movie list by id success', () => {
        this.movieList = response.data;
        this.loading = false;
      });
    } catch (error) {
      runInAction('fetch movie list by id failure', () => {
        this.error = error.response.data.error;
        this.loading = false;
      });
    }
  }

  get lastMovieLists() {
    return this.movieLists.sort((a, b) => b.created_at - a.created_at);
  }
}

decorate(MovieListStore, {
  movieLists: observable,
  movieList: observable.ref,
  loading: observable,
  error: observable.ref,
  fetchMovieLists: action,
  fetchMovieListById: action,
  lastMovieLists: computed
});

export default MovieListStore;
