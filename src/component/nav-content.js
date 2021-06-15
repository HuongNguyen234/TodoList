import { Component } from 'react';
import MenuTask from './menu-task';
import Search from './Search';
import Sort from './Sort';

class NavContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
    this.clickHandleAdd = this.clickHandleAdd.bind(this);
    this.handleAddForm = this.handleAddForm.bind(this);
  }

  clickHandleAdd(){
    this.props.onAddClick();
  }

  handleAddForm(isFormToggle){
    let btn = <button type="button" onClick={this.clickHandleAdd} className="btn btn-primary addtask-button ">Add Task</button>
    if(isFormToggle === true){
      btn = <button type="button" onClick={this.clickHandleAdd} className="btn btn-success addtask-button ">Close Task</button>
    }
    return btn;
  }

  render() {
    let isFormToggle = this.props.isFormToggle;
    let elmForm = null;
    let isSelectItem = this.props.isSelectItem;
    if(isFormToggle === true){
      elmForm = <MenuTask isSelectItem={isSelectItem} onClickSubmit={this.props.onClickSubmit} isFormToggle = {isFormToggle} clickHandleAdd = {this.clickHandleAdd}></MenuTask>;
    }

    let {orderBy, orderDir} = this.props;
    return (
      <div className="row align-items-start">
          <Search onClickSearch = {this.props.handleChangeSearch}></Search>
          <Sort onclickSort = {this.props.onclickSort} orderBy={orderBy} orderDir={orderDir}></Sort>
          <div className="btn-group col-5 addtask" role="group" aria-label="Basic example">
            {this.handleAddForm(isFormToggle)}
          </div>
          {elmForm }
        </div>
    )
  }

}
export default NavContent;
