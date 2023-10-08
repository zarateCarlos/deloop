
import "../css/banner.css";
import ScrollReveal from 'scrollreveal';
import React, { useEffect } from 'react';


const Banner = () => {
    useEffect(() => {
        // Configura Scroll Reveal
        ScrollReveal().reveal('.todos', {
            duration: 2000, // Duración de la animación en milisegundos
            origin: 'right', // Origen de la animación (izquierda)
            distance: '200px', // Distancia desde el origen
            delay: 200, // Retardo antes de que comience la animación en milisegundos
        });
        ScrollReveal().reveal('.loop', {
            duration: 2000, // Duración de la animación en milisegundos
            origin: 'top', // Origen de la animación (izquierda)
            distance: '200px', // Distancia desde el origen
            delay: 200, // Retardo antes de que comience la animación en milisegundos
        });
        ScrollReveal().reveal('.tito', {
            duration: 2000, // Duración de la animación en milisegundos
            origin: 'left', // Origen de la animación (izquierda)
            distance: '200px', // Distancia desde el origen
            delay: 200, // Retardo antes de que comience la animación en milisegundos
        });
        ScrollReveal().reveal('.fer', {
            duration: 2000, // Duración de la animación en milisegundos
            origin: 'left', // Origen de la animación (izquierda)
            distance: '200px', // Distancia desde el origen
            delay: 200, // Retardo antes de que comience la animación en milisegundos
        });
        ScrollReveal().reveal('.rodo', {
            duration: 2000, // Duración de la animación en milisegundos
            origin: 'right', // Origen de la animación (izquierda)
            distance: '200px', // Distancia desde el origen
            delay: 200, // Retardo antes de que comience la animación en milisegundos
        });

    }, []);

    return (
        <div className="hero">


            <div className="flayer">
                <img className="todos ver" src="/banner.JPG" alt="" />
                <img className="loop ver" src="/de_loop.jpg" alt="" />
                <img className="fer ver" src="/fer.jpeg" alt="" />
                <img className="rodo ver" src="/rodo.jpeg" alt="" />
                <img className="tito ver" src="/tito.jpeg" alt="" />
            </div>




        </div>
    )
}

export default Banner;