import React, { Fragment } from 'react'
import Header from '../header/Header'
import MainTitle from '../mainTitle/MainTitle'

const Layout = (props:any) => {
  return (
        <Fragment>
            <Header />
            <MainTitle />
            <main>{props.children}</main>
        </Fragment>
  )
}

export default Layout