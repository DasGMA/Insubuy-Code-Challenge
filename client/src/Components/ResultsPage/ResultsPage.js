import React, { Component } from 'react';
import Axios from 'axios';
import Quote from './Quote';
import ResultsHeader from './ResultsHeader';
import Filters from './Filters';

const url = 'http://localhost:8080/quotes/';

class ResultsPage extends Component {
    constructor(props){
        super(props)
            this.state = {
                quotes: [],
                originalQuotes: []
            }
    }

    componentDidMount() {
        this.getQuotes();
    }

    getQuotes = () => {
        Axios.get(url)
            .then(res => {
                console.log(res.data)
                this.setState({
                    quotes: res.data.quotes,
                    originalQuotes: res.data.quotes
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

    bestSeller = () => {
        let quotes = this.state.quotes;
        let filterBestSellers = quotes.filter(quote => quote.bestSellers);
        this.setState({
            quotes: filterBestSellers
        })
    }

    clearFilters = () => {
        console.log('Restore')
        this.setState({
            quotes: this.state.originalQuotes
        })
    }

    render() {
        const options = ['Name Sort (A - Z)', 'Name Sort (Z - A)', 'Price Sort (low > high)','Price Sort (high > low)'];
        return (
            <div className = 'results-container'>
                <ResultsHeader 
                    numberOfPlans = {this.state.quotes.length}
                    name = 'sorting'
                    onChange = {this.sorting}
                    options = {options}
                    placeholder = 'Sort By'
                />
                <div className = 'filters-results-container'>
                    <Filters
                        onClick = {this.bestSeller}
                        clearFilters = {this.clearFilters}
                     />
                    <div>
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
                </div>    
            </div>
        )
    }
}

export default ResultsPage;