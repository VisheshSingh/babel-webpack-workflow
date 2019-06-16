import { styleBody, addTitle } from './dom';
import users, { getPremUsers } from './data';

console.log('index.js');
styleBody();
addTitle('hey boys!');
console.log('test');
console.log('Users: ', users);
console.log('Premium Users: ', getPremUsers(users));
