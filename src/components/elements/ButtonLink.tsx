import { Link } from "react-router-dom"

interface ButtonLinkProps {
    href: string
    text: string
    classname?: string
}

export const ButtonLink = ({ href, text}: ButtonLinkProps) => {
    return (
        <Link to={href} className="rounded-full outlin-none relative overflow-hidden">
            <div className="items-center justify-center">
                <div className="rounded-full bg-gradient-to-r from-[#B91C1C] via-[#6B21A8] to-[#6B21A8] p-1">
                    <div className="rounded-full bg-dark-section">
                        <span className="text-md md:text-2xl font-chillax text-light px-4 py-4">{text}</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}