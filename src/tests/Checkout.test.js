import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Checkout } from '../pages/Checkout';

test("renders confirmation page",() => {
    render(<Checkout/>)
    expect(screen.getByText("Thank you for Renting Car from us!")).toBeInTheDocument();
})