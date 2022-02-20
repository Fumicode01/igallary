import React from 'react'

import styles from './toggle.module.scss'

const Toggle = ({onClick}:any) => {
    
  return (
      <label className={styles.wrapper}>
          <input className={styles.input} type="checkbox" onChange={onClick} />
          <span className={styles.slider}></span>
      </label>

  )
}

export default Toggle