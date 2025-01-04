import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import UserProfile from './UserProfile'

describe('UserProfile Component', () => {
    test('renders UserProfile component', () => {
        render(<UserProfile />)
        const userProfileElement = screen.getByRole('region')
        expect(userProfileElement).toBeInTheDocument()
    })
})