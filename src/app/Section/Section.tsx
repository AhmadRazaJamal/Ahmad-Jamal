import React from 'react';
import {
    SectionContainer,
    ProgressBar,
    SectionIntroWrapper,
    SectionTitle,
    SectionNumber,
    SectionDetailWrapper,
    ProgressBarWrapper
} from './Section.style';

interface SectionProps {
    id: string;
    title: string;
    number: string;
    children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ id, title, number, children }) => (
    <SectionContainer id={`section-${id}`}>
        <ProgressBarWrapper id={`progress-bar-${id}`}>
            <ProgressBar />
        </ProgressBarWrapper>

        <SectionIntroWrapper>
            <SectionTitle>
                {title}
            </SectionTitle>
            <SectionNumber>{number}</SectionNumber>
        </SectionIntroWrapper>

        <SectionDetailWrapper>
            {children}
        </SectionDetailWrapper>
    </SectionContainer>
);
