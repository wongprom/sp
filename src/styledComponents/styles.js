import styled from 'styled-components';
import { SearchIcon } from '@heroicons/react/solid';
import mainBackgroundImage from '../assets/images/background-1.jpeg';

export const AppWrapper = styled.div`
  background-image: url(${mainBackgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 100vh;

  header {
    padding: 20px 10px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
