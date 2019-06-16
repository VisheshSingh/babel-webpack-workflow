const users = [
  { name: 'yoshi', premium: true },
  { name: 'mario', premium: false },
  { name: 'peach', premium: true },
  { name: 'luigi', premium: false },
  { name: 'tuna', premium: true }
];

export const getPremUsers = users => {
  return users.filter(user => user.premium);
};

export default users;
