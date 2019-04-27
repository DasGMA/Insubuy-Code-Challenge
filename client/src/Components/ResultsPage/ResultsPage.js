import React, { Component } from 'react';
import Axios from 'axios';

const url = 'http://localhost:8080/quotes/';

class ResultsPage extends Component {
    constructor(props){
        super(props)
            this.state = {
                quotes: []
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

    render() {
        return (
            <div>{this.state.quotes.map(quote => {
                return(
                    <div>
                        <div>{quote.name}</div>
                        <div>{quote.description}</div>
                        <div>{quote.price}</div>
                        <div>{quote.type}</div>
                        <div>{quote.section}</div>
                    </div>
                )
            })}</div>
        )
    }
}

export default ResultsPage;