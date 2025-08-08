import React from 'react';
import ReactPlayer from 'react-player/lazy';
import { VideoPlayerCustom, PlayerWrapper, ReactPlayerStyled } from './VideoPlayer.styles';

interface VideoPlayerItem {
  name: string;
  description: string;
  url: string;
  thumbnail?: string;
}

interface VideoPlayerProps {
  content: VideoPlayerItem[];
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ content }) => {
  return (
    <VideoPlayerCustom>
      {content.map((item, index) => (
        <VideoPlayerItemComponent key={index} item={item} className={`react-player-${index}`} />
      ))}
    </VideoPlayerCustom>
  );
};

interface VideoPlayerItemProps {
  item: VideoPlayerItem;
  className: string;
}

const VideoPlayerItemComponent: React.FC<VideoPlayerItemProps> = ({ item, className }) => {
  return (
    <div>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <PlayerWrapper>
        <ReactPlayerStyled>
          <ReactPlayer
            className={className}
            playing={false}
            url={item.url}
            light={item.thumbnail}
            controls={true}
            width="100%"
          />
        </ReactPlayerStyled>
      </PlayerWrapper>
    </div>
  );
};

export default VideoPlayer;
