import React from 'react';
import PropTypes from 'prop-types';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const {data, loading} = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {loading && <p>Loading...</p>}
            <div className='card-grid'>
                {
                    data.map( gif => (
                        <GifGridItem 
                            key = {gif.id}
                            {...gif}
                        />
                    ))
                }
            </div>
        </>
    );
}

GifGrid.protoTypes = {
    category: PropTypes.string.isRequired
}