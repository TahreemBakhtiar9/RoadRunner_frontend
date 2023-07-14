import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { CarDesc } from '../pages/CarDesc';

describe("Car Description Page", () =>{
    test("renders CarDesc component", () => {
        render(<MemoryRouter><CarDesc/></MemoryRouter>);
        expect(screen.getByText("Rs:")).toBeInTheDocument();
        expect(screen.getByTestId("carname")).toBeInTheDocument();
        expect(screen.getByTestId("carrental")).toBeInTheDocument();
        expect(screen.getByTestId("cardesc")).toBeInTheDocument();
    })
})