import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { UserInfo } from '../pages/UserInfo';

describe("UserInfoForm", () => {
    
      it('renders the form fields', () => {
        render(<MemoryRouter><UserInfo /></MemoryRouter>);
        expect(screen.getByTestId("name")).toBeInTheDocument();
        expect(screen.getByTestId("phone")).toBeInTheDocument();
        expect(screen.getByTestId("address")).toBeInTheDocument();
        expect(screen.getByTestId("driving")).toBeInTheDocument();
        expect(screen.getByTestId("pickUp")).toBeInTheDocument();
        expect(screen.getByTestId("dropOff")).toBeInTheDocument();
        expect(screen.getByTestId("box")).toBeInTheDocument();
        expect(screen.getByTestId("perday")).toBeInTheDocument();
        expect(screen.getByTestId("total")).toBeInTheDocument();
        expect(screen.getByTestId("totalprice")).toBeInTheDocument();
        expect(screen.getByTestId("submit")).toBeInTheDocument();
      });
});