import { motion, useInView } from "motion/react";
import AboutUsImage from '../../assets/images/about-us.jpg'
import { useRef } from "react";

export const AboutUs = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section
            id="about-us"
            ref={ref}
            className="min-h-screen bg-light-section flex flex-col items-center justify-center px-6 md:px-12 lg:px-24 py-12 gap-y-6 lg:gap-y-40 scroll-mt-20"
        >
            <motion.h1
                className="text-5xl md:text-7xl font-inter-bold text-center text-dark mb-8"
                initial={{ opacity: 0, y: -50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                Who we are
            </motion.h1>

            <div className="flex flex-col lg:flex-row items-center gap-12 w-full">
                <motion.p
                    className="text-lg md:text-2xl font-inter text-dark text-center lg:text-left flex-1"
                    initial={{ opacity: 0, x: -100 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    STYNX is a tech powerhouse building innovative, scalable software solutions designed to elevate businesses into the future. Our mission is to push boundaries, redefine standards, and turn ambitious ideas into digital realities.
                </motion.p>
                <motion.img
                    src={AboutUsImage}
                    alt="About Us Image"
                    className="h-96 object-cover rounded-2xl shadow-xl"
                    initial={{ opacity: 0, x: 100 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
                    transition={{ duration: 0.8, delay: 0.6 }}/>
            </div>
        </section>
    )
}