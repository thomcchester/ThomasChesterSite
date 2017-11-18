import alt from '../../../alt';

class DailyBlogActions {
	constructor() {
		this.generateActions(
			'findBlogSuccess',
			'findBlogFail'
		);
	}


	findBlogs(){
    $.ajax( {url: '/blogs' })
    .done((blogData) => {
      this.actions.findBlogSuccess(blogData)
    })
    .fail((blogjqXhr) => {
      this.actions.findBlogFail(blogjqXhr)
    })
  }
}


export default alt.createActions(DailyBlogActions);
