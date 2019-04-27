import React from 'react';

function ResultsHeader(props) {
    return (
        <div className = 'results-header'>
            <div>Showing {props.numberOfPlans} Plans</div>
        </div>
    )
}

export default ResultsHeader;