import React, { useState, useReducer } from 'react';

export const initialState = {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
};

export const ListReducer = (state, action) => {

    switch (action.type) {
        case 'ADD_ITEM':
            return [ 
                ...state,
                {item: action.payload, completed:false, id:Date.now()
            }]
        case 'FINISH_ITEM':
            return state.map(item => {
                return item.id === action.payload ? {...item, finished: !item.finished} : item
            })
            default:
                return state
    };
}
