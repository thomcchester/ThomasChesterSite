import React from 'react';
import {Link} from 'react-router';
import DailyBlogStore from './DailyBlogStore.js';
import DailyBlogActions from './DailyBlogActions.js';

class DailyBlog extends React.Component {

	constructor(props) {
		super(props);
		this.state = DailyBlogStore.getState();
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount() {
		DailyBlogStore.listen(this.onChange);
		DailyBlogActions.findBlogs();
	}


	componentWillUnmount() {
		DailyBlogStore.listen(this.onChange);
	}

	onChange(state) {
		this.setState(state);
	}
render() {
	var titleDate = this.state.blogHold.slice(0).reverse().map(function(blog){
		var blogBody = blog.Body.paragraphs.map(function(para){
			return(
				<li className="text" key={para.text}>{para.text}</li>
			)
		})
		return(
			<li className="titleDate" key={blog._id}>
				<h3 className="title">{blog.Title}, {blog.Date}</h3>
				<ul>
					{blogBody}
				</ul>
			</li>
		)
	})


		return (
			<div className="blogBody">
				<h1 className="headBlog">ActionabLog</h1>
				<ul>
					{titleDate}
				</ul>
			</div>
		);
	}
}

 export default DailyBlog
