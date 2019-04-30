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
        TodoModel.all().then((res)=>{
            this.setState ({
                todos: res.data.todos,
            })
        })
    }

    render(){
        return(
            <div className='todosComponent'>
                <CreateTodoForm createTodo= {this.createTodo}/>
                <Todos todos={this.state.todos} />
            </div>
        )


    }
}

export default TodosContainer;