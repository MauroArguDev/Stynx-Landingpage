import { Container } from "../shared/Container"
import logo from '../../assets/images/logo.svg'
import { NavItem } from "../shared/NavItem"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ButtonLink } from "./ButtonLink"

const navItems = [
    {href: "#home", text: "Home"},
    {href: "#about-us", text: "About Us"},
    {href: "#our-team", text: "Our Team"},
    {href: "#benefits", text: "Benefits"},
]

export const Navbar = () => {
    return <motion.header className="absolute inset-x-0 top-0 z-50 py-6 bg-dark-section"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
        <Container>
            <nav className="w-full flex justify-between gap-6 relative">
                <div className="min-w-max inline-flex relative">
                    <Link to="/" className="relative flex items-center gap-3">
                        <img 
                            src={logo} 
                            alt="Stynx Logo" 
                            className="transition-all duration-300 ease-in-out w-24 sm:w-28 md:w-32 lg:w-36 xl:w-40 2xl:w-44" 
                        />
                    </Link>
                </div>

                <div className="flex flex-col lg:flex-row w-full lg:justify-between lg:items-center 
                                absolute top-full left-0 lg:static lg:top-0 bg-dark-section 
                                lg:bg-transparent lg:h-auto h-0 overflow-hidden">
                    <ul className="px-6 lg_px-0 pt-6 lg:pt-0 flex flex-col lg:flex-row gap-y-4 gap-x-3 text-lg 
                                    text-light w-full lg:justify-center lg:items-center">
                        {navItems.map((item, key) => (
                            <NavItem href={item.href} text={item.text} key={key}/>
                        ))}
                    </ul>
                </div>

                <div className="lg:min-w-max flex items-center sm:w-max w-full pb-6 lg:pb-0 px-6 lg:px-0">
                        <ButtonLink href="#contact-us" text="Contact us"/>
                    </div>
            </nav>
        </Container>
    </motion.header>
}