import UserStore from './UserStore';
import MovieListStore from './MovieListStore';

class RootStore {
  constructor() {
    this.user = new UserStore(this);
    this.movieList = new MovieListStore(this);
  }
}

export default RootStore;
