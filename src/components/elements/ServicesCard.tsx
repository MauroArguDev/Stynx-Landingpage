import { motion } from "motion/react"
import placeholderImage from '../../assets/images/logo.svg';

interface ServicesCardProps {
    image: string
    title: string
    text: string
}

export const ServicesCard = ({ image, title, text }: ServicesCardProps) => {
    return (
        <motion.div 
            className="rounded-2xl bg-gradient-to-r from-[#B91C1C] via-[#6B21A8] to-[#6B21A8] p-1 flex items-center justify-center h-45 w-60 hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="bg-dark-section backdrop-blur-lg rounded-2xl border border-transparent w-full h-full flex flex-col items-center justify-center p-6">
                <img src={image || placeholderImage} alt={title} className="h-10 mb-4" />
                <h3 className="text-lg font-inter-bold text-light mb-1 text-center">{title}</h3>
                <p className="text-sm font-inter text-light text-center">{text}</p>
            </div>
        </motion.div>
    )
}