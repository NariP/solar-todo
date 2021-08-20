import React from 'react';
import { useState } from 'react';

const useInputs = () => {
  const [value, setValue] = useState('');
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  const handleFocus = (): void => {
    setIsFocus(false);
  };

  const handleBlur = (): void => {
    setIsFocus(true);
  };
  return { value, isFocus, handleChange, handleFocus, handleBlur, setValue };
};

export default useInputs;
