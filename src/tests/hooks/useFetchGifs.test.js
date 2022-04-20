import { renderHook } from '@testing-library/react-hooks';
import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('Tests on useFetchGifs', () => { 

    test('Must return initialState', async() => {
        
        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs('Gif'));
        const {data, loading} = result.current;
        
        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });

    test('Must return array with gifs and loading in false', async() => {
        
        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs('Gif'));
        await waitForNextUpdate();
        const {data, loading} = result.current;

        expect(data.length).toEqual(10);
        expect(loading).toBe(false);
    });

});