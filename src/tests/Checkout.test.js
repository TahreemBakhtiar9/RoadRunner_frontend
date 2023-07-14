import '@testing-library/jest-dom';
import {Checkout} from '../pages/Checkout';
import React from 'react';
import { render, screen} from '@testing-library/react';

test("renders confirmation page",() => {
    render(<Checkout/>)
    expect(screen.getByText("Thank you for Renting Car from us!")).toBeInTheDocument();
})