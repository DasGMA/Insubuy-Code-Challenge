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
                selection: '',
            }
    }

    componentDidMount() {
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
            
            case 'Name Sort':
            arr = this.state.quotes.sort((a, b) => a.name.localeCompare(b.name));
            this.setState({
                quotes: arr
            });
            break;

            case 'Price Sort':
            arr = this.state.quotes.sort((a, b) => a.price - b.price);
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
                <select onChange={this.sorting}>
                    <option value='blank'></option>
                    <option value='Name Sort'>Name Sort</option>
                    <option value='Price Sort'>Price Sort</option>
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