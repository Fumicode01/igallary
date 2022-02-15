import React, { Fragment } from 'react'
import Header from '../header/Header'

const Layout = (props:any) => {
  return (
        <Fragment>
            <Header />
            <main>{props.children}</main>
        </Fragment>
  )
}

export default Layout