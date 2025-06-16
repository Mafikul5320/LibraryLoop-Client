import React from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/pagination';

const Banner = () => {
    const slides = [
        {
            id: 1,
            title: "Welcome to LibraryLoop",
            subtitle: "Your Digital Gateway to Knowledge",
            description: "Discover thousands of books, manage your reading journey, and connect with a community of book lovers in our comprehensive library management system.",
            image: "https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg",
            cta: "Start Reading",
            stats: { books: "10,000+", users: "5,000+", categories: "25+" }
        },
        {
            id: 2,
            title: "Seamless Book Management",
            subtitle: "Borrow, Track, and Return with Ease",
            description: "Our intuitive platform makes it simple to browse our extensive collection, borrow your favorite books, and keep track of your reading progress.",
            image: "https://images.pexels.com/photos/2908984/pexels-photo-2908984.jpeg",
            cta: "Browse Books",
            stats: { borrowed: "15,000+", returns: "98%", satisfaction: "4.9/5" }
        },
        {
            id: 3,
            title: "Join Our Reading Community",
            subtitle: "Connect, Share, and Grow Together",
            description: "Be part of a vibrant community where readers share recommendations, discuss books, and embark on literary adventures together.",
            image: "https://images.pexels.com/photos/1319854/pexels-photo-1319854.jpeg",
            cta: "Join Community",
            stats: { reviews: "25,000+", discussions: "1,000+", events: "50+" }
        }
    ];

    return (
        <div className='relative'>
            <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{ delay: 3000 }}
                loop={true}
                pagination={{ clickable: true }}
                className='w-full h-[600px] md:h-[700px] overflow-hidden'
            >
                {
                    slides.map((oneslide, index) => (
                        <SwiperSlide key={index}>
                            <div className='relative w-full h-full'>
                                <img src={oneslide.image} className='w-full h-full object-cover' />
                                <div className='absolute inset-0 bg-gradient-to-r from-black/60 to-black/40'></div>

                                <div className='absolute inset-0 flex flex-col-reverse md:flex-row justify-center items-center px-4 md:px-0'>
                                    {/* Content */}
                                    <div className="text-white max-w-xl space-y-6 text-center md:text-left md:mr-10 z-10">
                                        <h1 className="text-3xl md:text-6xl font-bold">{oneslide.title}</h1>
                                        <h2 className="text-lg md:text-2xl text-blue-200 font-medium">{oneslide.subtitle}</h2>
                                        <p className="text-base md:text-lg text-gray-200">{oneslide.description}</p>
                                        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                                            <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg text-white font-semibold shadow-2xl">
                                                {oneslide.cta}
                                            </button>
                                            <button className="px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-black transition">
                                                Learn More
                                            </button>
                                        </div>
                                    </div>

                                    {/* Stats */}
                                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 mt-10 md:mt-0 z-10">
                                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                                            {Object.entries(oneslide.stats).map(([key, value], i) => (
                                                <div className="text-center" key={i}>
                                                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                                                        {value}
                                                    </div>
                                                    <div className="text-blue-200 text-sm capitalize">
                                                        {key.replace(/([A-Z])/g, ' $1').trim()}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default Banner;
