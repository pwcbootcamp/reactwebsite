import React from 'react'
import Image1 from './images/img1.jpg';
import Image2 from './images/img2.jpg';
import Image3 from './images/img3.jpg';
import Image4 from './images/img4.jpg';
import Image5 from './images/img5.jpg';
import Image6 from './images/img6.jpg';
import Image7 from './images/img7.jpg';
import Image8 from './images/img8.jpg';
import Image9 from './images/img9.jpg';
import Image10 from './images/img10.jpg';
import Image11 from './images/img11.jpg';
import Image12 from './images/img12.jpg';
import Image13 from './images/img13.jpg';
import Image14 from './images/img14.jpg';
import Image15 from './images/img15.jpg';
import Image16 from './images/img16.jpg';

const Gallery = () => {
    return (
        <div>
            <section>
                <h1>Project Gallery</h1>
                <div class="grid-container">
                    <div class="grid-item"><img src={Image1} alt="" /></div>
                    <div class="grid-item"><img src={Image2} alt="" /></div>
                    <div class="grid-item"><img src={Image3} alt="" /></div>
                    <div class="grid-item"><img src={Image4} alt="" /></div>
                    <div class="grid-item"><img src={Image5} alt="" /></div>
                    <div class="grid-item"><img src={Image6} alt="" /></div>
                    <div class="grid-item"><img src={Image7} alt="" /></div>
                    <div class="grid-item"><img src={Image8} alt="" /></div>
                    <div class="grid-item"><img src={Image9} alt="" /></div>
                    <div class="grid-item"><img src={Image10} alt="" /></div>
                    <div class="grid-item"><img src={Image11} alt="" /></div>
                    <div class="grid-item"><img src={Image12} alt="" /></div>
                    <div class="grid-item"><img src={Image13} alt="" /></div>
                    <div class="grid-item"><img src={Image14} alt="" /></div>
                    <div class="grid-item"><img src={Image15} alt="" /></div>
                    <div class="grid-item"><img src={Image16} alt="" /></div>
                    
                </div>
            </section>
        </div>
    )
}

export default Gallery