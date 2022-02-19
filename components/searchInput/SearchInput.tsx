import React, { useContext, useRef } from 'react'
import classes from './searchInput.module.css'

import { configContext } from '../../context/context'

const SearchInput = () => {
    const { state, dispatch } = useContext(configContext);
    const input = useRef<HTMLInputElement>(null)
    // const searchWord = state.searchWord;

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (input.current) {
            console.log(input.current.value)
            dispatch({type: 'SEARCH', payload: input.current.value});
        }
    }

  return (
        <section className={classes.search_input_section}>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Search..." ref={input} />
            </form>
        </section>
  )
}

export default SearchInput