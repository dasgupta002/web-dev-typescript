import React, { useEffect, useState, ReactElement } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import { BiMessageSquare } from 'react-icons/bi'
import styled from 'styled-components'
import { Game } from '../types/game'
import { primaryTextColor } from '../styles/theme'
import { breakpoints } from '../styles/breakpoints'

const Detail = () : ReactElement => {
    const id = window.location.pathname.split('/')[2]

    const [game, setGame] = useState<Game>()
    const [error, setError] = useState<string>()

    useEffect(() => {
        axios
            .get('/game?id=' + id, { 
                baseURL: 'https://www.freetogame.com/api/games'
            })
            .then(res => setGame(res.data))
            .catch(e => setError(e.message))
    }, [id])

    if(error)  {
        return <Redirect to = '/' />
    }

    return <Section>
        <Box>
            <Image src = { game?.thumbnail } alt = 'game__hero' />
            <Button>Play Now</Button>
        </Box>
        <Box>
            <Title>{ game?.title }</Title>
            <Heading> { Math.floor(Math.random() * 50) } reviews.</Heading>
            <div>
                <Heading>About</Heading>
                <Paragraph>{ game?.description }</Paragraph>
            </div>
            <div>
                <Heading>What do you think?</Heading>
                <Flex>
                    <BiMessageSquare />
                    <Input type = 'text' placeholder = 'Share your thoughts with our community.' />
                </Flex>
            </div>
            <div>
                <Heading>Additional Information</Heading>
                <List>
                    <div>
                        <Span>Release Date</Span>
                        <Text>{ game?.release_date }</Text>
                    </div>
                    <div>
                        <Span>Developer</Span>
                        <Text>{ game?.developer }</Text>
                    </div>
                    <div>
                        <Span>Publisher</Span>
                        <Text>{ game?.publisher }</Text>
                    </div>
                </List>
            </div>
            {
                game?.minimum_system_requirements && <div>
                    <Heading>System Requirements</Heading>
                    <List>
                        <div>
                            <Span>OS</Span>
                            <Text>{ game?.minimum_system_requirements?.os }</Text>
                        </div>
                        <div>
                            <Span>Processor</Span>
                            <Text>{ game?.minimum_system_requirements?.processor }</Text>
                        </div>
                        <div>
                            <Span>Memory</Span>
                            <Text>{ game?.minimum_system_requirements?.memory }</Text>
                        </div>
                        <div>
                            <Span>Graphics</Span>
                            <Text>{ game?.minimum_system_requirements?.graphics }</Text>
                        </div>
                    </List>
                </div>
            }
        </Box>
    </Section>
}

const Section = styled.section`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    max-width: 542px;
    margin: 38px auto;
    padding: 0 16px;

    @media (min-width: ${breakpoints.tablet}) {
        flex-direction: row;
        max-width: ${breakpoints.tablet};
    }

    @media (min-width: ${breakpoints.desktop}) {
        flex-direction: row;
        max-width: ${breakpoints.desktop};
    }
`

const Box = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    color: white;
`

const Image = styled.img`
    margin: 24px 0;
    border-radius: 6px;
`

const Button = styled.button`
    padding: 12px 24px;
    background-color: #4799eb;
    border: none;
    color: white;
    border-radius: 4px;
`

const Title = styled.h1`
    font-size: 25px;
    color: ${primaryTextColor};
`

const Heading = styled.h2`
    font-size: 14px;
    color: ${primaryTextColor};
`

const Flex = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 27px;
`

const Paragraph = styled.p`
    text-align: justify;
    font-size: 12px;
    color: #929293;
    line-height: 18px;
`

const Input = styled.input`
    width: 100%;
    box-sizing: border-box;
    padding: 11px 6px;
    border: none;
    border-radius: 6px;  
    font-size: 10px;
`

const List = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 24px;

    @media (min-width: ${breakpoints.tablet}) {
        flex-direction: row;
        justify-content: space-between;
        max-width: ${breakpoints.tablet};
    }

    @media (min-width: ${breakpoints.desktop}) {
        flex-direction: row;
        justify-content: space-between;
        max-width: ${breakpoints.desktop};
    }
`

const Span = styled.span`
    display: block;
    font-size: 10px;
    color: #5b6167;
`

const Text = styled.p`
    font-size: 12px;
    color: #929293;
`

export default Detail