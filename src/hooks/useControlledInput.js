import { useState } from 'react';

const useControlledInput = (
  initialState = '',
  transformers = [],
  validators = [],
  ...options
) => {
  const { dynamic, setGlobalErrors, globalErrors, validateOnChange } = options;
  const [input, setInput] = useState(initialState);
  const [errors, setErrors] = useState([]);

  const handleUpdateInput = (input) => {
    let transformedInput = input;

    if (transformers && transformers.length > 0) {
      transformers.forEach((transformer) => {
        transformedInput = transformer(transformedInput);
      });
    }

    if (validateOnChange) {
      handleValidateInput(transformedInput);
    }

    setInput(transformedInput);
    if (dynamic === false) {
      return transformedInput;
    }
  };

  const handleValidateInput = (input) => {
    const validationErrors = [];

    console.log('validation called');

    if (validators && validators.length > 0) {
      validators.forEach((validator) => {
        const error = validator(input);

        console.log(validator(input));

        if (error) {
          validationErrors.push(error);
        }
      });
    }

    setErrors(validationErrors);

    if (globalErrors) {
      globalErrors.value[globalErrors.key] = validationErrors;
      setGlobalErrors({ ...globalErrors.value });
    }

    return validationErrors;
  };

  return [
    input,
    dynamic ? handleUpdateInput : setInput,
    handleValidateInput,
    errors,
    handleUpdateInput,
  ];
};

export default useControlledInput;
