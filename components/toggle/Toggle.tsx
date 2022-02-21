import React from 'react'

import styles from './toggle.module.scss'

interface Props {
    onClick: (e:any) => void
}

const Toggle = ({onClick}:Props) => {
    
  return (
      <label className={styles.wrapper}>
          <input className={styles.input} type="checkbox" onChange={onClick} />
          <span className={styles.slider}></span>
      </label>

  )
}

export default Toggle