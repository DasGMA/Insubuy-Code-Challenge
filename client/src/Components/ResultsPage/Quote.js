import React from 'react';
import Input from '../QuoteForm/Input';
import './index.css';

function Quote(props) {
    return(
        <div className = 'quote-card'>
            <div >
                <div><h1>{props.name}</h1></div>
                <div><h3>{props.description}</h3></div>
                <div><p>{props.section}</p></div>
                <div><p>{props.type}</p></div>
            </div>
            <div>
                <div><h1>${props.price}</h1></div>
                <Input 
                    name = {props.n}
                    type = {props.t}
                    title = {props.title}
                />
            </div>
            <div>
                <div><button>Add to Cart</button></div>
                <div><button>Details</button></div>
            </div>
        </div>
    )
}
export default Quote;