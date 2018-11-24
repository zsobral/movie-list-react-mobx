import { decorate, observable, action, computed, runInAction } from 'mobx';

import * as api from '../api';

class UserStore {
  user = null;
  movieLists = [];
  error = null;
  loading = false;
  firstRun = true;

  constructor(rootStore) {
    this.rootStore = rootStore;
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.fetchMovieLists = this.fetchMovieLists.bind(this);
    this.checkAuth = this.checkAuth.bind(this);
  }

  async login(email, password) {
    this.loading = true;
    this.error = null;
    try {
      await api.login(email, password);
      const response = await api.fetchMe();
      runInAction('login success', () => {
        this.user = response.data;
        this.loading = false;
      });
    } catch (error) {
      runInAction('login failure', () => {
        this.error = error.response.data.error;
        this.loading = false;
      });
    }
  }

  async logout() {
    this.loading = true;
    this.error = null;
    try {
      await api.logout();
      runInAction('logout success', () => {
        this.user = null;
        this.loading = false;
      });
    } catch (error) {
      runInAction('logout failure', () => {
        this.error = error.response.data.error;
        this.loading = false;
      });
    }
  }

  async fetchMovieLists() {
    this.loading = true;
    this.error = null;
    try {
      const response = await api.fetchUserMovieLists();
      runInAction('fetch user movie lists success', () => {
        this.movieLists = response.data;
        this.loading = false;
      });
    } catch (error) {
      runInAction('fetch user movie lists failure', () => {
        this.loading = false;
        this.error = error.response.data.error;
      });
    }
  }

  async checkAuth() {
    try {
      const response = await api.fetchMe();
      runInAction('check auth success', () => {
        this.user = response.data;
        this.firstRun = false;
      });
    } catch (error) {
      runInAction('check auth failure', () => {
        this.firstRun = false;
      });
    }
  }

  get isAuthenticated() {
    return this.user !== null;
  }
}

decorate(UserStore, {
  user: observable.ref,
  movieLists: observable.ref,
  error: observable.ref,
  loading: observable,
  firstRun: observable,
  login: action,
  logout: action,
  checkAuth: action,
  fetchMovieLists: action,
  isAuthenticated: computed
});

export default UserStore;
