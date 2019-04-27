import React, { Component } from 'react';
import Input from './Input';
import Select from './Select';
import Button from '../Button/Button';
import './index.css';
import Axios from 'axios';

const url = 'http://localhost:8080/quotes/'

class QuoteForm extends Component {
    constructor(props){
        super(props)
            this.state = {
                startDate: '',
                endDate: '',
                citizenship: '',
                policyMax: '',
                age: '',
                mailingState: ''
            }
            this.baseState = this.state;
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        const newTraveler = {
            startDate: this.state.startDate,
            endDate: this.state.endDate,
            citizenship: this.state.citizenship,
            policyMax: this.state.policyMax,
            age: this.state.age,
            mailingState: this.state.mailingState,
        }
        Axios.post(url, newTraveler)
            .then(res => {
                if (res.data.success) {
                    window.location = '/results';
                }
            })
            .catch(error => {
                console.log(error)
                alert(`There was an error entering information. All fields are required. Try again.`);
            })

            this.setState(this.baseState)
    }

    handleClearForm = (event) => {
        event.preventDefault();
        this.setState (this.baseState)
    }

    validateText = (event) => {
        const reg = /[a-zA-Z]+/g;
        if (!reg.test(event.key)) {
            event.preventDefault()
        }
    }

    render() {
        const policyMaxOptions = [50.000, 100.000, 250.000, 500.000];
        return (
            <form className = 'container' onSubmit = { this.handleFormSubmit }>
                <div className = 'policy-age-container'>
                    <Select 
                        options = {policyMaxOptions}
                        placeholder = 'Choose your policy maximum'
                        name = 'policyMax'
                        title = 'Policy Maximum'
                        onChange = {this.handleChange}
                        value = {this.state.policyMax}
                    /> {/* Policy max selection */}
                    <Input 
                        name = 'age'
                        title = 'Age'
                        type = 'text'
                        placeholder = 'Choose your age'
                        onChange = {this.handleChange}
                        value = {this.state.age}
                    /> {/* Age/Year text box*/}
                </div>

                <div className = 'dates-citizenship-container'>

                    <div>
                        <label className = 'dates-label'>Travel Dates (mm/dd/yyyy)</label>
                        <div className = 'form-dates-container'>
                            <Input 
                                name = 'startDate'
                                type = 'date'
                                placeholder = 'Start Date'
                                onChange = {this.handleChange}
                                value = {this.state.startDate}
                            /> {/* Start date */}
                            <Input 
                                name = 'endDate'
                                type = 'date'
                                placeholder = 'End Date'
                                onChange = {this.handleChange}
                                value = {this.state.endDate}
                            /> {/* End date */}
                        </div>
                    </div>
                    <Input 
                        id = 'citizenship'
                        name = 'citizenship'
                        type = 'text'
                        placeholder = 'Choose your country of citizenship'
                        title = 'Citizenship'
                        onChange = {this.handleChange}
                        value = {this.state.citizenship}
                        onKeyPress = {this.validateText}
                    /> {/* Citizenship text box */}
                </div>

                <Input 
                    id = 'mailingState'
                    name = 'mailingState'
                    type = 'text'
                    placeholder = 'Choose state'
                    title = 'Mailing State'
                    onChange = {this.handleChange}
                    value = {this.state.mailingState}
                    onKeyPress = {this.validateText}
                /> {/* Mailing state text box */}

                <div className = 'buttons-container'>
                    <Button 
                        title = 'GET QUOTES'
                        onClick = {this.handleFormSubmit}
                    />
                    <Button 
                        title = 'Reset From'
                        onClick = {this.handleClearForm}
                    />
                </div>
            </form>
        )
    }
}

export default QuoteForm;