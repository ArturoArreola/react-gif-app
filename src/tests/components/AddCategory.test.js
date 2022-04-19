import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Tests on <AddCategory/>', () => {
    
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    });

    test('Component must show correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Calling handleInputChange function', () => {
        const input = wrapper.find('input');
        const value = 'Hello World';
        input.simulate('change', {target: {value}});
     });

     test('Dont post any info when submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault: () => {} });
        expect(setCategories).not.toHaveBeenCalled();
     });
});
