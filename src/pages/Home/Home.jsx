import { useState, useEffect } from 'react'
import { translations } from '../../utils/translations'
import './Home.css'

export const Home = () => {
    const [updatedWords, setUpdatedWords] = useState([])

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

    const handleItemClick = (key, value, index) => {
        const selectedWords = JSON.parse(localStorage.getItem('selectedWords')) || [];
        selectedWords.push({ key, value })
        localStorage.setItem('selectedWords', JSON.stringify(selectedWords))
        setUpdatedWords(prevWords => prevWords.filter((_, i) => i !== index))
    }

    return (
        <main>
            <h1>Dictionary</h1>
            <ol>
                {updatedWords.map(([key, value], index) => {
                    return (
                        <li
                            key={index}
                            onClick={() => handleItemClick(key, value, index)}
                        >
                            <span>{key}</span> - {value}
                        </li>
                    )
                })}
            </ol>
        </main>
    )
}