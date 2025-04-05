import React from 'react';
import {describe, expect, test, beforeAll} from '@jest/globals';
import { render, screen } from '@testing-library/react'; 
import Auth from '../pages/auth';

describe('testing auth.tsx: ', () => {
    // beforeAll(() => {
    //     render(<Auth />);
    // })
    test('should render', () => {
        render(<Auth />);
        // Auth()
        
        const titleElement = screen.getByRole('heading', { level: 2 });
        expect(titleElement.textContent).toBe('Sign in');
        // expect(titleElement).toBeInTheDocument();
    });
    test('on click', () => {
        const loginVariantButton = screen.getByText('test element');
        console.log(loginVariantButton.textContent);
        expect(loginVariantButton).toBeDefined();

    });
})