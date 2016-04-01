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