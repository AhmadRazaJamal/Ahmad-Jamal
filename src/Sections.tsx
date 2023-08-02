import { CarouselGallery } from "./Carousel"
import ImageGallery from 'react-image-gallery';

const threeJsProjectContent = [
    {
        name: 'Galaxy Generator',
        description: 'ThreeJS rendered galaxy generator',
        url: `${process.env.PUBLIC_URL}/project-media/three-galaxy-generator.mp4`,
        thumbnail: `${process.env.PUBLIC_URL}/project-media/galaxy-generator-thumbnail.png`,
    },
    {
        name: 'Waves in ThreeJS',
        description: 'ThreeJS rendered waves',
        url: `${process.env.PUBLIC_URL}/project-media/three-waves.mp4`,
        thumbnail: `${process.env.PUBLIC_URL}/project-media/waves-generator-thumbnail.png`,
    },
];

const projectImages = [
    {
        original: `${process.env.PUBLIC_URL}/project-media/page1.webp`,
    },
    {
        original: `${process.env.PUBLIC_URL}/project-media/page2.webp`,
    },
    {
        original: `${process.env.PUBLIC_URL}/project-media/page3.webp`,
    },
    {
        original: `${process.env.PUBLIC_URL}/project-media/page4.webp`,
    },
]

const laurieKossProjectImages = [
    {
        original: `${process.env.PUBLIC_URL}/project-media/laurie-website.webp`,
    },
    {
        original: `${process.env.PUBLIC_URL}/project-media/mobile-before.webp`,
    },
    {
        original: `${process.env.PUBLIC_URL}/project-media/mobile-after.webp`,
    },
    {
        original: `${process.env.PUBLIC_URL}/project-media/desktop-before.webp`,
    },
    {
        original: `${process.env.PUBLIC_URL}/project-media/desktop-after.webp`,
    },
]

