import React from 'react';
import { BackgroundContainer, ContainerBg, VideoBg } from './MovieStyle';
import Video from './video.mp4'; 

function Background() {
    return (
        <BackgroundContainer>
            <ContainerBg>
                <VideoBg autoPlay loop muted src={Video} type='video.mp4' />

            </ContainerBg>


        </BackgroundContainer>
    );
}

export default Background