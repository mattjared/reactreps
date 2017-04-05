import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const people = [
  {
    name: 'Samwell Tarly',
    location: 'Old Town',
  },
  {
    name: 'Cersei Lannister',
    location: 'Kings Landing',
  },
  {
    name: 'Jon Snow',
    location: 'Winterfell',
  },
  {
    name: 'Arya Stark',
    location: 'The Twins',
  },
  {
    name: 'Daenerys Targaryen',
    location: 'The Narrow Sea',
  }
];

ReactDOM.render(
  <App people={people} />,
  document.getElementById('root')
);
