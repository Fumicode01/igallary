import React, { Fragment } from 'react'
import Header from '../header/Header'
import MainTitle from '../mainTitle/MainTitle'
import SearchInput from '../searchInput/SearchInput'
import ConfigContextProvider from '../../context/context'

const Layout = (props:any) => {
  return (
      <ConfigContextProvider>
        <Fragment>
            <Header />
            <MainTitle />
            <SearchInput />
            <main>{props.children}</main>
        </Fragment>
      </ConfigContextProvider>
  )
}

export default Layout