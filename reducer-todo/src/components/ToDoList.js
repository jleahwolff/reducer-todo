import React, { useState, useReducer } from 'react';
import { initialState, ListReducer } from '../reducers/ListReducer';
import ToDo from '../components/ToDo';


// func
const ToDoList = () => {
    const [state, dispatch] = useReducer(ListReducer, initialState)
    const [newItem, setNewItem] = useState('')

    const handleChanges = e => {
        e.preventDefault();
        setNewItem(e.target.value)
    }
    
    const handleToggle = (id) => {
        dispatch({type: 'FINISH_ITEM', payload: id})
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({type:"ADD_ITEM", payload: newItem})
        setNewItem("")
    }

    return ( 
        <div>
            <ToDo state={state} dispatch={handleToggle} />
            <form>
                <label> Add a New Item</label>
                <input
                    type="text"
                    name="item"
                    value={newItem}
                    onChange={handleChanges}
                />
                <button onClick={handleSubmit}> Add your To Do Item</button>
            </form>
        </div>
)
}

export default ToDoList;