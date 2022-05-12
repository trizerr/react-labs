// import { transformUsers } from './transformUsers';
// import { additionalUsers, randomUserMock } from './usersMock';

export const validateUsers = (users) => {
  users.forEach((user, index) => {
    const isValid = validate(user);
    if (isValid) console.log(`is ${index} user valid: `, isValid);
  });
}; //lab3-task2

export const validate = (user) => {
  const { full_name, gender, note, state, city, country, age, phone, email } =
    user;
  const validators = [];
  validators.push(
    checkIfStringStartsWithCapitalLetter([
      full_name,
      gender,
      note,
      state,
      city,
      country,
    ])
  );
  validators.push(typeof age === 'number');
  validators.push(typeof phone === 'string');
  validators.push(validateEmail(email));
  return validators.every((validator) => validator);
};

const checkIfStringStartsWithCapitalLetter = (array) => {
  return array.every((field) => {
    return (
      !field ||
      (typeof field === 'string' && field[0].toUpperCase() === field[0])
    );
  });
};

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
