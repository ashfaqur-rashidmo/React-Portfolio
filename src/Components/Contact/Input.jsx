
import React, { useState } from 'react';
import { validateForm } from '../Backend/Validation.jsx';
const FloatingInput = ({ id, value, handleInputChange, name, isTextarea = false }) => {
  const [error, setError] = useState('');

  const onInputChange = (id, value) => {
    handleInputChange(id, value);

    const errorMsg = validateForm(id, value);
    setError(errorMsg);
  };

  return (
    <div className="relative">
      {isTextarea ? (
        <textarea
          id={id}
          value={value}
          onChange={(e) => onInputChange(id, e.target.value)}
          className="block pl-3 pb-2.5 pt-4 w-full text-xl text-white bg-bgColor rounded-xl border border-textColor appearance-none hover:shadow-[0_0px_10px_0_#64FFDA50] focus:outline-none focus:ring-0 focus:border-primaryColor peer resize-none"
          placeholder=" "
          rows="4"
        />
      ) : (
        <input
          type="text"
          id={id}
          value={value}
          onChange={(e) => onInputChange(id, e.target.value)}
          className="block pl-3 pb-2.5 pt-4 w-full text-xl text-white bg-bgColor rounded-xl border border-textColor appearance-none hover:shadow-[0_0px_10px_0_#64FFDA50] focus:outline-none focus:ring-0 focus:border-primaryColor peer"
          placeholder=" "
        />
      )}

      <label
        htmlFor={id}
        className={`absolute text-xl text-textColor duration-300 transform scale-100 top-1/2 z-10 origin-[0] bg-bgColor px-2 peer-focus:px-2 peer-focus:text-primaryColor 
          peer-placeholder-shown:scale-100 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 
          peer-focus:top-2 peer-focus:scale-90 peer-focus:-translate-y-4 
          ${value ? 'top-2 scale-90 -translate-y-4' : ''} ml-2`}
      >
        {name}
      </label>

      {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}
    </div>
  );
};

export default FloatingInput;
