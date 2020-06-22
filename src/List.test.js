import React from 'react';
import { render, screen } from '@testing-library/react';
import List from './List';

describe('list', () => {
  test('renders list component without crashing', () => {
    render(<List />);
  });
})
