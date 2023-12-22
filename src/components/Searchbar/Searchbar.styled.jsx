import styled from 'styled-components';

export const Header = styled.header`
  
`;


  export const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
    margin-bottom: 15px;
    position: sticky;
    top: 0;
    height: 50px;
    background-color: #639edf;
    z-index: 1;`;

export const Input = styled.input`
    padding: 8px;
    border: 1px solid gray;
    border-radius: 4px;
    margin-right: 4px;
}`;

export const BtnSearch = styled.button`
    padding: 8px;
    background-color: #fff;
    border-color:#639edf ;
    border: 3px solid gray;
    border-radius: 4px;
    cursor: pointer;
    transition-duration: 0.4s;
    &:hover {
        background-color: #ead5c6;; 
        color: #639edf;}
`;

