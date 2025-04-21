import React from 'react';
import {describe, expect, test, beforeAll, beforeEach} from '@jest/globals';
import { render, RenderResult, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Auth from '../pages/auth';
import { signIn } from 'next-auth/react';
// import axios from 'axios';


describe('testing auth.tsx: ', () => {
    let authComponent: RenderResult
    const signInMock = jest.spyOn(require('next-auth/react'), 'signIn');
    const axiosPostMock = jest.spyOn(require('axios'), 'post')

    beforeEach(() => {
        authComponent = render(<Auth />);
        signInMock.mockResolvedValue({ ok: true });
        axiosPostMock.mockResolvedValue({ status: 200 });
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
        const loginVariantHeader = await screen.getByText('Sign in');
        // const loginVariantButton = screen.findByAltText('Logo');
        // console.log(loginVariantButton.textContent);
        expect(loginVariantHeader).toBeDefined();
        expect(loginVariantHeader.textContent).toBe("Sign in");

    });
    test('should switch to Register', async () => {
        const loginVariantButton = await screen.findByText('Create an account');
        loginVariantButton.click();

        const registerVarientHeader = await screen.findByText('Register');
        expect(registerVarientHeader).toBeDefined();
        expect(registerVarientHeader.textContent).toBe('Register')
    });
    test('should login', async () => {
        const emailField = screen.getByLabelText('Email', { selector: 'input' });
        const passwordField = screen.getByLabelText('Password', { selector: 'input' });
        const loginButton = screen.getByText('Login', { selector: 'button' });

        await userEvent.type(emailField, 'user@example.com');
        await userEvent.type(passwordField, 'user123');
        
        expect((emailField as HTMLInputElement).value).toBe('user@example.com');
        expect((passwordField as HTMLInputElement).value).toBe('user123');

        await userEvent.click(loginButton);
        expect(signInMock).toHaveBeenCalled();
        expect(signIn).toHaveBeenCalledWith('credentials', {
            email: 'user@example.com',
            password: 'user123',
            callbackUrl: '/profiles'
        });

    });
    test('should register', async () => {
        const loginVariantButton = await screen.findByText('Create an account');
        loginVariantButton.click();

        const registerVarientHeader = await screen.findByText('Register');
        expect(registerVarientHeader.textContent).toBe('Register')

        const usernameField = screen.getByLabelText('Username', { selector: 'input' });
        const emailField = screen.getByLabelText('Email', { selector: 'input' });
        const passwordField = screen.getByLabelText('Password', { selector: 'input' });
        const loginButton = screen.getByText('Sign up', { selector: 'button' });

        await userEvent.type(usernameField, 'user123');
        await userEvent.type(emailField, 'user@example.com');
        await userEvent.type(passwordField, 'user123');

        await userEvent.click(loginButton);
        expect(axiosPostMock).toHaveBeenCalledWith('/api/register', {
            name: 'user123',
            email: 'user@example.com',
            password: 'user123',
        });
        expect(signIn).toHaveBeenCalledWith('credentials', {
            email: 'user@example.com',
            password: 'user123',
            callbackUrl: '/profiles'
        });
    });
})