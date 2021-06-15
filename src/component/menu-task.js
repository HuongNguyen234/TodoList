import { Component } from 'react';


class MenuTask extends Component {
  constructor(props){
    super(props);
    this.state = {
      task_id : '',
      task_name : '',
      task_level : 0
    }
    this.handleCancel = this.handleCancel.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleCancel(){
    this.props.clickHandleAdd()
  }

  handleChange(event) {
      const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });

  }

  handleSubmit(event) {
    // alert('A name was submitted: ' + this.state.task_name + ' level : ' + this.state.task_level);
    event.preventDefault();
    let level = parseInt(this.state.task_level, 10);
    const { v4: uuidv4 } = require('uuid');
    let item = {
      id: uuidv4(),
      name : this.state.task_name,
      level : level
    }
    this.props.onClickSubmit(item);
  }

  render() {
    // let isFormToggle = this.props.isFormToggle;
    let a = this.props.isSelectItem;
    let name = this.state.task_name;
    let level = this.state.task_level;
    console.log(a)
    if(a.id != ''){
      name = a.name;
      level = a.level;
    }
    return (
      <div className="add-task-group addtask-detail col-5">
        <form className="format-form" onSubmit={this.handleSubmit}>
        <input type="text" name="task_name"
            // checked={this.state.task_name}
            value = {name}
            onChange={this.handleChange} className="form-control" placeholder="import" aria-label="Recipient's username" aria-describedby="button-addon2" />
        <select name="task_level"
            onChange={this.handleChange}
            value={level} 
            className="form-select">
          <option value="0">Small</option>
          <option value="1">Medium</option>
          <option value="2">High</option>
        </select>
        <button className="btn btn-primary"  type="submit">Submit</button>
        <button onClick = {this.handleCancel} className="btn btn-outline-secondary" type="button" id="button-addon2">Cancel</button>
        </form>
      </div>
    )
  }
}

export default MenuTask;
