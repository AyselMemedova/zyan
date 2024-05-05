import React, { useRef } from "react";
import Slider from "react-slick";


function AutoPlayMethods() {
    let sliderRef = useRef(null);
    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "none" }}
                onClick={onClick}
            />
        );
    }

    const settings = {
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: <SamplePrevArrow />,
        nextArrow: <SamplePrevArrow />
    };

    return (
        <div className="slider-container slider_xz">
            <Slider ref={(slider) => (sliderRef = slider)} {...settings}>

                <div className='section7_clients_slider_card'>
                    <div className='section7_clients_slider_card_img'>
                        <img src="https://zyan.vercel.app/images/testimonial/1.jpg" alt="" />
                    </div>

                    <div className='section7_clients_slider_card_alt'>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>

                        <div className='section7_clients_slider_card_text'>
                            <h3>Eleanor pena</h3>
                            <h5>Marketing Cordinator</h5>
                            <p>
                                Financial planners help people to knowledge in about how to
                                invest and in save their moneye the most efficient way eve plan
                                ners help people tioniio know ledige in about how.
                            </p>
                            {/* <img src="https://zyan.vercel.app/images/icon/quot.png" alt="" /> */}
                        </div>
                    </div>

                </div>

                <div className='section7_clients_slider_card'>
                    <div className='section7_clients_slider_card_img'>
                        <img src="https://zyan.vercel.app/images/testimonial/1.jpg" alt="" />
                    </div>

                    <div className='section7_clients_slider_card_alt'>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>

                        <div className='section7_clients_slider_card_text'>
                            <h3>Eleanor pena</h3>
                            <h5>Marketing Cordinator</h5>
                            <p>
                                Financial planners help people to knowledge in about how to
                                invest and in save their moneye the most efficient way eve plan
                                ners help people tioniio know ledige in about how.
                            </p>
                            {/* <img src="https://zyan.vercel.app/images/icon/quot.png" alt="" /> */}
                        </div>
                    </div>

                </div>

                <div className='section7_clients_slider_card'>
                    <div className='section7_clients_slider_card_img'>
                        <img src="https://zyan.vercel.app/images/testimonial/1.jpg" alt="" />
                    </div>

                    <div className='section7_clients_slider_card_alt'>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>

                        <div className='section7_clients_slider_card_text'>
                            <h3>Eleanor pena</h3>
                            <h5>Marketing Cordinator</h5>
                            <p>
                                Financial planners help people to knowledge in about how to
                                invest and in save their moneye the most efficient way eve plan
                                ners help people tioniio know ledige in about how.
                            </p>
                            {/* <img src="https://zyan.vercel.app/images/icon/quot.png" alt="" /> */}
                        </div>
                    </div>

                </div>
       

      </Slider >
    </div >
  );

}
export default AutoPlayMethods;