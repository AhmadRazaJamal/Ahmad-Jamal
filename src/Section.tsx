import React from 'react'
import { Paper } from '@mui/material'

const Section = () => {

    return (
        <div>
            <Paper id='side-bar-01' className="first-section section left">
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
            </Paper>
        </div>
    )
}

export default Section