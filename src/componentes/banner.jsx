
import "../css/banner.css";



const Banner = () => {

    return (
        <div className="hero">


            <div className="flayer">

                <div className="staff">
                    <img className="rodo" loading="eager" src="/rodo.jpg" alt="" />
                    <p className="desc">Rodo</p>
                </div>
                <div className="staff">
                    <img className="fer" loading="eager"  src="/fer.jpg" alt="" />
                    <p className="desc">Fer</p>
                </div>
                <div className="staff">
                    <img className="mateo" loading="eager"  src="/mateo.jpg" alt="" />
                    <p className=" mate">Mateo</p>
                </div>
                <div className="staff">
                    <img className="tito" loading="eager"  src="/tito.jpg" alt="" />
                    <p className="descripcion">Tito</p>
                </div>

            </div>



            <h2 className="vivir">#VivirEnMúsica</h2>
        </div>
    )
}

export default Banner;