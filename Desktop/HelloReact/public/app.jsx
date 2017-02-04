/*var Greeter = React.createClass({
  getDefaultProps: function (){
    return {
      name: 'React',
      msg: 'This is form a component'
    };
  },
  render: function(){
    var name = this.props.name;
    var msg = this.props.msg;
    return (
      <div>
      <h1>Hello {name}!</h1>
      <p> {msg}!</p>
      </div>
    );
  }
});

ReactDOM.render(
  <Greeter name='Suyash'/>,
  document.getElementById('app')
);
*/

var GreeterMessage = React.createClass({
    render: function () {
      var name = this.props.name;
      var message = this.props.message;

      return (
        <div>
          <h1>Hello {name}!</h1>
          <p>{message}</p>
        </div>
      );
    }
});

var GreeterForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    var updates = {};
    var name = this.refs.name.value;
    var message = this.refs.message.value;
    if (name.length > 0) {
      this.refs.name.value = '';
      //this.props.onNewName(name);
      updates.name = name;
    }
    if(message.length > 0){
      this.refs.message.value = '';
      updates.message = message;
    }

    this.props.onNewName(updates);
  },
  render: function () {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type="text" ref="name"/>
        <textarea rows="4" cols="50" ref="message">
        </textarea>
        <button>Submit</button>
      </form>
    );
  }
});

var Greeter = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'React',
      message: 'This is the default message!'
    };
  },
  getInitialState: function () {
    return {
        name: this.props.name,
        message: this.props.message
    };
  },
  handleNewName: function (update) {
  if(update.name != undefined && update.name.length > 0){
    this.setState({
      name: update.name
    })
  }
  if(update.message != undefined && update.message.length > 0){
    this.setState({
      message: update.message
    })
  }

  },
  render: function () {
    var name = this.state.name;
    var message = this.state.message;

    return (
      <div>
        <GreeterMessage name={name} message={message}/>
        <GreeterForm onNewName={this.handleNewName}/>
      </div>
    );
  }
});

var firstName = 'Andrew';

ReactDOM.render(
  <Greeter name={firstName}/>,
  document.getElementById('app')
);
