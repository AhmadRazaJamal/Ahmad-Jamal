import React from 'react';
import { Text, Heading, ListItem, SectionList, ListHeading, WavingHand, ImageGalleryWrapper, ListWrapper } from './Sections.styles';
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
                <Text>My name is Ahmad Jamal, but everyone calls me Jamal</Text>  
                <Text>I'm a Full-Stack Developer based in Calgary currently working remotely from the comfort of my home office</Text>
                <Text>I have worked professionally as a Developer for 4 years, running my 5th year now</Text> 
                    
                <Text>I've teamed up with cool startups like HigherGround, FreshGrade, and now Fresh Tracks Canada. These fast-paced startups have made me the versatile developer I am today</Text>
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
                <ListWrapper>
                    <ListHeading>Web Development</ListHeading>
                    <SectionList>
                        <ListItem>
                            Full-Stack Wizard: From the front end to the back end, I can conjure up websites that are functional, performant yet pleasing to look at
                        </ListItem>
                        <ListItem>
                            Web Solutions Architect: Create full scale solutions for your bussiness needs like Personalization, A/B testing, and Analytics etc.
                        </ListItem>
                    </SectionList>
                    <ListHeading>Search Engine Optimization</ListHeading>
                    
                    <SectionList>
                        <ListItem>
                            Optimize the Core Web Vitals for your website so your website can rise from the trenches of Google rankings
                        </ListItem>
                        <ListItem>
                            Set up Google Analytics and Search Console. I don't just set it up, but act as your guide in understanding the data as well
                        </ListItem>
                        <ListItem>
                            Provide guidance on areas to help you improve your Google ranking through keywords, blogs, intentful content etc
                        </ListItem>
                    </SectionList>
                    <ListHeading>CI/CD</ListHeading>
                    <SectionList>
                        <ListItem>
                            Automate, test and deploy to make your life easier and your code robust
                        </ListItem>
                        <ListItem>
                            Optimize your deployments and ensure everything flows smoothly to help you cut down on coffee breaks while waiting for your code to deploy
                        </ListItem>
                    </SectionList>
                    <ListHeading>Solution Architect</ListHeading>
                    <SectionList>
                        <ListItem>
                            Design solutions for every day web problems
                        </ListItem>
                        <ListItem>
                            Research, test and implement the best ways to solve problems that keep you up at night
                        </ListItem>
                    </SectionList>
                    <ListHeading>CMS Management</ListHeading>
                    <SectionList>
                        <ListItem>
                            Set up, update, and maintain your CMS.
                        </ListItem>
                        <ListItem>
                            Ensure your project's plugins are always on their latest and greatest versions
                        </ListItem>
                    </SectionList>
                </ListWrapper>
            </Section>

            <Section id="four" title="Get In Touch" number="04">
                <Form />
            </Section>
        </div>
    );
};

export default Sections;
