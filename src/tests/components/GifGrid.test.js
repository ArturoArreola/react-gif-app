import React from 'react';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Tests on <GifGrid/>', () => { 

    const category = 'Hello';
    
    test('Component must show correctly', () => { 
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
     });

     test('Component must show items when gifs are loaded throug useFetchGifs ', () => {
        const gifs = [{
            id: '123',
            url: 'http://localhost/image.png',
            title: 'My Gif'
        },
        {
            id: '456',
            url: 'http://localhost/image.png',
            title: 'My Gif'
        }];
        
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(2);
     });
});