import './App.css';
import HeaderApp from './component/HeaderApp';
import NavContent from './component/nav-content';
import FormList from './component/FormList';
import { Component } from 'react';
import _ from 'lodash';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items : [],
      isFormToggle : false,
      strSearch : null,
      orderBy: 'name',
      orderDir: 'asc',
      isSelectItem : null
    };
    this.handleChangeSearch = this.handleChangeSearch.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  componentWillMount(){
    let i = JSON.parse(localStorage.getItem("task"));
    this.setState({
      items: i
    })
    // localStorage.getItem("task", JSON.stringify(this.state.items))
  }

  handleToggleForm = () => {
    this.setState({
      isFormToggle: !this.state.isFormToggle,
      isSelectItem : null
    });
  }

  handleChangeSearch(value){
    this.setState({
      strSearch: value
    });
  }

  handleSort(orderBy, orderDir){
    this.setState({
      orderBy : orderBy,
      orderDir: orderDir
    })
    console.log(orderBy+ "-" + orderDir);
  }

  closeForm(){
    this.setState({
      isFormToggle : false
    })
  }

  handleDelete(id){
    let items = this.state.items;
     _.remove(items, function(n) {
      return n.id === id;
    });
    this.setState({
      items : items
    })

    localStorage.setItem("task", JSON.stringify(this.state.items));
  }

  handleSubmit(item){
    let i = this.state.items;
    console.log(item)
    if(item.id !== ''){ //edit
      console.log("edit")
      i = _.reject(i, { id: item.id});
      
    } else{
      const { v4: uuidv4 } = require('uuid');
      item.id = uuidv4();
    }
    i.push(item);
    
    this.setState({
      items: i, 
      isFormToggle : false,
    });
    localStorage.setItem("task", JSON.stringify(i));
  }

  handleEdit(item1){
    this.setState({
      isSelectItem: item1, 
      isFormToggle: true
    });
  }

  render() {
    let itemOrigin = [...this.state.items];
    let items = itemOrigin;
    const search  = this.state.strSearch;
    let {isFormToggle, orderBy, orderDir} = this.state;
    if(search !== null){
      items = _.filter(itemOrigin, (item)=> { 
        return _.includes(item.name.toLowerCase(), search.toLowerCase())
      });
    }
    let isSelectItem = this.state.isSelectItem;
    items = _.orderBy(items, [orderBy], [orderDir]);
    
    // console.log(this.state.strSearch);
    return (
      <div className="container">
        <HeaderApp></HeaderApp>
        <NavContent 
          onClickSubmit={this.handleSubmit}
          onclickSort = {this.handleSort} 
          orderBy={orderBy} orderDir={orderDir} 
          handleChangeSearch={this.handleChangeSearch} 
          isFormToggle = {isFormToggle} 
          onAddClick = {this.handleToggleForm}
          isSelectItem = {isSelectItem}></NavContent>
        <FormList onClickEdit = {this.handleEdit} onClickDelete = {this.handleDelete} items = {items}></FormList>
      </div>
    )
  }
}

export default App;
