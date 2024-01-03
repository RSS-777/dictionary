import { useState, useEffect } from 'react'
import { translations } from '../../utils/translations'
import './Home.css'

export const Home = () => {
    const [updatedWords, setUpdatedWords] = useState([])
    const [groupedWords, setGroupedWords] = useState({})

    useEffect(() => {
        const translationEntries = Object.entries(translations)
        const storedWords = JSON.parse(localStorage.getItem('selectedWords')) || [];

        if (storedWords.length > 0) {
            const newWords = translationEntries.filter(([key, value]) => {
                return !storedWords.some(word => word.key === key && word.value === value)
            })
            setUpdatedWords(newWords)
        } else {
            setUpdatedWords(translationEntries)
        }
    }, [])

    useEffect(() => {
        const grouped = updatedWords.reduce((acc, [key, value]) => {
            const firstLetter = key.charAt(0).toUpperCase();
            if (!acc[firstLetter]) {
                acc[firstLetter] = [];
            }
            acc[firstLetter].push([key, value]);
            return acc;
        }, {});
        setGroupedWords(grouped)
    }, [updatedWords])

    const handleItemClick = (key, value, index) => {
        const selectedWords = JSON.parse(localStorage.getItem('selectedWords')) || [];
        selectedWords.push({ key, value })
        localStorage.setItem('selectedWords', JSON.stringify(selectedWords))
        setUpdatedWords(prevWords => prevWords.filter((_, i) => i !== index))
    }

    const totalWordsCount = Object.values(groupedWords).reduce(
        (totalCount, currentArray) => totalCount + currentArray.length,
        0
    );

    return (
        <main>
            <h1>Dictionary</h1>
            <div className="word-count">Words:{totalWordsCount}</div>
            <div className="word-groups">
                {Object.keys(groupedWords)
                    .sort()
                    .map((letter) => (
                        <div className='word-group' key={letter}>
                            <h3>{letter}</h3>
                            <ol>
                                {groupedWords[letter].map(([key, value], index) => {
                                    return (
                                        <li
                                            key={index}
                                            onClick={() => handleItemClick(key, value, index)}
                                            title='Click (Add a word to the learned words)'
                                        >
                                            <span>{key}</span> - {value}
                                        </li>
                                    )
                                })}
                            </ol>
                        </div>
                    ))}
            </div>
        </main>
    )
}