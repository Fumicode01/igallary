import React from 'react'
import classes from './searchInput.module.css'

const SearchInput = () => {
  return (
        <section className={classes.search_input_section}>
            <form>
                <input type="text" placeholder="Search..." />
            </form>
        </section>
  )
}

export default SearchInput