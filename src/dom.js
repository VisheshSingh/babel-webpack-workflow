console.log('dom.js');

const body = document.querySelector('body');

const styleBody = () => {
  body.style.background = 'peachpuff';
};

const addTitle = text => {
  const title = document.createElement('h1');
  title.innerText = text;
  body.appendChild(title);
};

styleBody();
addTitle('Hiyya ninjas!');
