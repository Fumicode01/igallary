import React from 'react'
import  Link from 'next/link'

import classes from './header.module.css'

const Header = () => {
  return (
      <nav>
            <div className={classes.nav_wrapper}>
                <a href="#" className={classes.logo}>Logo</a>
                <div className={classes.header_right_container}>
                    <ul className={classes.list_container}>
                        <li>
                            <Link href="/"><a className={classes.link_text}>Home</a></Link>
                        </li>
                        <li>
                            <Link href="/about"><a className={classes.link_text}>About</a></Link>
                        </li>
                    </ul>
                </div>
            </div>
      </nav>
  )
}

export default Header