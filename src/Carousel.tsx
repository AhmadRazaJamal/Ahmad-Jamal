import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, CardMedia } from '@mui/material';
import ReactPlayer from 'react-player';

export function Example(props: any) {
    const items = [
        {
            name: 'Galaxy Generator',
            description: 'ThreeJS rendered galaxy generator',
            url: `${process.env.PUBLIC_URL}/project-media/three-galaxy-generator.mp4`,
            thumbnail: `${process.env.PUBLIC_URL}/project-media/galaxy-generator-thumbnail.png`,
        },
        {
            name: 'Waves in ThreeJS',
            description: 'ThreeJS rendered waves',
            url: `${process.env.PUBLIC_URL}/project-media/three-waves.mp4`,
            thumbnail: `${process.env.PUBLIC_URL}/project-media/waves-generator-thumbnail.png`,
        },
    ];

    return (
        <Carousel className='carousel'>
            {
                items.map((item, i) => <Item key={i} item={item} />)
            }
        </Carousel>
    );
}

function Item(props: any) {
    const { item } = props;

    return (
        <Paper >
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <div className='playerWrapper'>
                <ReactPlayer
                    url={item.url}
                    light={item.thumbnail}
                    controls={true}
                    playing={true}
                    width={'auto'}
                    height={'20vw'}
                />
            </div>
        </Paper>
    );
}
