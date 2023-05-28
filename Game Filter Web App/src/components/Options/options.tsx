import React, { ChangeEvent, ReactElement } from 'react'
import { PLATFORMS, GENRES, TAGS, SORT_BY } from '../../constants/filter'
import { Form, Label, Select } from './styles'

interface Props {
    onchange: (event: ChangeEvent<HTMLFormElement>) => void
}

const Options = ({ onchange } : Props) : ReactElement => {
    return <Form onChange = { onchange }>
        <Label htmlFor = 'platform-select'>
            Platform:
            <Select name = 'platform' id = 'platform-select'>
                {
                    PLATFORMS.map((item) => <option key = { item.value } value = { item.value }>{ item.display }</option>)
                }
            </Select>
        </Label>
        <Label htmlFor = 'genre-select'>
            Genre:
            <Select name = 'genre' id = 'genre-select'>
                {
                    GENRES.map((item) => <option key = { item.value } value = { item.value }>{ item.display }</option>)
                }
            </Select>
        </Label>
        <Label htmlFor = 'tag-select'>
            Tag:
            <Select name = 'tag' id = 'tag-select'>
                {
                    TAGS.map((item) => <option key = { item.value } value = { item.value }>{ item.display }</option>)
                }
            </Select>
        </Label>
        <Label htmlFor = 'sort-select'>
            Sort by:
            <Select name = 'sort' id = 'sort-select'>
                {
                    SORT_BY.map((item) => <option key = { item.value } value = { item.value }>{ item.display }</option>)
                }
            </Select>
        </Label>
    </Form>
}

export default Options