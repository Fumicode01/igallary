import React from 'react'
import  Link from 'next/link'
import Image from 'next/image'
import logo from '../../public/logo.png'


import classes from './header.module.css'

const Header = () => {
  return (
      <nav>
            <div className={classes.nav_wrapper}>
                <a href="/" >
                    <Image width={90} height={90} src={logo} />
                </a>
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