import { motion, useInView } from 'framer-motion'
import HeroBackground from '../../assets/images/hero-background.jpg'
import { useRef } from 'react';

export const Hero = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section
            id="home"
            ref={ref}
            className="relative h-[calc(100vh-80px)] bg-cover bg-center bg-no-repeat scroll-mt-20"
            style={{ backgroundImage: `url(${HeroBackground})` }}
        >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-light px-4 md:px-8">
                <motion.h1 
                    className="text-4xl md:text-6xl font-extrabold font-inter-bold leading-tight mb-4 py-3"
                    initial={{ opacity: 0, y: -50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    We bring your dreams to reality
                </motion.h1>
                <motion.p
                    className="text-lg md:text-2xl font-light font-inter max-w-3xl mx-auto py-3"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    We craft digital solutions that turn ambition into impact, because dreams aren't meant to be whispered, they're meant to be shouted to the world.
                </motion.p>
            </div>
        </section>
    )
}