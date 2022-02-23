import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';
import { MainTitle, SearchInput } from '../components';



test('Rendering the main title', async () => {
    render(<MainTitle />)
    const title = screen.getByText(/My Gallary/i);
    expect(title).toBeInTheDocument();
})

test('Check the value in search input', () => {
    render(<SearchInput />);

    const input = screen.getByRole("input") as HTMLInputElement;
    expect(input.value).toBe('') 
    fireEvent.change(input, {target: {value: "Sample Search Term"}});
    expect(input.value).toBe("Sample Search Term");

})
