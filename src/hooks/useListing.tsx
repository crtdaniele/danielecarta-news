import { useState, useEffect } from 'react'
import IArticle from '../model/IArticle'
import json from '../data/db.json'

const useListing = () => {
    const [data, setData] = useState<IArticle[]>();

    useEffect(() => {

        setData(json)

    }, [])

    return data
}

export default useListing;