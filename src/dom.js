console.log('dom.js');

const body = document.querySelector('body');

export const styleBody = () => {
  body.style.background = 'peachpuff';
};

export const addTitle = text => {
  const title = document.createElement('h1');
  title.innerText = text;
  body.appendChild(title);
};
