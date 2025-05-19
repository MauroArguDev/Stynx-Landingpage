import logo from '../../assets/images/logo.svg';
import { NavItem } from '../shared/NavItem';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ButtonLink } from './ButtonLink';
import { useState } from 'react';

const navItems = [
    { href: '#home', text: 'Home' },
    { href: '#about-us', text: 'About Us' },
    { href: '#our-team', text: 'Our Team' },
    { href: '#benefits', text: 'Benefits' },
];

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <motion.header 
          className="fixed top-0 left-0 w-full flex justify-between items-center py-4 px-8 lg:px-24 xl:px-32 bg-dark-section z-50"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          <Link to="#home">
            <img 
              src= {logo} 
              alt="Stynx Logo" 
              className="transition-all duration-300 ease-in-out w-24 sm:w-28 md:w-32 lg:w-36 xl:w-42 hover:scale-105" 
            />
          </Link>
          <ul className="hidden lg:flex items-center gap-8">
            {navItems.map((item, key) => (
              <NavItem href={item.href} text={item.text} key={key} />
            ))}
          </ul>
          <div className="flex items-center gap-4">
            <ButtonLink href="#contact-us" text="Contact us!" />
            <div className="lg:hidden z-50 cursor-pointer text-light" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <motion.div
                className="w-8 h-1 bg-light-section mb-1.5 rounded"
                animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 4 : 0, x: isMenuOpen ? 4 : 0}}
              />
              <motion.div
                className="w-8 h-1 bg-light-section rounded"
                animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -6 : 0, x: isMenuOpen ? 4 : 0 }}
              />
              <motion.div
                className="w-8 h-1 bg-light-section mt-1.5 rounded"
                animate={{ opacity: isMenuOpen ? 0 : 1 }}
              />
            </div>
          </div>
          <motion.div
            className={`fixed top-0 left-0 w-full h-full bg-black/80 flex flex-col items-center justify-start gap-6 pt-24 z-40 lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: isMenuOpen ? 0 : -100, opacity: isMenuOpen ? 1 : 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            onClick={() => setIsMenuOpen(false)}
          >
            {navItems.map((item, key) => (
              <NavItem href={item.href} text={item.text} key={key} />
            ))}
          </motion.div>
        </motion.header>
      )
}
