import { CarouselGallery } from "./Carousel"

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

                    <p className="section-text">Hello internet <span className="wave">👋</span> ! I'm Ahmad Jamal, but you can call me Jamal. I'm a full-stack developer based in Calgary, and I'm currently working remotely for the awesome travel company FreshTracks, situated in Vancouver.</p>
                    <p className="section-text">Having worked professionally as a developer for almost 3 years, I've had the pleasure of collaborating with some exciting startups, including HigherGround, FreshGrade, and Freshtracks. These experiences have allowed me to hone my development skills and gain valuable insights into the industry.</p>
                    <p className="section-text">I'm a big believer in always pushing myself to learn new things, which is why I've poured my heart and soul into the revamp of my old portfolio. I've used some fantastic tools like NextJS, tailwind, and threeJS to make it stand out visually and functionally.</p>
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
                        <p className="section-text">My latest endeavor has been learning ThreeJS and creating various small projects while following the amazing course by Bruno Simons. I have worked on both small and large-scale projects such a portfolio that utilizes ThreeJs to the fullest. My portfolio goes beyond just using vanilla ThreeJS but uses React Three Fiber and includes a mini version of my home office designed in Blender.</p>
                        <CarouselGallery content={threeJsProjectContent} />
                        <h2 className="section-heading">Laurie Koss SEO Project</h2>
                        <p className="section-text"> Laurie, an artist, aimed to showcase her talent and reach a broader audience through improved SEO and enhanced performance. Collaborating with Laurie, I improved performance statistics, optimized the website for higher Google search ranking, and set up Google Analytics and Google Console. I also provided guidance on content creation and explored additional marketing avenues for her products.
                            <p />
                            Here is my complete research and thought process of how I made this possible: <a href={'https://wandering-psychology-b1a.notion.site/SEO-Optimization-Analysis-41a6620719af46ee9be5636e88f38d15?pvs=4'}>Link to my Notion webpage</a>
                        </p>
                        <h3 className="section-heading">Canadian Train Vacations</h3>
                        <p className="section-text">Canadian Train Vacation is my ongoing project at work. From setting up CI/CD for development, A/B testing for user testing, to creating a monorepo and building its pathways, it has been a challenging yet enjoyable project to work on.</p>
                    </div>

                </section>
            </div>

            <div id='side-bar-03' className="first-section section-left left">
                <div className="progress-wrapper progress-bar-wrapper-left">
                    <div className="progress-bar"></div>
                </div>

                <div className="section-intro-wrapper">
                    <h1 className="section-title">
                        <span className="section-title-text">Skills</span>
                    </h1>
                    <span className="section-number">01</span>
                </div>


                <div className="section-detail-wrapper">

                    <p className="section-text">Hi there 👋! I'm a third-year digital media student from UK currently studying in Germany. My dream is to work for Disney or Pixar one day.</p>
                    <p className="section-text"> I love creating art and playing with my cats! I also like drinking bubble tea and going for hikes! Totally hippie lol ✌️. Welcome to my portfolio!</p>
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
                        <h3 className="section-heading">Candycane Village</h3>
                        <p className="section-text">This project is in progress but it's about a super colorful village where the entire world including the people are candies. So far the story is that they are set out to explore their "space" only to realize it's a human that will try to destroy them.</p>
                        <h3 className="section-heading">Rebecca's Reddish Radishes</h3>
                        <p className="section-text">Oh what's that? Why, it's a red radish! Oop, another one! In this playful and comedy animation, Rebecca, a young farmer, decided to plant radishes for the first time, but there is a big twist!</p>
                        <h3 className="section-heading">Flora</h3>
                        <p className="section-text">A heartwarming story about a little orphan girl who tries to find her way back home.</p>
                    </div>

                </section>
            </div>

            <div id='side-bar-05' className="first-section section-left left">
                <div className="progress-wrapper progress-bar-wrapper-left">
                    <div className="progress-bar"></div>
                </div>

                <div className="section-intro-wrapper">
                    <h1 className="section-title">
                        <span className="section-title-text">Get in touch</span>
                    </h1>
                    <span className="section-number">01</span>
                </div>


                <div className="section-detail-wrapper">

                    <p className="section-text">Hi there 👋! I'm a third-year digital media student from UK currently studying in Germany. My dream is to work for Disney or Pixar one day.</p>
                    <p className="section-text"> I love creating art and playing with my cats! I also like drinking bubble tea and going for hikes! Totally hippie lol ✌️. Welcome to my portfolio!</p>
                </div>
            </div>
        </div >
    )
}