import React from 'react';
import "./styles.css";

interface SectionProps {
    id: string;
    title: string;
    number: string;
    children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ id, title, number, children }) => (
    <div id={`section-${id}`} className="first-section section-right right">
        <div className={`progress-wrapper section-progress-bar progress-bar-${id}`}>
            <div className="progress-bar"></div>
        </div>

        <div className="section-intro-wrapper">
            <h1 className="section-title">
                <span className="section-title-text">{title}</span>
            </h1>
            <span className="section-number">{number}</span>
        </div>

        <div className="section-detail-wrapper">
            {children}
        </div>
    </div>
);
