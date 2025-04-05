import React from 'react';
import {describe, expect, test, beforeAll, beforeEach} from '@jest/globals';
import { render, screen } from '@testing-library/react'; 
import Auth from '../pages/auth';

describe('testing auth.tsx: ', () => {
    beforeEach(() => {
        render(<Auth />);
    })
    test('should render', () => {
        // render(<Auth />);
        // Auth()
        
        const titleElement = screen.getByRole('heading', { level: 2 });
        const logoElement = screen.findByAltText('Logo');
        expect(titleElement.textContent).toBe('Sign in');
        expect(logoElement).toBeDefined();
        // expect(logoElement).toBeInTheDocument();
    });
    test('should start out as Sign in', async () => {
        const loginVariantButton = await screen.getByText('Sign in');
        // const loginVariantButton = screen.findByAltText('Logo');
        // console.log(loginVariantButton.textContent);
        expect(loginVariantButton).toBeDefined();

    });
})