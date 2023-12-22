import styled from 'styled-components';

export const GalleryList = styled.ul`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
grid-auto-rows: 240px;
grid-gap: 40px;
justify-content: center;
list-style: none;
padding: 20px;
`;