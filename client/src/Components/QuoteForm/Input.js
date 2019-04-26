import React from 'react';

const Input = (props) => {
    return (
        <div className = 'form-group'>
            <label htmlFor = {props.name} className = 'form-label'>{props.title}</label>
            <input required
                className = 'form-input'
                id = {props.name}
                name = {props.name}
                type = {props.type}
                value = {props.value}
                onChange = {props.onChange}
                placeholder = {props.placeholder}
                onKeyPress = {props.onKeyPress}
            />
        </div>
    )
}

export default Input;