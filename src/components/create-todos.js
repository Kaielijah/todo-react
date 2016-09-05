import React from 'react';
import {Bootstrap} from 'react-bootstrap';



export default class CreateTodo extends React.Component {
  constructor(props){
    super(props);
      this.state={
        error: null

    };
  }
  renderError(){
    if (!this.state.error){
      return null;

    }
    return <div style={{color: 'red'}}>{this.state.error}</div>
  }

  render(){
    // console.log(this.props.todos);
    return (
    <form onSubmit={this.handleCreate.bind(this)}>
    <input type="text" placeholder="what do I need to do?" ref="createInput"/>
    <button className="btn btn-default">Create</button>
    {this.renderError()}
    </form>

  );
  }
handleCreate(event){
  event.preventDefault();
  const createInput = this.refs.createInput;
  const task = createInput.value;
  const validateInput = this.validateInput(task);

  if (validateInput){
    this.setState({error: validateInput});
    return;
  }

  this.setState({error: null});
  this.props.createTask(task);
  this.refs.createInput.value="";
  // console.log(this.props.createTask)
  // console.log(this.refs.createInput.value)
}
validateInput(task){
  if (!task){
    return 'Please enter a task.';

  } else if (_.find(this.props.todos, todo => todo.task === task)) {
    return "task already exist.";
  }else {
    return null;
  }
}
}
