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
      this.setState({ text: value.toLowerCase() });
    }
    
    handleSubmit = (event) => {
      event.preventDefault();

      const { text } = this.state;
  
      if (text.trim() === "") {
        return toast.warn("Ви не ввели текст для пошуку!");
      } else {
        if (text === this.state.textForSearch) {
          return toast.warn(`Ви вже переглядаєте ${text}`);
    
        }
        this.setState({ textForSearch: text, images: [], currentPage: 1 });
        this.props.onSubmit(text);
        this.setState({ text: "" });
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