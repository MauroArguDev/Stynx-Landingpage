import { Link } from "react-router-dom"

interface NavItemProps {
    href: string
    text: string
}

export const NavItem = ( {href, text}: NavItemProps) => {
    return (
        <li className="lg:mx-6">
            <Link to={href} className="duration-300 font-inter ease-linear hover:font-inter-bold py-3">
                {text}
            </Link>
        </li>
    )
}