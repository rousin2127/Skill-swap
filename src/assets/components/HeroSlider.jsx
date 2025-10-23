// src/components/HeroSlider.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { motion } from "framer-motion";

const HeroSlider = () => {
    const slides = [
        {
            title: "Learn Something New, Teach What You Know",
            desc: "Join SkillSwap — your local hub for learning and sharing skills.",
            image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
        },
        {
            title: "Connect Locally, Grow Together",
            desc: "Meet nearby learners and experts. Exchange skills and ideas.",
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
        },
        {
            title: "Trade Skills, Not Money",
            desc: "A community-driven skill exchange platform — free and fair.",
            image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7",
        },
    ];

    return (
        <div className="w-full md:h-[40vh]  ">
            <div>
                <Swiper
                    modules={[Autoplay, Pagination, Navigation]}
                    slidesPerView={1}
                    loop={true}
                    pagination={{ clickable: true }}
                    navigation={true}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    className="md:h-[40vh] w-full mt-15 rounded-2xl"
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className="h-full bg-cover bg-center flex items-center justify-center text-center relative rounded-2xl"
                                style={{ backgroundImage: `url(${slide.image})` }}
                            >
                                {/* Dark overlay */}
                                <div className="absolute inset-0 bg-black/50"></div>

                                {/* Text content */}
                                <motion.div
                                    className="relative z-10 text-white max-w-2xl px-6"
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                >
                                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                                        {slide.title}
                                    </h1>
                                    <p className="text-lg md:text-xl mb-6">{slide.desc}</p>
                                    <button className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-full font-medium shadow-md">
                                        Explore Skills
                                    </button>
                                </motion.div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
export default HeroSlider;