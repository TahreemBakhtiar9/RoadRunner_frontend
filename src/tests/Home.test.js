import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Home } from '../pages/Home';


test("renders Home page",() => {
  render(<Home/>)
  expect(screen.getByText("RoadRunner Rental Car")).toBeInTheDocument();
})
