import React from 'react'

import styles from './Toggle.module.scss'

interface Props {
    onClick: (e:any) => void
    viewChange:boolean
}

export const Toggle = ({onClick, viewChange}:Props) => {
    
  return (
      <div className={styles.container}>
        <label className={styles.wrapper}>
            <p>Switch View</p>
            <input className={styles.input} type="checkbox" onChange={()=>onClick(!viewChange)} checked={viewChange}/>
            <span className={styles.slider}></span>
        </label>
      </div>

  )
}
