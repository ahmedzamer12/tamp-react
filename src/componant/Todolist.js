import React , {Component} from 'react';
const Todolist = (props) => {
    const {items , deleteitem } = props ;
    let length = items.length;
    const Listitems = length ? (
        items.map(item => {
            return (
                <div key = {item.id}>
                    <span className= "name">{item.name}</span>
                    <span className= "age">{item.age}</span>
                    <span className= "action icon" onClick = {() => deleteitem(item.id)}>&times;</span>
                </div>
            )
        })
    ) : (
        <p> there is no item to show</p>
    )
    return(
    <div className="home">
        <div className="">
            <span className= "name title">Name</span>
            <span className= "age title">Age</span>
            <span className= "action title">Action</span>
        </div>
        { Listitems }
    </div>
    )
}
export default Todolist;