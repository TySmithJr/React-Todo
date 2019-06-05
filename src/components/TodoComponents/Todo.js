import React from 'react';

const Todo = (props) => {
    console.log('Todo.js props', props.task)
    return (
        <div>
            <p>{props.task}</p>
        </div>
    );
};

export default Todo;
