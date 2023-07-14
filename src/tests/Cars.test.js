import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Car } from './../pages/Car';

const mockCarData = {
  id: 1,
  name: 'Car Name',
  shortDesc: 'Short description',
  longDesc: 'Long description',
  imgLink: 'https://example.com/image.jpg',
  perDayRental: 100,
};
describe('Car', () => {
  test('renders the car component with correct data', () => {
    render(
      <BrowserRouter>
        <Car data={mockCarData} />
      </BrowserRouter>
    );
    expect(screen.getByText('Car Name')).toBeTruthy();
    expect(screen.getByText('Short description')).toBeTruthy();
    expect(screen.getByText('Rs: 100/-')).toBeTruthy();
    expect(screen.getByRole('img', { src: 'https://example.com/image.jpg' })).toBeTruthy();
  });

  test('links to the correct car details page', () => {
    render(
      <BrowserRouter>
        <Car data={mockCarData} />
      </BrowserRouter>
    );
    const carLink = screen.getByRole('link', { name: 'Car Name' });
    expect(carLink).toBeTruthy();
    expect(carLink.getAttribute('href')).toBe('/car/1');
  });
});
