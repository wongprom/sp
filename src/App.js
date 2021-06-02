import './App.css';
import SearchInput from './components/SearchInput';
import { AppWrapper } from './styledComponents/styles';
import gotImage from './assets/images/got-logo.png';
import HouseLists from './components/HouseLists';
import { useState } from 'react';
import Modal from './components/Modal';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [contextModal, setContextModal] = useState(null);
  const toggleModal = () => {
    // console.log('jag äör clickad ');
    setShowModal((prev) => !prev);
  };

  // console.log('🚀 ~ file: App.js ~ line 12 ~ App ~ contextModal', contextModal);
  // console.log('🚀 ~ file: App.js ~ line 11 ~ App ~ showModal', showModal);
  return (
    <AppWrapper>
      <Modal
        showModal={showModal}
        // setShowModal={setShowModal}
        toggleModal={toggleModal}
        contextModal={contextModal}
      />
      <header>
        <img src={gotImage} alt="Game of Thrones" />
      </header>
      <SearchInput />
      <HouseLists
        setShowModal={setShowModal}
        setContextModal={setContextModal}
        toggleModal={toggleModal}
      />
    </AppWrapper>
  );
}

export default App;
