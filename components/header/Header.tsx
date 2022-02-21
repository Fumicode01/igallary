import React from 'react'
import  Link from 'next/link'
import Image from 'next/image'
import logo from '../../public/logo.png'


import styles from './header.module.scss'

export const Header = () => {
  return (
      <nav>
            <div className={styles.nav_wrapper}>
                <a href="/" >
                    <Image width={90} height={90} src={logo} />
                </a>
                <div className={styles.header_right_container}>
                    <ul className={styles.list_container}>
                        <li>
                            <Link href="/"><a className={styles.link_text}>Home</a></Link>
                        </li>
                        <li>
                            <Link href="/about"><a className={styles.link_text}>About</a></Link>
                        </li>
                    </ul>
                </div>
            </div>
      </nav>
  )
}
