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
                options: ['Price Sort','Name Sort'],
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

    nameSort = () => {
        let arr = [];
        let sorted = this.state.quotes.sort((a, b) => a.name.localeCompare(b.name));
        arr.concat(sorted);
        this.setState({
            quotes: arr
        })
    }

    priceSort = () => {
        let arr = [];
        let sorted = this.state.quotes.sort((a, b) => a.price - b.price);
        arr.concat(sorted);
        this.setState({
            quotes: arr
        })
    }

    render() {

        return (
            <div>
                <ResultsHeader 
                    numberOfPlans = {this.state.quotes.length}
                    name = 'selection'
                    title = 'Sort By'
                    options = {this.state.options}
                    label = ''
                    value = {this.state.selection}
                    onChange = {this.handleChange}
                     
                />
            
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