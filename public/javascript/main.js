ReactDOM.render(
	<h1>hello,world</h1>, 
	document.getElementById('container')
);
ReactDOM.render(
	React.createElement('h1', null, 'this world!'),
	document.getElementById('example')
);

var CommentBox = React.createClass({
	render: function () {
		return (
			<div className="commentBox">
				hello, world! I am a CommentBox.
			</div>
		);
	}
});
ReactDOM.render(
	<CommentBox />,
	document.getElementById('content')
);

var CommentBox = React.createClass({
	displayName: 'CommentBox',
	render: function () {
		return (
			React.createElement(
				'div', 
				{className: "commentBox"},
				"Hello, world! I am a CommentBox again."
			)
		);
	}
});
ReactDOM.render(
	React.createElement(CommentBox, null),
	document.getElementById('mbox')
);

var CommentList = React.createClass({
	render: function () {
		return (
			<div className='commentList'>
				Hello, world! I am a CommentList.
			</div>
		);
	}
});

var CommentForm = React.createClass({
	render: function () {
		return (
			<div className='commentForm'>
				Hello, world! I am a CommentForm.
			</div>
		);
	}
});

var CommentBox = React.createClass({
	render: function () {
		return (
			<div className="commentBox">
				<h1>Comments</h1>
				<CommentList /> 
				<CommentForm />
			</div>
		);
	}
});
ReactDOM.render(
	<CommentBox />,
	document.getElementById('wrap')
);

var Comment = React.createClass({
	render: function () {
		return (
			<div className="comment">
				<h2 className="commentAuthor">
					{this.props.author}
				</h2>
				{this.props.children}
			</div>
			);
	}
});

var CommentList = React.createClass({
	render: function () {
		return (
			<div className="commentlist">
				<Comment author="pete hunt">this is one comment</Comment>
				<Comment author="Jordan Walke">this is another comment</Comment>
			</div>
		);
	}
});
ReactDOM.render(
	<CommentList />,
	document.getElementById('testAttr')
);

