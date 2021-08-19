import React, { useState } from 'react';
import './App.css';
import './assets/scss/blk-design-system-react.scss';
import Forms from './components/form';
import ModalElement from './components/modal';
import Wrapper from './components/wrapper';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFirstSection, setIsFirstSection] = useState(true);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const toggleSection = () => {
    setIsFirstSection(!isFirstSection);
  };

  return (
    <>
      <ModalElement isOpen={isOpen}></ModalElement>
      <Wrapper>
        <Forms
          isFirstSection={isFirstSection}
          handleNext={toggleSection}
        ></Forms>
      </Wrapper>
    </>
  );
};

export default App;
