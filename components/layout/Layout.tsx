import React, { Fragment } from 'react'
import Header from '../header/Header'
import MainTitle from '../mainTitle/MainTitle'
import SearchInput from '../searchInput/SearchInput'

const Layout = (props:any) => {
  return (
        <Fragment>
            <Header />
            <MainTitle />
            <SearchInput />
            <main>{props.children}</main>
        </Fragment>
  )
}

export default Layout