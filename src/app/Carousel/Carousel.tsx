
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import ReactPlayer from 'react-player';
import { PlayerWrapper, ReactPlayerStyled } from './Carousel.styles';

interface CarouselItem {
    name: string;
    description: string;
    url: string;
    thumbnail?: string;
}

interface CarouselGalleryProps {
    content: CarouselItem[];
}

interface ItemProps {
    item: CarouselItem;
}

export function CarouselGallery({ content }: CarouselGalleryProps) {
    return (
        <Carousel className='carousel'>
            {content.map((item, index) => <Item key={index} item={item} />)}
        </Carousel>
    );
}

function Item({ item }: ItemProps) {
    return (
        <>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <PlayerWrapper>
                {item.thumbnail ?
                    <ReactPlayerStyled>
                        <ReactPlayer
                            url={item.url}
                            light={item.thumbnail}
                            controls={true}
                            playing={true}
                            width={'auto'}
                            height={'20vw'}
                        />
                    </ReactPlayerStyled>
                    :
                    <img
                        src={item.url}
                        alt={item.name}
                        style={{ width: '100%' }}
                    />
                }
            </PlayerWrapper>
        </>
    );
}