// test/example/Example.test.tsx

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Example from '../../src/example';

describe('App', () => {
  test('renders App component', () => {
    render(<Example />)
    screen.debug()
    expect(screen.getByText('Hello React')).toBeInTheDocument()
  });
});