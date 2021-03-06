import React, {Component} from 'react';
import TodoForm from './TodoForm';

class Todo extends Component {
    state = {
        formStyle: {
            display: 'none'
        }
    }


    deleteClickedTodo = () => {
        this.props.deleteTodo(this.props.todo);
    }

    toggleBodyForm = () =>{
        this.state.formStyle.display === 'block' ? this.setState({formStyle: {display: 'none'}}) : this.setState({formStyle: {display: 'block'}})
    }


    render(){
        return(
            <li data-todos-index={this.props.todo.id}>
            <div style = {this.state.bodyStyle}>
                <span className="todo-item">{this.props.todo.body}</span>
                <span className='edit' onClick={this.toggleBodyForm}>Edit</span>
                <span className="remove" onClick={this.deleteClickedTodo}>Remove</span>
                </div>
                <TodoForm todo={this.props.todo} style={this.state.formStyle} autoFocus={true} buttonName="Update Todo!" updateTodo={this.props.updateTodo} toggleBodyForm={this.toggleBodyForm} />
            </li>
        )
    }
}

export default Todo;