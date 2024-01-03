import './LetterLinks.css'

export const LetterLinks = ({groupedWords}) => {
    return (
        <nav className="letter-links">
            <div className="navigation-letter">navigation</div>
            {Object.keys(groupedWords)
                .sort()
                .map((letter) => (
                    <a key={letter} href={`#${letter}`}>
                        {letter}
                    </a>
                ))}
        </nav>
    )
}