import {motion} from 'framer-motion'
import HeroBackground from '../../assets/images/hero-background.jpg'

export const Hero = () => {
    return <section
    id='home'
            className='relative min-h-screen bg-cover bg-center bg-no-repeat'
            style={{
                backgroundImage: `url(${HeroBackground})`
            }}>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

        <div className='relative z-10 flex flex-col items-center justify-center min-h-screen text-center text-light px-4 md:px-8'>
            <motion.h1 
                className='text-4xl md:text-6xl font-extrabold font-inter-bold leading-tight mb-4 py-3'
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}>
                We bring your dreams to reality
            </motion.h1>

            <motion.p
                className="text-lg md:text-2xl font-light font-inter max-w-3xl mx-auto py-3"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}>
                We craft digital solutions that turn ambition into impact, because dreams aren't meant to be whispered, they're meant to be shouted to the world.
            </motion.p>
        </div>
    </section>
}