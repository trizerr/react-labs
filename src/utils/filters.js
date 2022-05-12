export const filterUsers = ({
  country,
  age,
  gender,
  favorite = undefined,
  users,
}) => {
  return users.filter((user) => {
    return (
      (!country || country.toLowerCase() === user.country.toLowerCase()) &&
      (!age ||
        age.toString().toLowerCase() === user.age.toString().toLowerCase()) &&
      (!gender || gender.toLowerCase() === user.gender.toLowerCase()) &&
      (favorite === null || favorite === user.favorite)
    );
  });
}; //lab3-task3

export const sortUsers = ({ sortBy, users, isAscending = true }) => {
  return users.sort((a, b) => {
    if (a[sortBy] > b[sortBy]) return isAscending ? 1 : -1;
    if (a[sortBy] < b[sortBy]) return isAscending ? -1 : 1;
    return 0;
  });
}; //lab3-task4

export const findUsers = ({ searchString, users }) => {
  return users.filter((user) => {
    return (
      (user.full_name &&
        user.full_name.toLowerCase().includes(searchString.toLowerCase())) ||
      (user.notes &&
        user.notes.toLowerCase().includes(searchString.toLowerCase())) ||
      (user.age && user.age.toString().includes(searchString.toLowerCase()))
    );
  });
}; //lab3-task5

export const percentOfFoundUsers = ({ users, foundUsers }) => {
  return (foundUsers.length / users.length) * 100;
}; //lab3-task6
