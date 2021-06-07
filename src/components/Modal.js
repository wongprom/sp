import { XIcon } from '@heroicons/react/solid';
import React from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';
import { getImageByKey } from '../assets/mockData';

const Modal = ({ showModal, setShowModal, toggleModal, contextModal }) => {
  if (!showModal) return null;

  return ReactDom.createPortal(
    <>
      <Overlay onClick={toggleModal} />
      <ModalWrapper>
        <ImageWrapper>
          <CloseIconWrapper onClick={toggleModal}>
            <XIcon />
          </CloseIconWrapper>
          <img src={getImageByKey(contextModal.imageHouse)} />
        </ImageWrapper>
        <TextBoxWrapper>
          <h3>
            {contextModal?.name.toUpperCase()}, of region{' '}
            {contextModal.region?.toUpperCase()}
          </h3>
          {contextModal.coatOfArms && (
            <p>
              <span>
                <strong>Coat Of Arms:</strong>{' '}
              </span>
              {contextModal.coatOfArms}
            </p>
          )}
          {contextModal.words && (
            <p>
              <span>
                <strong>Words:</strong>{' '}
              </span>
              {contextModal.words}
            </p>
          )}
          {contextModal.titles && contextModal.titles[0] !== '' && (
            <>
              <p>
                <span>
                  <strong>Titles</strong>
                </span>
              </p>
              <ul>
                {contextModal.titles.map((title, index) => {
                  return <li key={title}>{title}</li>;
                })}
              </ul>
            </>
          )}
          {contextModal.swornMembers && (
            <p>
              <span>
                <strong>Sworn Members:</strong>{' '}
              </span>
              {contextModal.swornMembers.length}
            </p>
          )}
        </TextBoxWrapper>
      </ModalWrapper>
    </>,
    document.getElementById('modal-root')
  );
};

export default Modal;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`;

export const ModalWrapper = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Alegreya+Sans:ital,wght@1,100;1,300&family=Cardo:ital@0;1&family=Cinzel+Decorative:wght@400;700&family=MedievalSharp&display=swap');
  width: 80%;
  max-width: 470px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  background-color: black;
  color: white;
  /* padding: 20px; */
  box-shadow: 0px 0px 21px 4px rgb(196 196 196 / 50%);
  border-radius: 5px;
`;

export const ImageWrapper = styled.div`
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export const TextBoxWrapper = styled.div`
  color: #d5d5d7;
  padding: 20px;
  p {
    font-family: 'Cardo', serif;
    color: white;
    span {
      color: #d5d5d7;
    }
  }
  h3 {
    font-family: 'Cinzel Decorative', cursive;
    text-align: center;
    letter-spacing: 1px;
    text-decoration: underline;
  }
`;
export const CloseIconWrapper = styled.div`
  position: fixed;
  top: 25px;
  right: 25px;
  height: 25px;
  width: 25px;
  &:hover {
    cursor: pointer;
  }
`;
