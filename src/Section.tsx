import React from 'react'
import { Paper } from '@mui/material'

const Section = () => {
    return (
        <div>
            <Paper style={{ top: '40vh', left: '20vh', position: 'absolute' }} id='side-bar-01'>Hello</Paper>
            <h1 style={{ top: '140vh', left: '20vh', position: 'absolute' }}>Regular overlay Text</h1>
            <h1 style={{ top: '240vh', left: '20vh', position: 'absolute' }}>Regular overlay Text</h1>
        </div>
    )
}

export default Section