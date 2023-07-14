import { render, screen } from '@testing-library/react';
import React from 'react';
import { Home } from './../pages/Home';
describe('Home', () => {
  test('renders the component without errors', async () => {
    render(<Home />);
    expect(screen.getByTestId('heading')).toBeTruthy();
  });

});
