import React from 'react'
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


const Imageslider = () => {
    return (
        <section>
            <Carousel>
                <Carousel.Item>
                    <img src = "/assets/2.jpeg" height='300px' width='350px' alt='img1'></img>
                </Carousel.Item>
            </Carousel>
            <Carousel>
                <Carousel.Item>
                    <img src = "/assets/4.jpeg" height='300px' width='350px' alt='img1'></img>
                </Carousel.Item>
            </Carousel>
            <Carousel>
                <Carousel.Item>
                    <img src = "/assets/3.jpeg" height='300px' width='350px' alt='img1'></img>
                </Carousel.Item>
            </Carousel>
        </section>
    )
}

export default Imageslider
