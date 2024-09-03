import './style.css'

interface FlipCardProps {
    title: string;
    srcImage: string;
    href: string;
}

const FlipCard = ({ title, srcImage, href }: FlipCardProps) => {
    return (
        <div className="flip-card mt-4 me-4">
            <a href={href}>
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img src={srcImage} alt="sec2" className="h-100 w-100" style={{ objectFit: 'cover' }} />
                    </div>
                    <div className="flip-card-back">
                        <h1>{title}</h1>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default FlipCard;