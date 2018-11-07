import React, { Component } from 'react';
import './App.css';
import Todo from './Todo';

class App extends Component {
  state = {
    checked:"All",
    localId: 1,
    Todo:"",
    TodoItems:[
      { id:1, name: 'update the todo list', isDone: false }
    ]
  }
  UpdateToDo = event => {
    this.setState({
      Todo: event.target.value
    })
  }
  AddTodoItem = ()=>{
    this.setState(prevState=>({
      localId: prevState.localId +1,
      TodoItems: [...prevState.TodoItems, {id: prevState.localId+1, name:prevState.Todo, isDone: false}]
    }))
  }
  ToggleDone = event=> {
    const id = event.target.value;
    this.setState(prevState => ({
      TodoItems: prevState.TodoItems.map(item => {
        if(item.id === id){
          return {
            ...item,
            isDone: !item.isDone
          }
        }
        return item;
      })
    }))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <input type="radio" id="radAll" value="All" checked="true"/>
          <label htmlFor ="radAll">Show All</label>
          <input type="radio" id="radPending" value="Pending"/>
          <label htmlFor ="radPending">Pending</label>
          <input type="radio" id="radDone" value="Done"/>
          <label htmlFor ="radDone">Done</label>
          <input type="text" id="inpTodo" placeholder="Add todo item" onChange={this.UpdateToDo} value={this.state.Todo}/>
          <button onClick={this.AddTodoItem}> Add </button>
          <ul>
            {this.state.TodoItems.map(item=> (
              <Todo
                ToggleDone={this.ToggleDone}
                item={item}
                key={item.id}
              />
            ))
            }
          </ul>
        </header>
      </div>
    );
  }
}

export default App;
