import React from 'react'
import './About.css'
function About() {
    return (
        <div className='about-main'>
            <div className='about-upper'>
                <div className='about-big-text'>
                    Serving you sincerely
                </div>
                <div className='about-time'>
                    Since 1998.
                </div>
            </div>
            <div className='about-middle'>
                Meet the founders ...
            </div>
            <div className='about-lower'>
                <div className='about-info'>
                    <img className='about-image' src='https://imgur.com/9Oo2Y4R.png' alt='image1' />
                    <div className='about-info-inner'>
                        <div className='about-info-inner-big'>
                            Naveen Dua
                        </div>
                        <div className='about-info-inner-mid'>
                            B.Com, MBA
                        </div>
                        <div className='about-info-inner-small'>
                            Hardworking and talented.
                        </div>
                    </div>
                </div>
                <div className='about-info'>
                    <img className='about-image' src='https://imgur.com/9Oo2Y4R.png' alt='image2' />
                    <div className='about-info-inner'>
                        <div className='about-info-inner-big'>
                            Kishan Lal Dua
                        </div>
                        <div className='about-info-inner-mid'>
                            Founder
                        </div>
                        <div className='about-info-inner-small'>
                            Hardworking and talented.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
