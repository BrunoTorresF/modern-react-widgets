import React from 'react';
import { Accordion, Search } from './components';

const items = [
  {
    title: 'What is React?',
    content: 'React is a frontend JavaScript library',
  },
  {
    title: 'What is React?',
    content: 'React is a frontend JavaScript library',
  },
  {
    title: 'What is React?',
    content: 'React is a frontend JavaScript library',
  },
];

const App = () => {
  return (
    <div>
      {/* <Accordion items={items} /> */}
      <Search />
    </div>
  );
};

export default App;
