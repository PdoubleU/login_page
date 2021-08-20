import React, { useState, useEffect } from 'react';
import './App.css';
import './assets/scss/blk-design-system-react.scss';
import Forms from './components/form';
import ModalElement from './components/modal';
import Wrapper from './components/wrapper';
import { useIdleTimer } from 'react-idle-timer';

const initialValues = {
  idleSecAllowed: 20,
  idleDelaySec: 2000,
};

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFirstSection, setIsFirstSection] = useState(true);
  const [remainingSec, setRemainingSec] = useState(
    initialValues.idleSecAllowed
  );
  const [isTimerVisible, setIsTimerVisible] = useState(false);
  const [timerID, setTimerId] = useState();

  useEffect(() => {
    if (remainingSec === 0) {
      !isFirstSection && toggleSection();
      document.querySelector('.register_form').reset();
      setIsTimerVisible(false);
      clearInterval(timerID);
      setRemainingSec(initialValues.idleSecAllowed);
      reset();
    }
  }, [remainingSec]);

  const startTimer = () => {
    let id = setInterval(() => {
      setRemainingSec((remainingSec) => remainingSec - 1);
    }, 1000);
    setTimerId(id);
  };

  const handleOnIdle = () => {
    setIsTimerVisible(true);
    startTimer();
  };

  const handleOnActive = () => {
    setIsTimerVisible(false);
    clearInterval(timerID);
    setRemainingSec(initialValues.idleSecAllowed);
  };

  const { reset } = useIdleTimer({
    timeout: initialValues.idleDelaySec,
    onIdle: handleOnIdle,
    onActive: handleOnActive,
    debounce: 500,
  });

  const onSubmit = () => {
    setIsOpen(true);
    reloadPage(3000);
  };

  const toggleSection = () => {
    setIsFirstSection(!isFirstSection);
  };

  const reloadPage = (timing) => {
    setTimeout(() => window.location.reload(), timing);
  };

  return (
    <>
      <ModalElement isOpen={isOpen}></ModalElement>
      <Wrapper>
        <Forms
          isFirstSection={isFirstSection}
          handleNext={toggleSection}
          onSubmit={onSubmit}
          isTimerVisible={isTimerVisible}
          timer={remainingSec}
        ></Forms>
      </Wrapper>
    </>
  );
};

export default App;
