import React from 'react';

const Select = (props) => {
    return (
        <div className = 'form-group'>
            <label htmlFor = {props.name}>{props.title}</label>
            <select 
                name = {props.name}
                value = {props.value}
                onChange = {props.onChange}
            >
            <option defaultValue = ''>{props.placeholder}</option>
            {props.options.map(policyOption => {
                return (
                    <option
                        key = {policyOption}
                        value = {policyOption}
                        label = {policyOption}>{policyOption}
                    </option>
                );
            })}
            </select>
        </div>
    )
}

export default Select;