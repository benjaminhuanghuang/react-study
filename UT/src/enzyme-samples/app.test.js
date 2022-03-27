import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Adapter from 'enzyme-adapter-react-16';

// Shallow renders the current node and returns a shallow wrapper around it
import { shallow, mount, configure } from 'enzyme';
configure({adapter: new Adapter()});


describe('App', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App/> , div);
    });

    it('renders 1 App component using shallow', () => {
        const component = shallow(<App name="myApp"/>);
        //console.log(component.props());
        expect(component).toHaveLength(1);
    });

    it('renders props correctly', () => {
        const component = shallow(<App name="myApp"/>);
        expect(component.instance().props.name).toBe("myApp");
    });

    // it('update counter on button click', () => {
    //     const component = mount(<App/>);
    //     const button = component.find('button');
    //     button.simulate('click');
    //     button.simulate('click');
    //     button.props().onClick();
    //     expect(component.state().counter).toEqual(3);
    // });
});