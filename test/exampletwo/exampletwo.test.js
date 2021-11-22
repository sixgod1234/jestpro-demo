import React from 'react';
import { render, screen } from '@testing-library/react';
 
import ExampleTwo from '../../src/exampletwo'
 
describe('exampletwo', () => {
  test('renders exampletwo component', () => {
    render(<ExampleTwo />);
    // screen.debug()
        // 隐式断言:返回包含字符串'Search'的dom。如果匹配多个Search:也会报错
        screen.getByText(/Search:/);
        // 显式断言:更推荐
        expect(screen.getByText('Search:')).toBeInTheDocument();
      });
        test('getByRole', () => {
            render(<ExampleTwo />);
            // 如果没有传入role,将会展示所有可用的role
            expect(screen.getByRole('textbox')).toBeInTheDocument();
            expect(screen.getByLabelText('Search:')).toBeInTheDocument();
            expect(screen.getByPlaceholderText('test')).toBeInTheDocument();
        })
    });

import { render, screen } from '@testing-library/react';
 
import ExampleTwo from '../../src/exampletwo'
import AsyncExam from '../../src/asyncexam'
 
describe('exampletwo getBy', () => {
  test('renders exampletwo component', () => {
    render(<ExampleTwo />);
    // screen.debug()
    // 隐式断言:返回包含字符串'Search'的dom
    expect(screen.getByText(/Search:/)).toBeInTheDocument();
    // 显式断言:更推荐
    expect(screen.getByText('Search:')).toBeInTheDocument();
  });
    
    test('getByRole', () => {
        render(<ExampleTwo />);
        // 如果没有传入role,将会展示所有可用的role
        expect(screen.getByRole('textbox')).toBeInTheDocument();
        expect(screen.getByLabelText('Search:')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('test')).toBeInTheDocument();
    })
});

// describe('queryBy', () => {
//     test('queryBy 和 getBy区别对比', () => {
//         render(<ExampleTwo />);
//         // 报错
//         expect(screen.getByText(/Searches for JavaScript/)).toBeNull();
//         // 通过
//         expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();
//     })
// })

// describe('findBy', () => {
//   test('findBy 和 getBy区别对比', async () => {
//     render(<AsyncExam />);
//     expect(screen.queryByText(/Signed in as/)).toBeNull();
//     screen.debug();
//     expect(await screen.findByText(/Signed in as/)).toBeInTheDocument();
//     screen.debug();
//   });
// });