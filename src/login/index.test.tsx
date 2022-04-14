import React from 'react'
import {fireEvent, render, screen,} from '@testing-library/react'
import Login from "./index";

test('on click loginButton', () => {
    render(<Login />)

    const loginButton = screen.getByTestId('loginButton');
    expect(loginButton).toBeInTheDocument();

    fireEvent.click(loginButton);
})