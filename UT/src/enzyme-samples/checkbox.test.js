import React from 'react';
import ReactDom from  'react-dom';
import ReactTestUtils from 'react-dom/test-utils';

jest.dontMock('./Checkbox');

//const Checkbox = require('../src/checkbox');
import Checkbox from './Checkbox';

describe('test react checkbox component', () => {
    it('change the label after click', () => {
        //1 render component
        //2 get node label get default value off
        //3 simulate click
        //4 expect value equal on

        //TestUtils.renderIntoDocument method refers to https://facebook.github.io/react/docs/test-utils.html#renderintodocument
        //TestUtils.findRenderedDOMComponentWithTag https://facebook.github.io/react/docs/test-utils.html#findrendereddomcomponentwithtag
        //ReactDom API:findDOMNode render unmountComponentAtNode server-side:renderToString renderToStaticMarkup

        var checkbox = ReactTestUtils.renderIntoDocument(<Checkbox labelOn="On" labelOff="Off" />);
        var checkboxNode = ReactDom.findDOMNode(checkbox);
        //https://facebook.github.io/jest/docs/api.html#expect-value
        expect(checkboxNode.textContent).toEqual('Off');
        ReactTestUtils.Simulate.change(ReactTestUtils.findRenderedDOMComponentWithTag(checkbox, 'input'));
        expect(checkboxNode.textContent).toEqual('On');
    });
});