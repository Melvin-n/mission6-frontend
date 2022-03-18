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
    const quickSortProductNames = (productNames: Results[]):Results[] => {
        if (productNames == null) return []
        if (productNames.length < 2) return productNames

        let pivot: Results = productNames[0], left: Results[] = [], right: Results[] = []      
    
        for (let i: number = 1; i < productNames.length; i ++) {
            if (productNames[i].productName < pivot.productName) {
                left.push(productNames[i])
                continue
            }
    
            right.push(productNames[i])
        }
    
        return [...quickSortProductNames(left), pivot, ...quickSortProductNames(right)]
    }
    
    

    const [results, setResults] = useState<Results[]>([])

    const onSubmit = (e: React.FormEvent): void => {
        e.preventDefault()
        fetch(`http://mym6-alb-2138763550.us-east-2.elb.amazonaws.com/api/products`, {
            method: 'GET',
            headers: {
                'Content-type': 'Application/json',
            }
        })
        .then(res => res.json())
        .then(data => setResults(quickSortProductNames(data)))
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
