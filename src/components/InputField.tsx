import React, { useState } from 'react'
import '../styles.css'

interface Props {
    searchValue: string
    setSearchValue: React.Dispatch<React.SetStateAction<string>>
}

interface Results {
    productName: string,
    productDescription: string,
    price: number,
    inStock: boolean,
    id: string
}

const InputField = ({searchValue, setSearchValue} : Props) => {

    //quicksort function
    const quicksort = (list: Results[]):Results[] => {
        if (list.length < 2) {
            return list
        }
    
        let pivot: Results = list[0]
        let left: Results[] = []
        let right: Results[] = []
    
        for (let i: number = 1; i < list.length; i ++) {
            if (list[i].productName < pivot.productName) {
                left.push(list[i])
            } else {
                right.push(list[i])
            }
        }
    
        return [...quicksort(left), pivot, ...quicksort(right)]
    }
    
    

    const [results, setResults] = useState<Results[]>([])

    const onSubmit = (e: React.FormEvent): void => {
        e.preventDefault()
        fetch(`http://localhost:3001/api/products`, {
            method: 'GET',
            headers: {
                'Content-type': 'Application/json',
            }
        })
        .then(res => res.json())
        .then(data => setResults(quicksort(data)))
    }

    return (
        <form className='input'>
            <input 
                type='input' 
                placeholder='Search query' 
                className='input__box'
                onChange={(e) => setSearchValue(e.target.value)} />
            <button className='input_submit' type='submit' onClick={onSubmit}>Search</button>
            <ul>
                {results.map((result: Results) => (
                    <li>
                        <h4>{result.productName}</h4>
                        <p>{result.productDescription}</p>
                        <p>{result.price}</p>
                    </li>
                ))}
            </ul>
        </form>
    )
}

export default InputField
