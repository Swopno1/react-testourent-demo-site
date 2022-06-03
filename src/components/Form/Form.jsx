import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Form.css';

const Form = ({
  subHeading,
  handleSubmit,
  formTitle,
  formSubTitle,
  children,
}) => {
  return (
    <form className='app__form' onSubmit={handleSubmit}>
      <div className='app__form-heading'>
        {subHeading && <SubHeading>{subHeading}</SubHeading>}

        {formTitle && <h1 className='headtext__cormorant'>{formTitle}</h1>}

        {formSubTitle && <p className='p__opensans'>{formSubTitle}</p>}
      </div>
      <div className='app__form-input flex__center'>{children}</div>
    </form>
  );
};

export default Form;
