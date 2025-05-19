import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import apple from '../../assets/images/apple.svg'
import android from '../../assets/images/android.svg'
import cloud from '../../assets/images/cloud.svg'
import web from '../../assets/images/web.svg'
import consulting from '../../assets/images/consulting.svg'
import uiux from '../../assets/images/ui-ux.svg'
import prototyping from '../../assets/images/prototyping.png'
import { ServicesCard } from '../elements/ServicesCard';

export const Services = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const services = [
        { image: apple, title: 'Native Apple Apps', text: 'Designed for Apple users. Engineered for growth.' },
        { image: android, title: 'Native Android Apps', text: 'Real Android. Real code. Real results.' },
        { image: cloud, title: 'SAAS', text: 'Monetize your idea with software people actually love using.' },
        { image: web, title: 'Web Design', text: 'Your brand deserves more than a template.' },
        { image: consulting, title: 'Consulting', text: 'Not just code, strategy that saves time and money.' },
        { image: uiux, title: 'UI/UX Design', text: 'Interfaces that seduce. Experiences that retain.' },
        { image: prototyping, title: 'Prototyping', text: 'From concept to demo in days, not months.' }
    ];

    return (
        <section
            ref={ref}
            id="services"
            className="min-h-screen bg-dark-section px-6 md:px-12 lg:px-24 py-16 flex flex-col items-center gap-12 scroll-mt-20"
        >
            <motion.h2
                className="text-4xl md:text-6xl font-inter-bold text-light text-center"
                initial={{ opacity: 0, y: -50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                Apps that don’t just work. They convert, retain, and evolve.
            </motion.h2>
            <motion.p
                className="text-lg md:text-2xl font-inter text-light text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                Let us show you what we can do
            </motion.p>

            <div className="w-full max-w-7xl mx-auto">
                <div className="flex flex-wrap justify-center gap-8">
                    {services.map((service, index) => (
                        <ServicesCard key={index} image={service.image} title={service.title} text={service.text} />
                    ))}
                </div>
            </div>
        </section>
    )
}