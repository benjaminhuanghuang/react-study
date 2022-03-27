import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './Clock';    // "Clock" is module alias defined in jest.config.json

describe('Clock', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Clock/>, div);
    });
});