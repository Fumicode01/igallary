import React from 'react'

import styles from './toggle.module.scss'

interface Props {
    onClick: (e:any) => void
    viewChange:boolean
}

const Toggle = ({onClick, viewChange}:Props) => {
    
  return (
      <label className={styles.wrapper}>
          <input className={styles.input} type="checkbox" onChange={()=>onClick(!viewChange)} checked={viewChange}/>
          <span className={styles.slider}></span>
      </label>

  )
}

export default Toggle