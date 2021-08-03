import React , {Component} from 'react';
class Additem extends Component {
  state = {
    name : "" ,
    age : ""
  }
  addtiondata = (e) => {
    this.setState({
      [e.target.id] : e.target.value 
    })
  } 
  handelsubmit = (e) => {
    e.preventDefault();
    if (e.target.name.value === '') {
      return false 
    }
    else {
      this.props.additem(this.state)
      this.setState({
        name : "" ,
        age : ""
      })
    }
  }
  render() {
    return (
      <div>
      <form onSubmit = {this.handelsubmit}>
      <input className="text" type="text" placeholder="enter name ..." id ="name" onChange = {this.addtiondata} value ={this.state.name} />
      <input className="num" type="number" placeholder="enter number ..." id ="age" onChange = {this.addtiondata} value ={this.state.age} />
      <input className="sub" type="submit" value ="Add" />
      </form>
  </div>
    )
  }

}

export default Additem;