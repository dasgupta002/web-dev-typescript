import React, { ReactElement } from 'react'
import { StyledLink, Image, Info, Title, Description, Icon, Genre } from './styles'
import { AiFillWindows } from 'react-icons/ai'
import { IoBrowsers } from 'react-icons/io5'
import { Game } from 'types/game'

interface Props {
    content: Game
}

const Card = ({ content } : Props) : ReactElement => {
    const { id, title, thumbnail, short_description, genre, platform } = content
    const link = '/game/' + id
    const icons = platform.split(',').map(p => {
        let icon = null

        switch(p.trim()) {
            case 'PC (Windows)':
                icon = <Icon key = { id + '-windows' }><AiFillWindows /></Icon>
                break

            case 'Web Browser':
                icon = <Icon key = { id + '-browsers' }><IoBrowsers /></Icon>
                break
            
            default:
                break
        }

        return icon
    })

    return <StyledLink to = { link }>
        <Image src = { thumbnail } alt = 'game__thumb' />
        <Info>
            <Title>{ title }</Title>
            <Description>{ short_description }</Description>
            { icons }
            <Genre>{ genre }</Genre>
        </Info>
    </StyledLink>
}

export default Card