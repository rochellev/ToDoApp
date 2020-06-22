import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

// import React from 'react';
// import ReactDOM from 'react-dom'
// import App from './App';

test('renders app without crashing', () => {
  const div = document.createElement('div');
  render(<App />, div)
});
