import React from 'react';
import { render, screen } from '@testing-library/react';
import ListItem from './ListItem';

describe( 'ListItem', () => {
  test('renders ListItem component', () => {
    render(<ListItem />);
    screen.debug();
  });
});