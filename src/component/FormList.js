import { Component } from 'react';
import Item from './Item';

class FormList extends Component{
  constructor(props) {
    super(props);

    this.state = {
      
    };
  }

  render(){
    const items = this.props.items;
    // console.log(items)
    let elmItem = items.map((item, index)=>{
      return <Item onClickEdit={this.props.onClickEdit} onClickDelete = {this.props.onClickDelete} items={item} index = {index} key = {index}></Item>
    });
    return (
      <div className="content">
          LIST
          <table className="table">
            <thead>
              <tr />
            </thead>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Task</th>
                <th scope="col">Level</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {elmItem}
              {/* <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td><span className="badge bg-secondary">High</span></td>
                <td>
                  <button type="button" className="btn btn-warning">Warning</button>
                  <button type="button" className="btn btn-danger">Danger</button>
                </td>
              </tr> */}
            </tbody>
          </table>
        </div>
    )
  }
  
}

export default FormList;
