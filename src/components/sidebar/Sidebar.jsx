import { useState, useEffect } from "react";
import "./Sidebar.css";
import { FaChevronRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa6";
const slides = [
    { id: 1, img: "https://s3.fortifai.uz/shop/catalog/carousel/295/1746018044-Kondicioner%201600x491%20UZ.png" },
    { id: 2, img: "https://s3.fortifai.uz/shop/catalog/carousel/268/1737111160-sokany_uz_1600%D1%85491.png" },
    { id: 3, img: "https://s3.fortifai.uz/shop/catalog/carousel/292/1744378496-noutbuki-web-banner_1600%D1%85491_uz.png" },
    { id: 4, img: "https://s3.fortifai.uz/shop/catalog/carousel/294/1744973342-Novinka_infinix_uz_1600%E2%95%A4%D0%95491.png" },
    { id: 5, img: "https://s3.fortifai.uz/shop/catalog/carousel/215/1716885789-main_1600x491_uz.png" },
    { id: 6, img: "https://s3.fortifai.uz/shop/catalog/carousel/291/1744378311-%D0%A1%D0%B0%D0%B9%D1%82%20%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F%201600%D1%85491.png" },
    { id: 7, img: "https://s3.fortifai.uz/shop/catalog/carousel/296/1746419903-1600x491.png" },
    { id: 8, img: "https://s3.fortifai.uz/shop/catalog/carousel/216/1744870646-byd_1600%E2%95%A4%D0%95491_uz.png" }
];

const Sidebar = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="slider_container">
            <div className="slider_wrapper" style={{ transform: `translateX(-${current * 100}%)` }}>
                {slides.map((slide) => (
                    <img key={slide.id} src={slide.img} alt={`Slide ${slide.id}`} className="slide_image" />
                ))}
            </div>

            <button onClick={() => setCurrent(current === 0 ? slides.length - 1 : current - 1)} className="slider_button left"><FaAngleLeft /></button>
            <button onClick={() => setCurrent(current === slides.length - 1 ? 0 : current + 1)} className="slider_button right"><FaChevronRight /></button>

            <div className="slider_indicators">
                {slides.map((_, index) => (
                    <div
                        key={index}
                        className={`indicator ${index === current ? "active" : ""}`}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default Sidebar;
