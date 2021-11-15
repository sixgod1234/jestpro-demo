// test/example/Example.test.tsx

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Demo from '../../src/demo';

describe('Akskld', () => {
  test('renders Demo component', () => {
    render(<Demo />);
    expect(screen.getByText('hhh')).toBeInTheDocument();
  });
});