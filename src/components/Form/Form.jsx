import React from 'react';

import './Form.css';

const Form = ({
  handleSubmit,
  formTitle,
  formSubTitle,
  children,
  style,
  className,
  inputDirection,
}) => {
  return (
    <form
      className={`app__form ${className}`}
      style={style}
      onSubmit={handleSubmit}
    >
      <div className='app__form-heading'>
        {formTitle && <h1 className='headtext__cormorant'>{formTitle}</h1>}

        {formSubTitle && <p className='p__opensans'>{formSubTitle}</p>}
      </div>
      <div className='app__form-input flex__center'>{children}</div>
    </form>
  );
};

export default Form;
