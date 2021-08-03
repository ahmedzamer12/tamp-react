import React , {Component} from 'react';
import Todolist from './componant/Todolist';
import Additem from './componant/additem';

class App extends Component {
  state = {
    items : [
      {id : 1 , name : "ahmed" , age : 30 },
      {id : 2 , name : "mohamed" , age : 31 },
      {id : 3 , name : "amer" , age : 32 },
      {id : 4 , name : "amr" , age : 33 }
    ]
  }
  deleteitem = (id) => {
    let items = this.state.items.filter(item =>{
      return item.id !== id;
    })
    this.setState({items})
  }
     additem = (item) =>{
       item.id = Math.random();
       let items = this.state.items;
       items.push(item);
       this.setState({items})
     }
render() {
  return (
      <div className="App container">
        <h1 className="text-center">Todo List</h1>
        <Todolist items = {this.state.items} deleteitem = {this.deleteitem} />
        <Additem additem = {this.additem}/>
    </div>
  );
 }
}

export default App;
