import { describe, test, expect } from 'vitest';

import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

describe('Greeting component', () => {
    test('renders Greeting component', () => {
        render(<Greeting />);
        const divElement = screen.getByRole('generic', { name: '' });
        expect(divElement).toBeInTheDocument();
    });
});