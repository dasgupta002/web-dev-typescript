import { useState, useEffect } from 'react'
import axios from 'axios'
import { Game } from '../types/game'
import { Filter } from '../types/filter'

type Response = {
    games: Game[]
    error?: string
}

const useFetch = (params: Filter) : Response => {
    const [games, setGames] = useState<Game[]>([])
    const [error, setError] = useState<string>('')

    const { platform, genre, tag, sort } = params

    useEffect(() => {
        axios
            .get('/games', { 
                baseURL: 'https://www.freetogame.com/api/games', 
                params: { 
                    platform,
                    category: genre,
                    tag,
                    'sort-by': sort
                }
            })
            .then(res => setGames(res.data))
            .catch(e => setError(e.message))
    }, [platform, genre, tag, sort])

    return { games, error }
}

export default useFetch