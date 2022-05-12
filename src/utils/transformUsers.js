const subjects = [
  'Mathematics',
  'Physics',
  'English',
  'Computer Science',
  'Dancing',
  'Chess',
  'Biology',
  'Chemistry',
  'Law',
  'Art',
  'Medicine',
  'Statistics',
];

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

//lab3-task1
export const transformUsers = (users, additionalUsers) => {
  return users.map((user, index) => ({
    id: index,
    favorite: additionalUsers[additionalUsers[index] ? index : 0].favorite,
    bg_color: additionalUsers[additionalUsers[index] ? index : 0].bg_color,
    note: additionalUsers[additionalUsers[index] ? index : 0].note,
    gender: user.gender,
    title: user.name.title,
    full_name: user.name.first + ' ' + user.name.last,
    city: user.location.city,
    state: user.location.state,
    country: user.location.country,
    postcode: user.location.postcode,
    coordinates: user.location.coordinates,
    timezone: user.location.timezone,
    email: user.email,
    b_date: user.dob.date,
    age: user.dob.age,
    phone: user.phone,
    picture_large: user.picture.large,
    picture_thumbnail: user.picture.thumbnail,
    course: subjects[getRandomInt(subjects.length)],
  }));
};
