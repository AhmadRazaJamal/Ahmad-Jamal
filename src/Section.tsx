const Section = () => {
    return (
        <div>
            <div id='side-bar-01' className="first-section section-left left">
                <div className="progress-wrapper progress-bar-wrapper-left">
                    <div className="progress-bar"></div>
                </div>

                <div className="section-intro-wrapper">
                    <h1 className="section-title">
                        <span className="section-title-text">About Me</span>
                        <div className="section-title-decoration styleOne"></div>
                        <div className="section-title-decoration styleTwo"></div>
                        <div className="section-title-decoration styleThree"></div>
                    </h1>
                    <span className="section-number">01</span>
                </div>


                <div className="section-detail-wrapper">

                    <p className="section-text">Hi there 👋! I'm a third-year digital media student from UK currently studying in Germany. My dream is to work for Disney or Pixar one day.</p>
                    <p className="section-text"> I love creating art and playing with my cats! I also like drinking bubble tea and going for hikes! Totally hippie lol ✌️. Welcome to my portfolio!</p>
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
                            <div className="section-title-decoration styleOne blue-border"></div>
                            <div className="section-title-decoration styleTwo blue-border"></div>
                            <div className="section-title-decoration styleThree blue-background blue-border"></div>
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
        </div>
    )
}

export default Section