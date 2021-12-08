import React, { useState } from 'react';
import '../Shared/exam.css';
import Signup1 from '../components/Signup1';

const Signup = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className="form-container">
        <div className="form-content-left">
          <img className="form-img" src="img/imglogo.png" alt="spaceship" />
        </div>
        {!isSubmitted ? <Signup1 submitForm={submitForm} /> : <></>}
      </div>
    </>
  );
};

export default Signup;
