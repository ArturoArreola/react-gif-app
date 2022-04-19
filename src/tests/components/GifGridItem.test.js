import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Test <GifGridItem/>', () => { 

    const title = 'Gif Title';
    const url = 'http://localhost/mygif.gif';
    const wrapper = shallow(<GifGridItem title={title} url={url} /> )
    
    test('Show the component', () => { 
        expect(wrapper).toMatchSnapshot();
    });

    test('<p> tag must have title', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    });

    test('<img/> tag must have src and alt values', () => {
        const img = wrapper.find('img');
        console.log(img.props().src);
        expect(img.props().src).toBe(url);
        expect(img.props().alt).toBe(title);
    });
    
    test('<div> contains class animate__fadeIn', () => {
        const div = wrapper.find('div');
        expect(div.prop('className').includes('animate__fadeIn')).toBeTruthy();
    });
 });