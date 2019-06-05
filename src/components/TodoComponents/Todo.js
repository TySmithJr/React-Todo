import React from 'react';

const Todo = (props) => {
    console.log('Todo.js props', props.task)
    return (
        <div>
            {props.task}
        </div>
    );
};

export default Todo;
