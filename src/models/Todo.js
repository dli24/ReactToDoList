import axios from 'axios';
const endPoint = `https://super-crud-api.herokuapp.com/api/todos`

class TodoModel{
    // use anyword other than all()
    static all() {
        //get is the word from the library to get data
        let request = axios.get(endPoint)
        return request 
    }

    //use for creating, also use anyword other than create
    static create(todo) {
        let request = axios.post(endPoint, todo)
        return request
    }

    static delete(todo) {
        let request = axios.delete(`${endPoint}/${todo._id}`)
        return request
    }


}

export default TodoModel;