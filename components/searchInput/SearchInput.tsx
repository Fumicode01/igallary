import React, { useContext, useRef } from 'react'
import styles from './searchInput.module.scss'

import { configContext } from '../../context/context'

export const SearchInput = () => {
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
        <section className={styles.search_input_section}>
            <form onSubmit={handleSubmit}>
                <div className={styles.container}>
                    <input type="text" placeholder="Search..." ref={input} />
                    <div className={styles.search}></div>
                </div>
                {/* <input type="text" placeholder="Search..." ref={input} /> */}
            </form>
        </section>
  )
}
