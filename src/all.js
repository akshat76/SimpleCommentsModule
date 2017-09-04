import React from 'react';
import ReactDOM from 'react-dom';
import Todos from './Todos';


const INITIAL_STATE = {
    todos: [
        {
            id: 1,
            text: 'Shopping',
            completed: true
        },
        {
            id: 2,
            text: 'Dancing',
            completed: true
        },
        {
            id: 3,
            text: 'Swimming'
        }
    ]
};

class App extends React.Component {

    constructor() {
        super(...arguments);
        this.state = {...INITIAL_STATE};
    }

    render() {
        return (
            <div>
                <Todos todos={this.state.todos}/>
            </div>
        )
    }

}

ReactDOM.render(<App/>, document.getElementById('root'));

import React from 'react';

export default ({todo}) => (
    <li className="list-group-item" key={todo.id}>
        <div className="checkbox">
            <label>
                <input checked={todo.completed} type="checkbox"/>
                <span className={todo.completed ? 'text-danger' : ''}>{todo.text}</span>
            </label>
        </div>
    </li>
)


import React from 'react';
import TodoItem from './TodoItem';

export default ({todos}) => (
    <ul className="list-group">
        {
            todos.map(todo => <TodoItem key={todo.id} className="list-group-item" todo={todo} />)
        }
    </ul>
)

