import styled from 'styled-components'
import { backgroundColor, secondaryTextColor } from '../../styles/theme'
import { breakpoints } from '../../styles/breakpoints'

export const Form = styled.form`
    display: flex;
    justify-content: space-between;
    max-width: 542px;
    padding: 0 13px;
    margin: 24px auto;
    color: ${secondaryTextColor};
    box-sizing: border-box;

    @media (min-width: ${breakpoints.tablet}) {
        max-width: ${breakpoints.tablet};
    }
    @media (min-width: ${breakpoints.desktop}) {
        max-width: 1010px;
    }
`

export const Label = styled.label`
    display: inline-block;
    margin-right: 16px;
    font-size: 11px;
    flex-basis: 25%;
    
    &:last-of-type {
        margin-right: 0;
    }
`

export const Select = styled.select`
    width: 100%;
    margin-top: 6px;
    font-size: 9px;
    border-radius: 6px;
    color: white;
    background-color: ${backgroundColor};
`