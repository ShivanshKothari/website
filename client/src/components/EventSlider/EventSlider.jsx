import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Link } from "react-router-dom";
import { EffectCoverflow,Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import "swiper/css";
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./EventSlider.css";
import EventsCard from "../EventsCard/EventsCard";
import { FaChevronCircleLeft , FaChevronCircleRight} from "react-icons/fa"

// Import prisma
// import prisma from "/DB/db.config.js";

const EventSlider = ({eventType}) => {


    const data = [
        {
            urlImage: "/hackathon.png",
            title: "Hackathon",
            desc: "Innovate solutions! Tackle climate change, healthcare disparities, or social injustice."
        },
        {
            urlImage: "/fish-tank.png",
            title: "Noteworthy technology acquisitions 2021",
            desc: "Calling all entrepreneurs! Bubble up your innovation/startup to a panel of investors."
        },
        {
            urlImage: "/esports.jpg",
            title: "Noteworthy technology acquisitions 2021",
            desc: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
        },
        {
            urlImage: "/book-fair.png",
            title: "Noteworthy technology acquisitions 2021",
            desc: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
        },
        
    ]
    return (
        <div >
            <div div className="container">
            <h2 className="line-title">{eventType}</h2>
                <Swiper effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5,
                    }}
                    pagination={{ el: '.swiper-pagination', clickable: true }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                        clickable: true,
                    }}
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    className="swiper_container"
                >
                    {/* slider */}
                    {data.map((card, i) => (
                        <SwiperSlide key={i}>
                            <Link to="/youthfest/1">
                            <EventsCard card={card} className="card"/>
                            </Link>
                        </SwiperSlide>
                    ))}
                    <div className="slider-controler">
                        <div className="swiper-button-prev slider-arrow">
                            <button name="arrow-back-outline"><FaChevronCircleLeft/></button>
                        </div>
                        <div className="swiper-button-next slider-arrow">
                            <button name="arrow-forward-outline"> <FaChevronCircleRight/></button>
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </Swiper>
            </div>

        </div>
    );
};

export default EventSlider;