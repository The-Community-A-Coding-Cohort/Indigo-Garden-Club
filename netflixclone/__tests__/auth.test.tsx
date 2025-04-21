import React from 'react';
import {describe, expect, test, beforeAll, beforeEach} from '@jest/globals';
import { render, RenderResult, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Auth from '../pages/auth';
import { signIn } from 'next-auth/react';


describe('testing auth.tsx: ', () => {
    let authComponent: RenderResult
    beforeEach(() => {
        authComponent = render(<Auth />);
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
        const signInMock = signIn as jest.Mock;
        signInMock.mockResolvedValue({ ok: true });


        // jest.mock('signIn', () => {
        //     console.log('this is mocked signIn')
        // });
        
        const emailField = screen.getByLabelText('Email', { selector: 'input' });
        const passwordField = screen.getByLabelText('Password', { selector: 'input' });
        const loginButton = screen.getByText('Login', { selector: 'button' });

        // expect(emailField).toBeDefined();
        // emailField.insertAdjacentText(emailField, 'test');
        await userEvent.type(emailField, 'user@example.com');
        await userEvent.type(passwordField, 'user123');
        
        expect((emailField as HTMLInputElement).value).toBe('user@example.com');
        expect((passwordField as HTMLInputElement).value).toBe('user123');

        await userEvent.click(loginButton);
        expect(signInMock).toHaveBeenCalled();
        // expect(signIn).toHaveBeenCalledWith('credentials', {
        //    gvit email: 'user@example.com',
        //     password: 'user123',
        //     redirect: false,
        // });

    });
    // test('should register', async () => {
    //     //
    //     const userNameField = await screen.getByLabelText("Email");
    //     userNameField.click
    // });
})