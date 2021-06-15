import { Component } from 'react';

class Item extends Component{
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  showElementItem(level){
    let elmLevel = <span className="badge bg-secondary">Small</span>;
    if(level === 1){
      elmLevel = <span className="badge bg-warning">Medium</span>;
    }
    else if(level === 2){
      elmLevel = <span className="badge bg-success text-dark">Heigh</span>;
    }
    return elmLevel;
  }

  handleDelete(id){
    this.props.onClickDelete (id);
  }

  handleEdit(item){
    this.props.onClickEdit(item);
  }

  render(){
    let item = this.props.items;
    const index = this.props.index;
    
    return (
      <tr>
        <th scope="row">{index + 1}</th>
        <td>{item.name}</td>
        <td>{this.showElementItem(item.level)}</td>
        <td>
          <button onClick={()=>this.handleEdit(item)} type="button" className="btn btn-warning">Edit</button>
          <button onClick={()=>this.handleDelete(item.id)} type="submit" className="btn btn-danger">Delete</button>
        </td>
      </tr>
    )
    
  }
  
}
export default Item;
