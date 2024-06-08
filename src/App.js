import React, { useState } from 'react';
import './App.css';
import Modal1 from './components/Modal_1/Modal1';
import Modal2 from './components/Modal_2/Modal2';
import BackAndNext from './components/Footer/Footer';

function App() {
  const [activeModal, setActiveModal] = useState(1);

  const handleNext = () => {
    setActiveModal(activeModal === 1 ? 2 : activeModal);
  };

  const handleBack = () => {
    setActiveModal(activeModal === 2 ? 1 : activeModal);
  };

  return (
    <>
      <div className='render-modal'>
        <div className='modal-top'>
          <h4 className='modal-heading'>
            Create new Account
          </h4>
          <a className='contact'>
            Contact Us
          </a>
        </div>
        <div>
          {activeModal === 1 ? <Modal1 /> : <Modal2 />}
        </div>
        <BackAndNext onNext={handleNext} onBack={handleBack} dataIsValid={true} />
      </div>
    </>
  );
}

export default App;
