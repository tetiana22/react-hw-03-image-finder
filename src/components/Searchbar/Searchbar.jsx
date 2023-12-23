import React, { Component } from "react";
import { Form, BtnSearch, Input } from "./Searchbar.styled";
import { toast } from 'react-toastify';

export class SubmitForm extends Component  {
    state = {
        text: '',
        images: [],
        currentPage: 1,
    }


    receiveTextForSearch = text => {
        this.setState({ textForSearch: text });
    };
    handleSearch = ({ currentTarget: { value } }) => {
        this.setState({text: value.toLowerCase()})
    }
    handleSubmit = event => {
        event.preventDefault();
        if (this.state.text.trim() === '') {
            return toast.warn('Ви не ввели текст для пошуку!');
        } else {
            this.setState({
                text: this.state.text,
                images: [],
                currentPage: 1
            });
            this.props.onSubmit(this.state.text); 
            this.setState({ text: '' });
        }
    };

    render() {
        return (
            
            <Form onSubmit={this.handleSubmit}>
                <Input
                    type="text"
                    name="text"
                    value={this.state.text}
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    onChange={this.handleSearch}
                />
                <BtnSearch type="submit">Search</BtnSearch>
 
            </Form>
        
        )
    }
    
}