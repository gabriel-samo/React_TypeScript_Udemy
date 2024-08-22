type HeaderProps = {
    image: {
        src: string;
        alt: string;
    }
    title: string;
}

export default function Header({ image, title }: HeaderProps) {
    return (
        <header>
            <img src={image.src} alt={image.alt} />
            <h1>{title}</h1>
        </header>
    )
}