import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';
import { Overlay, Modal } from './Modal.styled';

export class ModalImg extends Component {
  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.closeModal();
    }
  };

  handleBackdrop = event => {
    if (event.currentTarget === event.target) {
      this.props.closeModal();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
    this.modalContainer = document.createElement('div');
    document.body.appendChild(this.modalContainer);
    this.renderModal();
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
    document.body.removeChild(this.modalContainer);
  }

  renderModal() {
    createRoot(this.modalContainer).render(
      <Overlay onClick={this.handleBackdrop}>
        <Modal>{this.props.children}</Modal>
      </Overlay>
    );
  }

  render() {
    return null;
  }
}