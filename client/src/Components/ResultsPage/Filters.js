import React from 'react';

function Filters(props) {
    return(
        <div className = 'filters'>
            <div><h1>Filters</h1></div>
            <div><p>Filter by Policy Max</p></div>
            <div>
                <p>Filter by BestSeller</p>
                <button onClick = {props.onClick}>BestSeller</button>
            </div>
            <div><p>Filter by Type</p></div>
            <div><p>Filter by Section</p></div>
            <button onClick = {props.clearFilters}>Clear Filters</button>
        </div>
    )
}

export default Filters;