import React from 'react';
import { shallow } from 'enzyme';
import { GifExpertApp } from '../GifExpertApp';

describe('Tests on <GifExpertApp/>', () => {
    
    test('Component must show correctly', () => { 
        const wrapper = shallow(<GifExpertApp/>);
        expect(wrapper).toMatchSnapshot();
    });

    test('Must show a list of catgeories', () => { 
        const categories = ['Gif', 'Lol'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);
        
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
     });
});
