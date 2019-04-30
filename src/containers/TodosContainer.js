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
    //CREATING TODO
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

    //GETING TODO
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
    //DELETING TODO
    deleteTodo = (todo) => {
        //delete is created in TodoModel
        TodoModel.delete(todo).then((res)=>{
            let todos = this.state.todos.filter(todo => {
                return todo._id !== res.data._id
            });
            this.setState({todos})
        })
    }

    //EDITING TODO
    updateTodo = (todo) => {
        const isUpdatedTodo = t => {
            return t._id === todo._id;
        }
        TodoModel.update(todo)
        .then((res)=>{
            let todos = this.state.todos;
            todos.find(isUpdatedTodo).body = todo.body;
            this.setState({todos: todos});
        });

    }



    render(){
        return(
            <div className='todosComponent'>
                <CreateTodoForm createTodo= {this.createTodo}/>
                <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} updateTodo={this.updateTodo} />
            </div>
        )


    }
}

export default TodosContainer;