import { Component } from 'react';

class Sort extends Component {
  constructor(props) {
    super(props);
    this.state = {
      strValue: ""
    };
    this.handleSorts = this.handleSorts.bind(this);
  }
  handleSorts(order, orderDir) {
    console.log(order + "-" + orderDir);
    this.props.onclickSort(order, orderDir);

  }

  render() {
    let { orderBy, orderDir } = this.props;
    let elmOder = orderBy + "-" + orderDir;
    return (
      <div className="select-group col-3">
        <div className="dropdown">
        <button className="btn btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
          Sort By
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
          <li><button className="dropdown-item" type="button" onClick={()=>{this.handleSorts("name", "asc")}}>NAME ASC</button></li>
          <li><button className="dropdown-item" type="button" onClick={()=>{this.handleSorts("name", "desc")}}>NAME DESC</button></li>
          <li><button className="dropdown-item" type="button" onClick={()=>{this.handleSorts("level", "asc")}}>LEVEL ASC</button></li>
          <li><button className="dropdown-item" type="button" onClick={()=>{this.handleSorts("level", "desc")}}>LEVEL DESC</button></li>
        </ul>
      </div> 
        <div type="button" className="btn btn-success">{elmOder}</div>
      </div>
    )
  }

}

export default Sort;
