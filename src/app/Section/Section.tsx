import React, { useEffect, useState } from 'react';
import {
    SectionContainer,
    ProgressBar,
    SectionIntroWrapper,
    SectionTitle,
    SectionNumber,
    SectionDetailWrapper,
    ProgressBarWrapper
} from './Section.style';
import { isMobileDevice, isSafariBrowser } from '../utils/constants';

interface SectionProps {
    id: string;
    title: string;
    number: string;
    children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ id, title, number, children }) => {
    const [isMobileSafari, setIsMobileSafari] = useState(false);

    useEffect(() => {
      if (isMobileDevice() && isSafariBrowser()) {
        setIsMobileSafari(true);
      }
    }, []);
    
    return (
        <SectionContainer id={`section-${id}`} isMobileSafari={isMobileSafari}>
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
    )
};