export const Sections = () => {
    return (
        <div>
            <div id='side-bar-01' className="first-section section-left left">
                <div className="progress-wrapper progress-bar-wrapper-left">
                    <div className="progress-bar"></div>
                </div>

                <div className="section-intro-wrapper">
                    <h1 className="section-title">
                        <span className="section-title-text">About Me</span>
                    </h1>
                    <span className="section-number">01</span>
                </div>


                <div className="section-detail-wrapper">

                    <p className="section-text">Hello internet <span className="wave">👋</span> ! I'm Ahmad Jamal, but you can call me Jamal. I'm a full-stack developer based in Calgary, and I'm currently working remotely for the awesome travel company FreshTracks, located in Vancouver.</p>
                    <p className="section-text">Having worked professionally as a developer for almost 3 years, I've had the pleasure of collaborating with some exciting startups, including HigherGround, FreshGrade, and Freshtracks. These experiences have allowed me to hone my development skills and gain valuable insights into the industry.</p>
                    <p className="section-text">I'm a big believer in always pushing myself to learn new things, which is why I've poured my heart and soul into the revamp of my old portfolio. I've used some fantastic tools like NextJS, Tailwind, and ThreeJS to make it stand out visually and functionally.</p>
                    <p className="section-text">So, dive in and have fun exploring my office!</p>
                </div>
            </div>

            <div id='side-bar-02' className="first-section section-right right">
                <div className="second-move section-margin"></div>

                <section className="second-section section right">
                    <div className="progress-wrapper progress-bar-wrapper-right">
                        <div className="progress-bar blue-background"></div>
                    </div>

                    <div className="section-intro-wrapper blue-text blue-border">
                        <h1 className="section-title blue-text blue-border">
                            <span className="section-title-text blue-text">My Work</span>
                        </h1>
                        <span className="section-number blue-text">02</span>
                    </div>

                    <div className="section-detail-wrapper">
                        <h2 className="section-heading">ThreeJS Projects</h2>
                        <p className="section-text">My latest endeavor has been learning ThreeJS and creating various small projects while following this amazing <a href={'https://threejs-journey.com/'}>course by Bruno Simons.</a> I have worked on both small and large-scale projects such a portfolio that utilizes ThreeJs to the fullest. My portfolio goes beyond just using vanilla ThreeJS but uses React Three Fiber and includes a mini version of my home office designed in Blender.</p>
                        <CarouselGallery content={threeJsProjectContent} />
                        <h2 className="section-heading">Canadian Train Vacations</h2>
                        <p className="section-text">Canadian Train Vacation is my ongoing project at work. From setting up CI/CD for development, A/B testing for user testing, to creating a monorepo and building its pathways, it has been a challenging yet fun project to work on.</p>


                        Check the website <a href={'https://canadiantrainvacations.com/'}>here</a>
                        <ImageGallery items={projectImages} showNav={false} showFullscreenButton={false} slideInterval={2000} />
                        <h2 className="section-heading">Laurie Koss SEO Project</h2>
                        <p className="section-text"> Laurie, an artist, aimed to showcase her talent and reach a broader audience through improved SEO and enhanced performance. Collaborating with Laurie, I improved performance statistics, optimized the website for higher Google search ranking, and set up Google Analytics and Google Console. I also provided guidance on content creation and explored additional marketing avenues for her products.
                            <p />
                            Here is my complete research and thought process of how I made this possible: <a href={'https://wandering-psychology-b1a.notion.site/SEO-Optimization-Analysis-41a6620719af46ee9be5636e88f38d15?pvs=4'}>Link to my Notion webpage</a>
                        </p>
                    </div>

                </section>
            </div>

            <div id='side-bar-03' className="first-section section-left left">
                <div className="progress-wrapper progress-bar-wrapper-left">
                    <div className="progress-bar"></div>
                </div>

                <div className="section-intro-wrapper">
                    <h1 className="section-title">
                        <span className="section-title-text">What can I do for you?</span>
                    </h1>
                    <span className="section-number">03</span>
                </div>


                <div className="section-detail-wrapper">
                    <h2 className="section-heading">1. Web Development</h2>
                    <p className="section-text"></p>
                    <ul className="section-text">
                        <li>
                            Full-Stack Wizard: From the front end to the back end, I conjure up a complete web environment.
                        </li>
                        <li>
                            Your site's personal health guru: I'm all about keeping things updated, fixed, and running smoothly.
                        </li>
                    </ul>
                    <h2 className="section-heading">2. Search Engine Optimization</h2>
                    <p className="section-text"></p>
                    <ul className="section-text">
                        <li>
                            Improving Core Web Vitals for your website, so you can rank higher.
                        </li>
                        <li>
                            Google Analytics and Search Console: I don't just set it up, but act as your guide in understanding data.
                        </li>
                        <li>
                            Providing guidance on areas where you can improve your Google rankings.
                        </li>
                    </ul>
                    <h2 className="section-heading">3. CMS Management</h2>
                    <p className="section-text"></p>
                    <ul className="section-text">
                        <li>
                            Setting up, updating, and maintaining your CMS. Be it headless or not.
                        </li>
                        <li>
                            Ensuring your project's plugins are always on their latest and greatest form.
                        </li>
                    </ul>
                    <h2 className="section-heading">4. Continuous Integration/Deployment</h2>
                    <p className="section-text"></p>
                    <ul className="section-text">
                        <li>
                            Automating, testing and deploying to make your life easier and your code robust.
                        </li>
                        <li>
                            Cut down on coffee breaks waiting for code deployment. Let's make it swift and reliable.
                        </li>
                    </ul>
                    <h2 className="section-heading">5. Solution Architect</h2>
                    <p className="section-text"></p>
                    <ul className="section-text">
                        <li>
                            Designing solutions for tough problems.
                        </li>
                        <li>
                            Research, test and implement best way to solve problems keeping you up at night.
                        </li>
                    </ul>
                </div>
            </div>


            <div id='side-bar-04' className="first-section section-right right">
                <div className="second-move section-margin"></div>

                <section className="second-section section right">
                    <div className="progress-wrapper progress-bar-wrapper-right">
                        <div className="progress-bar blue-background"></div>
                    </div>

                    <div className="section-intro-wrapper blue-text blue-border">
                        <h1 className="section-title blue-text blue-border">
                            <span className="section-title-text blue-text">Experience</span>
                        </h1>
                        <span className="section-number blue-text">02</span>
                    </div>

                    <div className="section-detail-wrapper">
                        <h3 className="section-heading">FreshTracks</h3>
                        <p className="section-text">FreshTracks is where I am currently working! (unless it's been years since my last update yikes!).</p>
                        <p className="section-text">It's a Vancouver-based company that has been creating personalized Canadian vacations since 1996. My role here is that of a full stack developer. I have, so far, completed the creation and deployment of 3 full scale websites:</p>
                        <ul className="section-text">
                            <li><a href="https://freshtrackscanada.com/">Fresh Tracks Canada</a></li>
                            <li><a href="https://canadiantrainvacations.com/">Canadian Train Vacations</a></li>
                            <li><a href="https://northernlightscanada.com/">Northern Lights Canada</a></li>
                        </ul>
                        <p className="section-text">These websites were developed using the latest NextJS framework, utilizing the headless CMS model with DatoCMS for content management.</p>
                        <h3 className="section-heading">FreshGrade </h3>
                        <p className="section-text">At FreshGrade, an ed-tech startup, I created student portfolios on our web-based platform with an interactive feed for communication and cross-collaboration between parents, students, and teachers. I developed user-friendly features to enhance
                            the product's functionality while meeting the needs of educators and students.
                        </p>
                        <p className="section-text">This experience allowed me to gain a deep understanding of the intersection between education and technology, and hone my skills in product development, user experience, and collaboration.</p>
                        <h3 className="section-heading">Higher Ground</h3>
                        <p className="section-text">FreshGrade was later acquired by HigherGround which is a Montessori-inspired educational offering. During my time at HigherGround, I worked on improving the scalability and website performance of the existing infrastructure. I also collaborated with a team of designers and developers to create new features and functionalities for the product. All of this allowed me to further enhance my skills in software engineering, teamwork, and project management.</p>

                        <p className="section-text">For more information about what I do and where I’ve worked, please check out my <a href="https://www.linkedin.com/in/ahmadjamal/">LinkedIn</a></p>
                    </div>

                </section>
            </div >

            <div id='side-bar-05' className="first-section section-left left">
                <div className="progress-wrapper progress-bar-wrapper-left">
                    <div className="progress-bar"></div>
                </div>

                <div className="section-intro-wrapper">
                    <h1 className="section-title">
                        <span className="section-title-text">Get in touch</span>
                    </h1>
                    <span className="section-number">05</span>
                </div>


                <div className="section-detail-wrapper">

                    <p className="section-text">Hi there 👋! I'm a third-year digital media student from UK currently studying in Germany. My dream is to work for Disney or Pixar one day.</p>
                    <p className="section-text"> I love creating art and playing with my cats! I also like drinking bubble tea and going for hikes! Totally hippie lol ✌️. Welcome to my portfolio!</p>
                </div>
            </div>
        </div >
    )
}