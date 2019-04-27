import React, { Component } from 'react';
import Axios from 'axios';
import Quote from './Quote';
import ResultsHeader from './ResultsHeader';

const url = 'http://localhost:8080/quotes/';

class ResultsPage extends Component {
    constructor(props){
        super(props)
            this.state = {
                quotes: [],
            }
    }

    componentDidMount() {
        this.getQuotes();
    }

    getQuotes = () => {
        Axios.get(url)
            .then(res => {
                console.log(res)
                this.setState({
                    quotes: res.data.quotes
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    sorting = (event) => {
        let arr = [];

        switch(event.target.value) {
            
            case 'Name Sort (A - Z)':
            arr = this.state.quotes.sort((a, b) => a.name.localeCompare(b.name));
            this.setState({
                quotes: arr
            });
            break;

            case 'Name Sort (Z - A)':
            arr = this.state.quotes.sort((a, b) => b.name.localeCompare(a.name));
            this.setState({
                quotes: arr
            });
            break;

            case 'Price Sort (low > high)':
            arr = this.state.quotes.sort((a, b) => a.price - b.price);
            this.setState({
                quotes: arr
            });
            break;

            case 'Price Sort (high > low)':
            arr = this.state.quotes.sort((a, b) => b.price - a.price);
            this.setState({
                quotes: arr
            });
            break;

            default:
            break;
        }
    }

    render() {

        return (
            <div>
                <div>
                <ResultsHeader 
                    numberOfPlans = {this.state.quotes.length}
                />
                <label>Sort by: </label>
                <select onChange={this.sorting}>
                    <option value='blank'></option>
                    <option value='Name Sort (A - Z)'>Name Sort (A - Z)</option>
                    <option value='Name Sort (Z - A)'>Name Sort (Z - A)</option>
                    <option value='Price Sort (low > high)'>Price Sort (low > high)</option>
                    <option value='Price Sort (high > low)'>Price Sort (high > low)</option>
                </select>
                </div>
                
            
                    {this.state.quotes.map(quote => {
                        return(
                            <Quote
                                key = {quote.id + quote.name}
                                name = {quote.name}
                                description = {quote.description}
                                price = {quote.price}
                                type = {quote.type}
                                section = {quote.section}
                                n = {quote.name}
                                t = 'checkbox'
                                title = 'Compare'
                            />
                        )
                    })}
            
            </div>
        )
    }
}

export default ResultsPage;