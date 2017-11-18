import alt from '../../../alt';
import DailyBlogActions from './DailyBlogActions';

 class DailyBlogStore {
	constructor() {
		this.bindActions(DailyBlogActions);
    this.blogHold=[];
	}
  onFindBlogSuccess(blogData) {
    this.blogHold=blogData;

  }
}

export default alt.createStore(DailyBlogStore);
