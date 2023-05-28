import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { secondaryColor, primaryTextColor, secondaryTextColor, tertiaryTextColor, backgroundColor } from '../../styles/theme'
import { breakpoints } from '../../styles/breakpoints'

export const StyledLink = styled(Link)`
    display: inline-block;
    width: 100%;
    text-decoration: none;
    background-color: ${secondaryColor};
    border-radius: 4px;
`

export const Image = styled.img`
    width: 100%;
    height: auto;
    border-radius: 4px 4px 0 0;
`

export const Info = styled.div`
    padding: 24px;
    color: ${backgroundColor};

    
    @media (min-width: ${breakpoints.tablet}) {
        white-space: nowrap;        
    }
`

export const Title = styled.h2`
    margin: 0;
    font-size: 18px;
    font-weight: 510;
    color: ${primaryTextColor};

    @media (min-width: ${breakpoints.tablet}) {
        overflow: hidden;
        text-overflow: ellipsis;        
    }
`

export const Description = styled.p`
    font-size: 10px;
    color: ${secondaryTextColor};
    text-align: justify;

    @media (min-width: ${breakpoints.tablet}) {
        overflow: hidden;
        text-overflow: ellipsis;        
    }
`

export const Icon = styled.i`
    width: 20px;
    height: 20px;
    margin-right: 8px;
`

export const Genre = styled.p`
    padding: 2px 4px;
    margin: 0 8px 0 0;
    border-radius: 4px;
    font-size: 8px;
    font-weight: bold;
    color: ${tertiaryTextColor};
    background-color: ${backgroundColor};
    float: right;
`