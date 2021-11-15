import React from 'react';
import { render, screen } from '@testing-library/react';
 
import ExampleTwo from '../../src/exampletwo'
 
describe('exampletwo', () => {
  test('renders exampletwo component', () => {
    render(<ExampleTwo />);
    // screen.debug()
    // 隐式断言:返回包含字符串'Search'的dom
    screen.getByText("Search:");
    // 显式断言:更推荐
    expect(screen.getByText('Search:')).toBeInTheDocument();
    expect(screen.getByLabelText('input')).toBeInTheDocument();
  });
});