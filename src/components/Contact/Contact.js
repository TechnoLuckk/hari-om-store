import React from 'react'
import { 
    Card, 
    CardContent,
    CardMedia, 
    CardActionArea, 
    Typography
    } from '@mui/material'
import './Contact.css'
function Contact() {
    return (
        <div className="contact-main">
            <div className="contact-upper">
                <div className="contact-header">We would love to hear from you</div>
                <div className="contact-sub">Contact us at the given phone number or at email address</div>
                <div className="contact-sub-2">Also feel free to visit us at our location!</div>
            </div>
            <div className="contact-lower">
                <div className="contact-info">
                    <img className='contact-profile-image' src="https://imgur.com/9Oo2Y4R.png" alt='user'/>
                    <div>
                        <h1 className='contact-about-name-big'>Naveen Dua</h1>
                        <h2 className='contact-about-sub'>Owner</h2>
                        <div className='contact-about-sub'>+918287880559</div>
                        <div className='contact-about-sub'>hariomstore234@gmail.com</div>
                    </div>
                </div>
                <div className='contact-map'>
                    <a href='https://goo.gl/maps/g3FJQiK7PVXYbL3L8'>
                    <Card sx={{ maxWidth: 600, position: 'relative', zIndex: -1}}>
                        <CardActionArea>
                            <CardMedia 
                                component='img'
                                height='230px'
                                image={'https://i.imgur.com/ylN5mso.png'}
                                alt='map'
                            />
                            <CardContent>
                                <Typography className='contact-map-big' variant='h6'>
                                    Address
                                </Typography>
                                <Typography className='contact-map-mid' variant='body1'>
                                    3013 SANT NAGAR RANI BAGH OPP. M2K PITAMPURA
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    </a>
                </div>
            </div>
        </div>
    )
}
//
export default Contact
