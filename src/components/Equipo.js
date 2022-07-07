import React from 'react'
import OwlCarousel from "react-owl-carousel";
import './equipo.css'
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import blog01 from '../assets/blog01.png'
import blog02 from '../assets/blog02.png'
import blog03 from '../assets/blog03.png'
import blog04 from '../assets/blog04.png'
import blog05 from '../assets/blog05.png'
import blog06 from '../assets/blog06.png'
import blog07 from '../assets/blog07.png'
import blog08 from '../assets/blog08.png'
import blog09 from '../assets/blog09.png'
import blog10 from '../assets/blog10.png'
import blog11 from '../assets/blog11.png'
import blog12 from '../assets/blog12.png'

const Equipo = () => {
    return (
        <div className="my-12" id='team'>
            <div className="right">
                <h1>THE TEAM</h1>
                <p>The SOF project came to be in Buenos Aires, Argentina. </p>
                <p>A group of creatives, professionals and investors wanted to try out a crazy new idea.</p>
                <p>Tell a narrative story from within the NFT market. Make use of the tokens as pieces of something larger that could enhance the level of interaction that can be had with an audience worldwide</p>
                <p>But also, enhancing the NFT market and community in general by giving them quality tokens, content and other stuff that’s yet to come.</p>
            </div>
            <OwlCarousel className="owl-theme left"
                items={2}
                loop
                autoplay={true}
                autoplaySpeed={4500}
                smartSpeed={1000}
                autoplayTimeout={3000}

            >
                <div className="item">
                    <img src={blog01} alt='img8' />
                    <h2>Alejandro Duarte</h2>
                    <p>Marketing Manager</p>
                </div>
                <div className="item">
                    <img src={blog02} alt='img8' />
                    <h2>Lucas Gamboa</h2>
                    <p>Productor Audiovisual</p>
                </div>
                <div className="item">
                    <img src={blog03} alt='img8' />
                    <h2>Iñaki Arredondo</h2>
                    <p>Guionista</p>
                </div>
                <div className="item">
                    <img src={blog04} alt='img8' />
                    <h2>Yesica Vivas</h2>
                    <p>Marketing & E-commerce</p>
                </div>
                <div className="item">
                    <img src={blog05} alt='img8' />
                    <h2>Belen Sanchez</h2>
                    <p>Diseño grafico</p>
                </div>
                <div className="item">
                    <img src={blog06} alt='img8' />
                    <h2>Brian Ansaldo</h2>
                    <p>Asesor comercial</p>
                </div>
                <div className="item">
                    <img src={blog07} alt='img8' />
                    <h2>Martina Meisner</h2>
                    <p>Recursos Humanos</p>
                </div>
                <div className="item">
                    <img src={blog08} alt='img8' />
                    <h2>Melanie Pardo</h2>
                    <p>Productora audiovisual</p>
                </div>
                <div className="item">
                    <img src={blog09} alt='img8' />
                    <h2>Joel Delgado</h2>
                    <p>Diseñador Industrial y 3D</p>
                </div>
                <div className="item">
                    <img src={blog10} alt='img8' />
                    <h2>Santiago Tártaro</h2>
                    <p>Moderador Discord & RRSS</p>
                </div>
                <div className="item">
                    <img src={blog11} alt='img8' />
                    <h2>Fabián Gamboa</h2>
                    <p>Contador</p>
                </div>
                <div className="item">
                    <img src={blog12} alt='img8' />
                    <h2>Maria Cecilia Buscaglia</h2>
                    <p>Administración</p>
                </div>

            </OwlCarousel>
        </div>
    )
}

export default Equipo