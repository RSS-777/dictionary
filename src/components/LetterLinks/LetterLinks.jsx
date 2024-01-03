import './LetterLinks.css'

export const LetterLinks = ({groupedWords}) => {
    return (
        <nav className="letter-links">
            <div className="open">open</div>
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