import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions'
import "./Footer.css"
const Footer = () => (
    <div className='menu'>
        <FilterLink filter={VisibilityFilters.SHOW_ALL}>
            All
        </FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
            Yet to do
        </FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
            Completed
        </FilterLink>
    </div>
)

export default Footer;