ReactDOM.render(
	<h1>Hello, world!</h1>,
	document.getElementById("container")
)

var CommentBox = React.createClass({
	render: function () {
		return (
			<div className="commentBox">
				Hello, world! I am a CommentBox.
			</div>
		);
	}
});
React.render(
	<CommentBox />,
	document.getElementById('example')
);

var names = ['alice', 'emily', 'kate'];
ReactDOM.render(
	<div>
		{
			names.map(function (name) {
				return <div>Hello, {name}!</div>
			})
		}
	</div>,
	document.getElementById("content")
);

var arr = [
	<h1>Hello world!</h1>,
	<h2>React is awesome</h2>
];
ReactDOM.render(
	<div>{arr}</div>,
	document.getElementById("mbox")
);

var HelloMessage = React.createClass({
	render: function () {
		return <h1>Hello {this.props.name}</h1>;
	}
});
ReactDOM.render(
	<HelloMessage name="John" />,
	document.getElementById('wrap')
);

var NotesList = React.createClass({
	render: function () {
		return (
			<ol>
				{
					React.Children.map(this.props.children, function (child) {
						return <li>{child}</li>;
					})
				}
			</ol>
		);
	}
});
ReactDOM.render(
	<NotesList>
		<span>hello</span>
	</NotesList>,
	document.getElementById('testAttr')
);


var MyTitle = React.createClass({
	propTypes: {
		title: React.PropTypes.string.isRequired,
	},
	render: function () {
		return <h1>{this.props.title}</h1>;
	}
});
var data = 123;
ReactDOM.render(
	<MyTitle title={data} />,
	document.getElementById('tloop')
);

var MyTitles = React.createClass({
	getDefaultProps: function () {
		return {
			title: "Hello World"
		};
	},
	render: function () {
		return <h1> {this.props.title} </h1>;
	}
});
ReactDOM.render(
	<MyTitles />,
	document.getElementById('mtitle')
)

var MyComponent = React.createClass({
	handleClick: function () {
		this.refs.myTextInput.focus();
	},
	render: function () {
		return (
			<div>
				<input type="text" ref="myTextInput" />
				<input type="button" value="Focus the text input" onClick={this.handleClick} />
			</div>
		);
	}
});
ReactDOM.render(
	<MyComponent />,
	document.getElementById('component')
);

var LikeButton = React.createClass({
	getInitialState: function () {
		return {liked: false};
	},
	handleClick: function (event) {
		this.setState({liked: !this.state.liked});
	},
	render: function () {
		var text = this.state.liked ? 'like' : 'haven\'t liked';
		return (
			<p onClick={this.handleClick}>
				You {text} this. Click to toggle.
			</p>
		);
	}
});
ReactDOM.render(
	<LikeButton />,
	document.getElementById("togglebox")
);

var Input = React.createClass({
	getInitialState: function () {
		return {value: 'Hello!'};
	},
	handleChange: function (event) {
		this.setState({value: event.target.value});
	},
	render: function () {
		var value = this.state.value;
		return (
			<div>
				<input type="text" value={value} onChange={this.handleChange} />
				<p>{value}</p>
			</div>
		);
	}
});
ReactDOM.render(
	<Input />,
	document.getElementById("inputbox")
);

var Hello = React.createClass({
	getInitialState: function () {
		return {
			opacity: 1.0
		};
	},
	componentDidMount: function () {
		this.timer = setInterval(function () {
			var opacity = this.state.opacity;
			opacity -= .05;
			if (opacity < 0.1) {
				opacity = 1.0;
			}
			this.setState({
				opacity: opacity
			});
		}.bind(this), 100);
	},
	render: function () {
		return (
			<div style={{opacity: this.state.opacity}}>
				Hello {this.props.name}
			</div>
		);
	}
});
ReactDOM.render(
	<Hello name="world" />,
	document.getElementById("amount")
);

var UserGist = React.createClass({
	getInitialState: function () {
		return {
			username: 'vvv',
			lastGistUrl: ''
		};
	},
	componentDidMount: function () {
		$.get(this.props.source, function (result) {
			var lastGist = result[0];
			if (this.isMounted()) {
				this.setState({
					username: lastGist.owner.login,
					lastGistUrl: lastGist.html_url
				});
			}
		}.bind(this));
	},
	render: function () {
		return (
			<div>
				{this.state.username} s last gist is
				<a href={this.state.lastGistUrl}>here</a>
			</div>
		);
	}
});
ReactDOM.render(
	<UserGist source="https://api.github.com/users/octocat/gists" />,
	document.getElementById('ajaxtest')
);

var RepoList = React.createClass({
	getInitialState: function () {
		return {loading: true, error: null, data: null};
	},
	componentDidMount () {
		this.props.promise.then(
			value => this.setState({loading: false, data: value}),
			error => this.setState({loading: false, error: error})
		);
	},
	render: function () {
		if (this.state.loading) {
			return <span>Loading</span>;
		}
		else if (this.state.error !== null) {
			return <span>Error: {this.state.error.message}</span>;
		}
		else {
			var repos = this.state.data.items;
			var repoList = repos.map(function (repo) {
				return (
					<li>
						<a href={repo.html_url}>{repo.name}</a>
						({repo.stargazers_count} stars) <br />
						{repo.description}
					</li>
				);
			});
			return (
				<main>
					<h1>Most Popular JavaScript Projects in Github</h1>
					<ol>{repoList}</ol>
				</main>
			)
		}
	}
});
ReactDOM.render(
	<RepoList promise={$.getJSON('https://api.github.com/search/repositories?q=javascript&sort=stars')} />,
	document.getElementById('promisetest')
);

var TodoList = React.createClass({
	render: function () {
		var createItem = function (itemText) {
			return <li>{itemText}</li>;
		};
		return <ul>{this.props.items.map(createItem)}</ul>;
	}
});
var TodoAPP = React.createClass({
	getInitialState: function () {
		return {items: [], text: ''};
	},
	onChange: function (e) {
		this.setState({text: e.target.value});
	},
	handleSubmit: function (e) {
		e.preventDefault();
		var nextItems = this.state.items.concat([this.state.text]);
		var nextText = '';
		this.setState({items: nextItems, text: nextText});
	},
	render: function () {
		return (
			<div>
				<h3>TODO</h3>
				<TodoList items={this.state.items} />
				<form onSubmit={this.handleSubmit}>
					<input onChange={this.onChange} value={this.state.text} />
					<button>{'ADD #' + (this.state.items.length + 1)}</button>
				</form>
			</div>
		);
	}
});
React.render(
	<TodoAPP />,
	document.getElementById("todobox")
);