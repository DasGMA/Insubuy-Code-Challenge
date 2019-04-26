import React from 'react';

const TextArea = (props) => {
    return (
        <div className = 'form-group'>
            <label htmlFor = {props.name} className = 'form-label'>{props.title}</label>
            <input 
                className = 'form-input'
                id = {props.name}
                name = {props.name}
                type = {props.type}
                value = {props.value}
                onChange = {props.onChange}
                placeholder = {props.placeholder}
            />
        </div>
    )
}

export default TextArea;