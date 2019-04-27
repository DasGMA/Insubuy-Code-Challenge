import React from 'react';
import Select from '../QuoteForm/Select';

function ResultsHeader(props) {
    return (
        <div className = 'results-header'>
            <div>Showing {props.numberOfPlans} Plans</div>
            <Select 
                title = {props.title}
                options = {props.options}
                name = {props.name}
                value = {props.value}
                label = {props.label}
                onChange = {props.onChange}
            />
        </div>
    )
}

export default ResultsHeader;