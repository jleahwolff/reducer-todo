import React from 'react';

const ToDo = props => {
    return (
        <div>
            {props.state.map(item => {
                return (
                    <div className = {item.finished ? 'completed' : ''}
                    onClick={() => props.dispatch(item.id)}
                    key={item.id}>
                        <p>{item.item}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default ToDo;