import React, {Component} from 'react';
import TodoModel from '../models/Todo';
import Todos from '../components/Todos'
import CreateTodoForm from '../components/CreateTodoForm';



class TodosContainer extends Component {
    // constructor(){
    //     super()
        state = {
            todos:[]
        }
    // }

    createTodo = (todo) => {
        let newTodo = {
            body: todo,
            completed: false
        }
        //create is created in TodoModel
        TodoModel.create(newTodo).then((res) => {
            let todos = this.state.todos
            let newTodos = todos.push(res.data)
            this.setState({newTodos})

        })
    }


    componentDidMount(){
        this.fetchData()
    }

    fetchData(){
        // all is created in TodoModel
        TodoModel.all().then((res)=>{
            this.setState ({
                todos: res.data.todos,
            })
        })
    }

    deleteTodo = (todo) => {
        //delete is created in TodoModel
        TodoModel.delete(todo).then((res)=>{
            let todos = this.state.todos.filter(todo => {
                return todo._id !== res.data._id
            });
            this.setState({todos})
        })
    }


    render(){
        return(
            <div className='todosComponent'>
                <CreateTodoForm createTodo= {this.createTodo}/>
                <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
            </div>
        )


    }
}

export default TodosContainer;