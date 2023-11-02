import "../css/discografia.css"



const Discografia = () => {
    return (

        <>
            <div className="disco">
                <h2>Escuchanos..</h2>
            </div>



            <div className="container">

                {/* <div className="card">
                    <img className="pepepe" src="/afiche_vertical.jpg" alt="" />
                    <div className="imgBx">
                        <img src="./tapaEP.jpg" alt="" />
                    </div>
                    <div className="content">
                        <h2>Fesha & Chaly</h2>
                        <iframe
                            style={{ borderRadius: "12px" }}
                            src="https://open.spotify.com/embed/track/5qbdVYlrJzXe8Y0fSfhDcZ?utm_source=generator&theme=0"
                            width="100%"
                            height="152"
                            frameBorder="0"
                            allowFullScreen=""
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy">

                        </iframe>
                        <div className="red">
                            <a href="#">
                                <img className="redes" src="./spotify.png" alt="" />
                            </a>
                            <a href="#">
                                <img className="redes" src="./youtube.png" alt="" />
                            </a>
                        </div>
                    </div>

                </div> */}


            </div>

            <div className="spo">
                {/* <iframe
                    style={{ borderRadius: "12px" }}
                    src="https://open.spotify.com/embed/playlist/0sDVIgwGLrCMYHiabYunOx?utm_source=generator&theme=0"
                    width="80%"
                    height="352"
                    frameBorder="0"
                    allowfullscreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy">

                </iframe> */}
                <iframe
                    style={{ borderRadius: "12px" }}
                    src="https://open.spotify.com/embed/playlist/0sDVIgwGLrCMYHiabYunOx?utm_source=generator&theme=0"
                    width="80%"
                    height="352"
                    frameBorder="0"
                    allowfullscreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"></iframe>

            </div>

        </>


    )
}

export default Discografia