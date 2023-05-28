import React, { useState, useCallback, ChangeEvent, ReactElement } from 'react'
import useFetch from '../../hooks/fetch'
import ListRender from './list.render'
import { Filter } from 'types/filter'

const List = () : ReactElement => {
    const [filter, setFilter] = useState<Filter>({ platform: 'browser', sort: 'relevance' })

    const { games, error } = useFetch(filter)
    
    const onchange = useCallback((event: ChangeEvent<HTMLFormElement>) => {
        event.preventDefault()
        setFilter((cur) => ({ ...cur, [event.target.name]: event.target.value }))
    }, [])

    return <ListRender games = { games } onfilter = { onchange } err = { error } />
}

export default List