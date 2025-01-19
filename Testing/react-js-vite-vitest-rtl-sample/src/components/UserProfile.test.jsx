import { describe, test, expect, vi, beforeEach, afterEach} from 'vitest';
import { render, screen, waitFor } from '@testing-library/react'
import "@testing-library/jest-dom/vitest";

import UserProfile from './UserProfile'

describe('UserProfile Component', () => {
    beforeEach(() => {
        globalThis.fetch = vi.fn();
    });
    afterEach(() => {
        vi.restoreAllMocks();
    });  

    test('fetch and display the user data', async () => {
        globalThis.fetch.mockResolvedValueOnce({
            json: () => Promise.resolve({name: 'John Doe', email: 'aaa@gmail.com'}),
            });

        render(<UserProfile userId={4}/>)
        expect(screen.getByText('Loading...')).toBeInTheDocument();

        await waitFor(() => {
            expect(screen.getByText('John Doe')).toBeInTheDocument();
            expect(screen.getByText('aaa@gmail.com')).toBeInTheDocument();
        });
    })
})