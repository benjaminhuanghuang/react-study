import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Counter from './Counter'

describe('Counter component', () => {
    test('renders Counter component', () => {
        render(<Counter />)
        const divElement = screen.getByRole('generic', { name: '' })
        expect(divElement).toBeInTheDocument()
    })
})