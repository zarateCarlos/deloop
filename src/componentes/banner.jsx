
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/banner.css";

const Banner = () => {
    /* const settings = {
         dots: true,
         arrows: false,
         infinite: true,
         speed: 3000,
         slidesToShow: 1,
         slidesToScroll: 1,
         autoplay: true,
         autoplaySpeed: 6000,
         responsive: [
             {
                 breakpoint: 1023,
                 settings: {
                     slidesToShow: 1,
                 },
             },
             {
                 breakpoint: 600,
                 settings: {
                     slidesToShow: 1,
                 },
             },
         ],
 
     }; */

    return (
        <div className="hero">
            <section className="splash">

                    <div className="flayer">
                        <img src="/banner_sin_fondo.png" alt="" />
                    </div>

            </section>


        </div>
    )
}

export default Banner;