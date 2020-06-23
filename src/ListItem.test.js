import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ListItem from './ListItem';

describe('list item', () => {
  test('renders list item component without crashing', () => {
    render(<ListItem />);
  });

  test('calls toggleComplete handler', () => {
    const toggleComplete = jest.fn();
    render(<ListItem content="do dishes" isCompleted="false" toggleComplete={toggleComplete} />);

    fireEvent.change(screen.getByRole('textbox'), {
      target: {isComplete: 'true'},
    })
    expect(toggleComplete).toBeTruthy()
  });

  
});
