import React from 'react';
import { render } from '@testing-library/react';
import List from './List';

test('renders List component without crashing', () => {
  const div = document.createElement('div');
  render(<List />, div)
});
