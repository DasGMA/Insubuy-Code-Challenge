import React from 'react';
import Select from '../QuoteForm/Select';

function ResultsHeader(props) {
    return (
        <div className = 'results-header'>
            <div>Showing {props.numberOfPlans} Plans</div>
            <Select 
                    name = {props.name}
                    title = {props.title}
                    onChange = {props.onChange}
                    options = {props.options}
                    placeholder = {props.placeholder}
                />
        </div>
    )
}

export default ResultsHeader;