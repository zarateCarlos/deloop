import '../css/footer.css'

const Footer = () => {
    return (

        <>
            <div className="descubrinos">
                <h2>Descubrinos..</h2>
            </div>
            <footer>
                <div className="re">
                    <a target='_blank'
                        href="https://www.facebook.com/deloopoficial/">
                        <div className="tactil">
                            <img src="/face.png" alt="" />
                        </div>
                    </a>
                    <a target='_blank'
                        href="https://www.instagram.com/deloopoficial/">
                        <img src="/insta.png" alt="" />
                    </a>
                    <a target='_blank'
                        href="https://www.tiktok.com/@deloop.oficial">
                        <img src="/tikkk.png" alt="" />
                    </a>
                    <a target='_blank'
                        href="https://open.spotify.com/intl-es/artist/5I51dr5CZzrr4PlZJm4fUW">
                        <img src="/spotify.png" alt="" />
                    </a>
                    <a target='_blank'
                        href="https://www.youtube.com/@DELOOPOFICIAL">
                        <img src="/youtube.png" alt="" />
                    </a>

                </div>
                <div className="contacto">
                    <div className="datos">
                        <img src="/logoRojo.png" alt="logo" />
                        <p>
                            La magia del rock en vivo es incomparable; <br />
                            desde los clásicos atemporales, hasta los éxitos más recientes. <br />
                            Reserva tu fecha y haremos de tu evento ¡un momento inolvidable!
                        </p>
                        <div className="link">
                            <a href="mailto:deloopoficial@gmail.com"><img src="/mail.png" alt="whatsapp" />deloopoficial@gmail.com</a>
                            <a className='whasa' href="https://wa.me/541162937028"> <img src="/whats.png" alt="whatsapp" />Enviar mensaje</a>

                        </div>
                    </div>
                </div>


                <div class="copyright">
                    <p>
                        &#169; 2023 by M&C - All Rights Reserved
                    </p>
                    <p>
                        Buenos Aires - Argentina
                    </p>
                <div className="nosotros">
                <a href="mailto:marianycharlie.contacto@gmail.com">
                        <img src="/mail.png" alt="email" />
                    </a>
                    <a href="https://www.instagram.com/marianycharlie/" target="_blank" >
                        <img src="/insta.png" alt="instagram" />
                    </a>
                </div>

                </div>


            </footer>


        </>

    )
}

export default Footer