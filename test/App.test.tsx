import React from 'react';
import Home from '../pages/index'

import { render, screen } from '@testing-library/react';
import { MainTitle } from '../components';
// import { getPage } from 'next-page-tester';


// test('render the list of images', async () => {
//     render(<Home />)
//     const title = screen.getByText(/My Gallary/i);
//     expect(title).toBeInTheDocument();
// })

test('render the list of images', async () => {
    render(<MainTitle />)
    const title = screen.getByText(/My Gallary/i);
    expect(title).toBeInTheDocument();
})


// test('renders learn react link', () => {
//   render(<SearchInput />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });