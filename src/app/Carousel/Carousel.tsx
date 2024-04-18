
import React from 'react';
import ReactPlayer from 'react-player';
import { CarouselCustom, PlayerWrapper, ReactPlayerStyled } from './Carousel.styles';
import screenfull from 'screenfull';
import { isSmallScreen } from '../utils/constants';

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
    className: string;
}

export function CarouselGallery({ content }: CarouselGalleryProps) {
    return (
        <CarouselCustom>
            {content.map((item, index) => <Item key={index} item={item} className={`react-player-${index}`} />)}
        </CarouselCustom>
    );
}

function Item({ item, className }: ItemProps) {
    return (
        <>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <PlayerWrapper>
                {item.thumbnail ?
                    <ReactPlayerStyled>
                        <ReactPlayer
                            className={className}
                            playing={true}
                            url={item.url}
                            light={item.thumbnail}
                            controls={true}
                            width='100%'
                            onPlay={() => isSmallScreen && screenfull.request(document.querySelector(`.${className}`) as Element)}
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