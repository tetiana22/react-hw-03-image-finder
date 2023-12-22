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
    urlBig: '',
    alt: '',
  };



    getTextForSearch = text => {
      this.setState({ textForSearch: text });
    };

    async componentDidUpdate(_, prevState) {
      const { textForSearch } = this.state;
  
      if (prevState.textForSearch !== textForSearch) {
        this.setState({ status: 'pending' });
  
        try {
          const data = await getImg(textForSearch);
          const pictures = data.hits;
          const totalHits = data.totalHits;
  
          if (!pictures.length) {
            this.setState({
              error: `Зображення ${textForSearch} відсутні`,
              status: 'rejected',
            });
          } else {
            this.setState({ pictures, status: 'resolved', totalHits });
          }
        } catch (error) {
          this.setState({ error: error.message, status: 'rejected' });
        }
      }
    }
    addImages = async page => {
      const { textForSearch } = this.state;
  
      try {
        const data = await getImg(textForSearch, page);
        const pictures = data.hits;
  
        if (!pictures.length) {
          this.setState({
            error: `Зображення ${textForSearch} відсутні`,
            status: 'rejected',
          });
        } else {
          this.setState(prevState => ({
            pictures: [...prevState.pictures, ...pictures],
            status: 'resolved',
          }));
        }
      } catch (error) {
        this.setState({ error: error.message, status: 'rejected' });
      }
    };
   
  openModal = event => {
    this.setState({ urlBig: event.target.dataset.url });
    this.toggleModal();
  };

 
  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };
  
  render() {
    const { status, pictures, error, totalHits, showModal, urlBig, alt } = this.state;
    const Btn= status === 'resolved' && totalHits > pictures.length;
    
    return (
      <>
       <SubmitForm onSubmit={this.getTextForSearch} />

        {status === 'pending' && <Loader display="centre"/>}
        {status === 'resolved' && ( <ImageGallery pictures={pictures} onOpenModal={this.openModal} />)}
        {status === 'rejected' && <p>{error}</p>}
        {Btn && <Button morePictures={this.addImages} />}
        {showModal && (
          
          <ModalImg closeModal={this.toggleModal}>
            <img src={urlBig} alt={alt} />
          </ModalImg>
        )}

        <ToastContainer autoClose={3000} />
      </>
    );
  }
  
};
