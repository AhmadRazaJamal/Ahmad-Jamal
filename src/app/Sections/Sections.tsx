import React from 'react';
import { Text, Heading, ListItem, SectionList, ListHeading, WavingHand, ImageGalleryWrapper } from './Sections.styles';
import { CarouselGallery } from "../Carousel/Carousel";
import { Form } from "../Form/Form";
import ReactImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import { Section } from '../Section/Section';

// Using type assertion as any to bypass a type bug caused from a mismatch between library and react types
const ImageGallery = ReactImageGallery as any;

interface ProjectContent {
    name: string;
    description: string;
    url: string;
    thumbnail: string;
}

const threeJsProjectContent: ProjectContent[] = [
    {
        name: 'Galaxy Generator',
        description: 'ThreeJS rendered galaxy generator',
        url: `/project-media/three-galaxy-generator.mp4`,
        thumbnail: `/project-media/galaxy-generator-thumbnail.png`,
    },
    {
        name: 'Waves in ThreeJS',
        description: 'ThreeJS rendered waves',
        url: `/project-media/three-waves.mp4`,
        thumbnail: `/project-media/waves-generator-thumbnail.png`,
    },
];

const ctvImages = [
    {
        original: `/project-media/ctv-1.webp`,
    },
    {
        original: `/project-media/ctv-2.webp`,
    },
    {
        original: `/project-media/ctv-3.webp`,
    },
    {
        original: `/project-media/ctv-4.webp`,
    },
];

const nlcImages = [
    {
        original: `/project-media/nlc-1.webp`,
    },
    {
        original: `/project-media/nlc-2.webp`,
    },
    {
        original: `/project-media/nlc-3.webp`,
    },
    {
        original: `/project-media/nlc-4.webp`,
    },
];

const cpbImages = [
    {
        original: `/project-media/cpb-1.webp`,
    },
    {
        original: `/project-media/cpb-2.webp`,
    },
    {
        original: `/project-media/cpb-3.webp`,
    },
    {
        original: `/project-media/cpb-4.webp`,
    },
];

export const Sections: React.FC = () => {
    return (
        <div>
            <Section id="one" title="About Me" number="01">
                <Text>Hello internet <WavingHand role="img" aria-label="wave">👋</WavingHand></Text>
                <Text> My name is Ahmad Jamal, but you can call me Jamal. I'm a Full-Stack Developer based in Calgary currently working remotely for an awesome travel company FreshTracks, located in the heart of Vancouver.</Text>
                <Text>Having worked professionally as a developer for almost 4 years, I've had the pleasure of collaborating with some exciting startups such as HigherGround, FreshGrade, and Fresh Tracks Canada. These experiences have allowed me to hone my development skills and gain valuable insights into the industry.</Text>
                <Text>I'm a big believer in always pushing myself to learn new things, which is why I've poured my heart and soul into the revamp of my old portfolio. I've used some fantastic tools like NextJS, Tailwind, and Three.js to create the skeleton of the website and Blender to create a 3D model of my office.</Text>
                <Text>So, dive in and have fun exploring!</Text>
            </Section>

            <Section id="two" title="My Work" number="02">
                <Heading>ThreeJS Projects</Heading>
                <Text>My latest endeavour has been learning ThreeJS, and creating fun small projects while following this amazing <a href={'https://threejs-journey.com/'}>course by Bruno Simons</a>. I have worked on both small and large-scale projects such as my portfolio that utilizes ThreeJS to the fullest. My portfolio goes beyond just using vanilla ThreeJS but uses React Three Fiber and includes a mini version of my home office designed in Blender.</Text>
                <CarouselGallery content={threeJsProjectContent} />

                <Heading>Fresh Tracks Canada Websites</Heading>
                <Text>These are my projects from work. From creating new pages and components to owning the CI/CD setup for smooth development, A/B testing for user testing with Personalization for curating user content, and crafting a monorepo with all its intricate pathways.</Text> <Text>It has been challenging yet fun to work on it all!</Text>
                <ImageGalleryWrapper>
                <a href={'https://canadiantrainvacations.com/'}>Canadian Train Vacations</a>
                <ImageGallery items={ctvImages} showFullscreenButton={false} slideInterval={2000}/>
                </ImageGalleryWrapper>
                <ImageGalleryWrapper>
                <a href={'https://northernlightscanada.com/'}>Northern Lights Canada</a>
                <ImageGallery items={nlcImages} showFullscreenButton={false} slideInterval={2000}/>
                </ImageGalleryWrapper>
                <ImageGalleryWrapper>
                <a href={'https://canadapolarbears.com/'}>Canada Polar Bears</a>
                <ImageGallery items={cpbImages} showFullscreenButton={false} slideInterval={2000}/>
                </ImageGalleryWrapper>

              
                <Heading>Laurie Koss SEO Project</Heading>
                <Text> Laurie, an artist, aimed to showcase her talent and reach a broader audience through improved SEO and enhanced performance. Collaborating with Laurie, I improved performance statistics, optimized the website for Google search ranking, and also helped set up Google Analytics and Google Console. I also provided guidance on content creation and explored additional marketing avenues for her products.
                    <Text />
                    Here is my complete research and thought process of how I made this possible: <a href={'https://wandering-psychology-b1a.notion.site/SEO-Optimization-Analysis-41a6620719af46ee9be5636e88f38d15?pvs=4'}>SEO Optimization Analysis on Notion</a>
                </Text>
                <Text>And you can check her website {'->'}<a href={'https://www.lauriekoss.com/'}> here</a></Text>
            </Section>

            <Section id="three" title="What I can do for you" number="03">
                <ol>
                    <ListHeading>Web Development</ListHeading>
                    <SectionList>
                        <ListItem>
                            Full-Stack Wizard: From the front end to the back end, I conjure up a complete web environment.
                        </ListItem>
                        <ListItem>
                            Your site's personal health guru: I'm all about keeping things updated, fixed, and running smoothly.
                        </ListItem>
                    </SectionList>
                    <ListHeading>Search Engine Optimization</ListHeading>
                    
                    <SectionList>
                        <ListItem>
                            Improving Core Web Vitals for your website, so you can rank higher.
                        </ListItem>
                        <ListItem>
                            Google Analytics and Search Console: I don't just set it up, but act as your guide in understanding data.
                        </ListItem>
                        <ListItem>
                            Providing guidance on areas where you can improve your Google rankings.
                        </ListItem>
                    </SectionList>
                    <ListHeading>CMS Management</ListHeading>
                    <SectionList>
                        <ListItem>
                            Setting up, updating, and maintaining your CMS. Be it headless or not.
                        </ListItem>
                        <ListItem>
                            Ensuring your project's plugins are always on their latest and greatest form.
                        </ListItem>
                    </SectionList>
                    <ListHeading>CI/CD</ListHeading>
                    <SectionList>
                        <ListItem>
                            Automating, testing and deploying to make your life easier and your code robust.
                        </ListItem>
                        <ListItem>
                            Cut down on coffee breaks waiting for code deployment. Let's make it swift and reliable.
                        </ListItem>
                    </SectionList>
                    <ListHeading>Solution Architect</ListHeading>
                    <SectionList>
                        <ListItem>
                            Designing solutions for tough problems.
                        </ListItem>
                        <ListItem>
                            Research, test and implement best way to solve problems keeping you up at night.
                        </ListItem>
                    </SectionList>
                </ol>
            </Section>

            <Section id="four" title="Get in touch!" number="04">
                <Form />
            </Section>
        </div>
    );
};

export default Sections;
