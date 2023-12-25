import { Component } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getImg } from "api/api";
import { SubmitForm } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Button } from "./Button/Button";
import { Loader } from "./Loader/Loader";
import { ModalImg } from "./Modal/Modal"


export class App extends Component {
  state = {
    textForSearch: '',
    pictures: null,
    totalHits: null,
    error: null,
    status: 'idle',
    showModal: false,
    largeurl: '',
    alt: '',
    currentPage: 1,
  };


  getTextForSearch = (text) => {
    this.setState({ textForSearch: text });
  };
  
  componentDidUpdate(_, prevState) {
    if (
      prevState.textForSearch !== this.state.textForSearch ||
      prevState.currentPage !== this.state.currentPage
    ) {
      this.addImages();
    }
  }
  
  addImages = async () => {
    const { textForSearch, currentPage } = this.state;
  
    try {
      const data = await getImg(textForSearch, currentPage);
      const pictures = data.hits;
  
      if (!pictures.length) {
        this.setState({
          error: `Зображення ${textForSearch} відсутні`,
          status: 'rejected',
        });
      } else {
        this.setState((prevState) => ({
          pictures: [...prevState.pictures, ...pictures],
          status: 'resolved',
        }));
      }
    } catch (error) {
      this.setState({ error: error.message, status: 'rejected' });
    }
  };
  
  openModal = (event) => {
    this.setState({ largeurl: event.target.dataset.url });
    this.toggleModal();
  };
  
  toggleModal = () => {
    this.setState((prevState) => ({ showModal: !prevState.showModal }));
  };
  
  loadMore = () => {
    this.setState((prevState) => ({
      currentPage: prevState.currentPage + 1
    }), () => {
      this.addImages();
    });
};
  
  handleSubmit = (query) => {
    this.setState({
      textForSearch: query,
      pictures: [],
      currentPage: 1,
    });
  };
  
  render() {
    const { status, pictures, error, showModal, largeurl, alt } = this.state;
    const Btn = status === 'resolved' &&  pictures.length > 0;
    
    return (
      <>
        <SubmitForm onSubmit={this.handleSubmit} />
  
        {status === 'pending' && <Loader display="centre" />}
        {status === 'resolved' && <ImageGallery pictures={pictures} onOpenModal={this.openModal} />}
        {status === 'rejected' && <p>{error}</p>}
        {Btn && <Button loadMore={this.loadMore} />}
        {showModal && (
          <ModalImg closeModal={this.toggleModal}>
            <img src={largeurl} alt={alt} />
          </ModalImg>
        )}
        <ToastContainer autoClose={3000} />
      </>
    );
  }
  
};
