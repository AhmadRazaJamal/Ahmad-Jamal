import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, CardMedia } from '@mui/material';
import ReactPlayer from 'react-player';

export function CarouselGallery(props: any) {
    return (
        <Carousel className='carousel'>
            {
                props.content.map((item: Object, index: number) => <Item key={index} item={item} />)
            }
        </Carousel>
    );
}

function Item(props: any) {
    const { item } = props;

    return (
        < >
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <div className='playerWrapper'>
                {item.thumbnail ?
                    <ReactPlayer
                        url={item.url}
                        light={item.thumbnail}
                        controls={true}
                        playing={true}
                        width={'auto'}
                        height={'20vw'}
                    />
                    :
                    <img
                        src={item.url}
                        width={'100%'}
                    />
                }
            </div>
        </>
    );
}
