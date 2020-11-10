import React, { useState } from 'react';
import TodoList from './components/TodoList';

TodoFeature.propTypes = {
    
};

function TodoFeature(props) {
    const initTodoList = [
        {
            id: 1,
            title: 'Eat',
            status: 'new'
        },
        {
            id: 2,
            title: 'Sleep',
            status: 'updated'
        },
        {
            id: 3,
            title: 'Code',
            status: 'new'
        },

    ]

    const [todoList, setTodoList] = useState(initTodoList);
    const [filterState, setFilterState] = useState('all');

    const handleTodoClick = (todo, index) => {
        //clone current to new array
        const newTodoList = [...todoList]

        newTodoList[index] = {
            ...newTodoList[index],
            status: newTodoList[index].status === 'new' ? 'updated' : 'new',
        }
        setTodoList(newTodoList);

    }

    const handleShowAllClick = () => {
        setFilterState('all');
    }

    const handleShowUpdatedClick = () => {
        setFilterState('updated');
    }

    const handleShowNewClick = () => {
        setFilterState('new');
    }

    const renderTodoList = todoList.filter(todo => filterState === 'all' || filterState === todo.status);
    return (
        <div>
            <h3>Todo List</h3>
            <TodoList todoList = {renderTodoList} onTodoClick={handleTodoClick}/>
            <div>
                <button onClick={handleShowAllClick}>Show All</button>
                <button onClick={handleShowUpdatedClick}>Show All</button>
                <button onClick={handleShowNewClick}>Show All</button>

            </div>
        </div>
    );
}

export default TodoFeature;