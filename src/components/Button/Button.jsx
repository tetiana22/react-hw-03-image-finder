import { Component } from 'react';
import { ButtonLoader } from "./Button.styled"

export class Button extends Component {
    state = {
        page: 2
    }

    addMoreImg = () => {
        this.setState(prevState => ({page: prevState.page + 1}))
        this.props.morePictures(this.state.page)
    }
    render() {
        return (
            <ButtonLoader type="button" onClick={this.addMoreImg}>Load more</ButtonLoader>
        )
    }
}