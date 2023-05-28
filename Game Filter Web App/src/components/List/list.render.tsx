import React, { ChangeEvent, ReactElement } from 'react'
import Options from '../Options/options'
import Card from '../Card/card'
import { Alert, ListWrapper, ListItem } from './styles'
import { Game } from 'types/game'

interface Props {
    games: Game[],
    onfilter: (event: ChangeEvent<HTMLFormElement>) => void,
    err?: string
}

const ListRender = ({ games, onfilter, err } : Props) : ReactElement => {
    return <>
        <Options onchange = { onfilter } />
        <ListWrapper>
            {
                err || !games?.length ? <Alert>No games yet on hitlist.</Alert> 
                                      : games.map((game : Game) => <ListItem key = { game.id }><Card content = { game } /></ListItem>)
            }
        </ListWrapper>
    </>
}

export default ListRender