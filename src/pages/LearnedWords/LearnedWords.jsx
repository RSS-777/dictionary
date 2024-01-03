import './learnedWords.css'

export const LearnedWords = () => {
    const learnedWords = JSON.parse(localStorage.getItem('selectedWords')) || [];

    const groupedLearnedWords = learnedWords.reduce((acc, { key, value }) => {
        const firstLetter = key.charAt(0).toUpperCase();
        if (!acc[firstLetter]) {
            acc[firstLetter] = [];
        }
        acc[firstLetter].push({ key, value });
        return acc
    }, {});

    const totalWordsCount = Object.values(groupedLearnedWords).reduce(
        (totalCount, currentArray) => totalCount + currentArray.length,
        0
    );

    return (
        <div>
            <h2>LearnedWords</h2>
            <div className="word-count">Words:{totalWordsCount}</div>
            <div className="word-groups">
                {Object.keys(groupedLearnedWords)
                    .sort()
                    .map((letter) => (
                        <div className="word-group" key={letter}>
                            <h3>{letter}</h3>
                            <ol>
                                {groupedLearnedWords[letter].map(({ key, value }, index) => {
                                    return (
                                        <li key={index}>
                                            <span>{key}</span> - {value}
                                        </li>
                                    )
                                })}
                            </ol>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}