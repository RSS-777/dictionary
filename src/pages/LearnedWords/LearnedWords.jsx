import './learnedWords.css'

export const LearnedWords = () => {
    const learnedWords = JSON.parse(localStorage.getItem('selectedWords')) || [];

    return (
        <div>
            <h2>LearnedWords</h2>
            <ol>
                {learnedWords.map((entry, index) => {
                    return (
                        <li key={index}>
                            <span>{entry.key}</span> - {entry.value}
                        </li>
                    )
                })}
            </ol>
        </div>
    )
}