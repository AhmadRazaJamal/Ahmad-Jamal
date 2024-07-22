import React from 'react';
import { SectionsContainer, Text, Heading, ListItem, SectionList, WavingHand, ImageGalleryWrapper, IconContainer } from './Sections.styles';
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import { Form } from "../Form/Form";
import ReactImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import { Section } from '../Section/Section';
import { LinkedIn, GitHub, Instagram } from '@mui/icons-material';
import { IconButton } from '@mui/material';

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
        <SectionsContainer>
            <Section id="one" title="About Me" number="01">
                <Text>Hello World <WavingHand role="img" aria-label="wave">👋</WavingHand></Text>
                <Text>My name is Ahmad Jamal, but you can just call me by my Starbucks name, Jamal!</Text>
                <Text>I'm a Full-Stack Developer based in the sunny city of Calgary, currently working remotely from the comfort of my home office 🏠.</Text>
                <Text>I have been working professionally as a Developer for almost 4 years now, but have been fiddling with tech for almost 20.</Text>
                <Text>Over the last few years I've had the opportunity to team up with some amazing people at startups like HigherGround, FreshGrade, and presently Fresh Tracks Canada. Working at these fast-paced and exciting startups has shaped me into the versatile developer I am today.</Text>
                <Text>I am a big believer in constantly pushing yourself and learning something new everyday. That's why I poured my heart and soul into revamping my old portfolio. I've used fantastic, modern tools like Next.js, Tailwind, and Three.js to build the website's skeleton; and Blender to create a 3D model of my office.</Text>
                <Text>So, dive in and have fun exploring!</Text>
            </Section>

            <Section id="two" title="My Work" number="02">
                <Heading>ThreeJS Projects</Heading>
                <Text>My latest endeavor has been diving into ThreeJS and creating fun, small projects by following this amazing <a href="https://threejs-journey.com/">course by Bruno Simon</a>. I've worked on both small and large-scale projects, including my portfolio, which leverages ThreeJS to its fullest.</Text>
                <Text>Below are two examples of some small projects I've been working on:</Text>
                <VideoPlayer content={threeJsProjectContent} />

                <Heading>Fresh Tracks Canada Websites</Heading>
                <Text>During my time at Fresh Tracks Canada I have worked on challenging projects like managing CI/CD setups for seamless development, A/B testing for user insights, Personalization for tailored content, and crafting a monorepo with complex pathways among other projects.</Text>
                <Text>I have also created websites from the ground up. Here are a few examples of the websites I have worked on, showcasing my skills in creating new pages and components, managing CI/CD processes, developing complex API pathways, and optimizing SEO performance.</Text>
                <ImageGalleryWrapper>
                    <a href="https://canadiantrainvacations.com/" target="_blank" rel="noopener noreferrer">1. Canadian Train Vacations</a>
                    <ImageGallery items={ctvImages} slideInterval={2000} showFullscreenButton={false} />
                </ImageGalleryWrapper>
                <ImageGalleryWrapper>
                    <a href="https://northernlightscanada.com/" target="_blank" rel="noopener noreferrer">2. Northern Lights Canada</a>
                    <ImageGallery items={nlcImages} slideInterval={2000} showFullscreenButton={false} />
                </ImageGalleryWrapper>
                <ImageGalleryWrapper>
                    <a href="https://canadapolarbears.com/" target="_blank" rel="noopener noreferrer">3. Canada Polar Bears</a>
                    <ImageGallery items={cpbImages} slideInterval={2000} showFullscreenButton={false} />
                </ImageGalleryWrapper>


                <Heading>Laurie Koss SEO Project</Heading>
                <Text>This is one of my favorite freelance projects that I worked on.</Text>
                <Text>Laurie, an artist, aimed to showcase her talent and reach a broader audience through improved SEO and enhanced performance. </Text>
                <Text>In collaboration with Laurie, I enhanced performance metrics, optimized her website for Google search rankings, set up Google Analytics and Google Console, and provided guidance on content creation and marketing strategies for her products.</Text>
                <Text>Here is my complete research and thought process of how I made this possible: <a href="https://wandering-psychology-b1a.notion.site/SEO-Optimization-Analysis-41a6620719af46ee9be5636e88f38d15?pvs=4" target="_blank" rel="noopener noreferrer">SEO Optimization Analysis on Notion</a></Text>
                <Text>And you can check out her website <a href="https://www.lauriekoss.com/" target="_blank" rel="noopener noreferrer">here</a>.</Text>
            </Section>

            <Section id="three" title="What I'm Good At" number="03">
                <Heading>Web Development</Heading>
                <SectionList>
                    <ListItem>
                        Creating websites that are functional, performant, yet pleasing to look at
                    </ListItem>
                    <ListItem>
                        Creating full scale solutions for businesses like Personalization, A/B testing, and Analytics.
                    </ListItem>
                </SectionList>
                <Heading>Search Engine Optimization</Heading>

                <SectionList>
                    <ListItem>
                        Optimizing Core Web Vitals for websites so they can rise from the trenches of Google rankings
                    </ListItem>
                    <ListItem>
                        Setting up Google Analytics and Search Console. I don't just set them up, but also act as a guide in understanding the data as well
                    </ListItem>
                    <ListItem>
                        Providing guidance on areas to help improve Google rankings through keywords, blogs, intentful content etc
                    </ListItem>
                </SectionList>

                <Heading>CI/CD</Heading>
                <SectionList>
                    <ListItem>
                        Automation, testing, and deployment to make developers life easier and making code robust
                    </ListItem>
                    <ListItem>
                        Optimizing deployments and ensuring everything flows smoothly to help cut down on coffee breaks while waiting for your code to deploy
                    </ListItem>
                </SectionList>

                <Heading>Solution Architect</Heading>
                <SectionList>
                    <ListItem>
                        Designing solutions for every day web problems
                    </ListItem>
                    <ListItem>
                        Researching, testing, and implementing the best ways to solve problems that keep people up at night
                    </ListItem>
                </SectionList>

                <Heading>CMS Management</Heading>
                <SectionList>
                    <ListItem>
                        Setting up, updating, and maintaining various CMS
                    </ListItem>
                    <ListItem>
                        Ensuring project's plugins are always on their latest and greatest versions
                    </ListItem>
                </SectionList>
            </Section>

            <Section id="four" title="Get In Touch" number="04">
                <Form />
                <IconContainer>
                    <IconButton href="https://www.linkedin.com/in/ahmadjamal/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <LinkedIn fontSize="medium" />
                    </IconButton>
                    <IconButton href="https://github.com/AhmadRazaJamal" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <GitHub fontSize="medium" />
                    </IconButton>
                    <IconButton href="https://www.instagram.com/ahmad.jamal_1" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <Instagram fontSize="medium" />
                    </IconButton>
                </IconContainer>
            </Section>
        </SectionsContainer>
    );
};

export default Sections;
