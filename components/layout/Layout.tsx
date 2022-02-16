import React, { Fragment } from 'react'
import Header from '../header/Header'
import MainTitle from '../mainTitle/MainTitle'
import SearchInput from '../searchInput/SearchInput'
import ConfigContextProvider from '../../context/context'
import Head from 'next/head'

const Layout = (props:any) => {
  return (
      <ConfigContextProvider>
        <Fragment>
            <Head>
                <title>My Gallary</title>
                <link rel="shortcut icon" href="/logo.png" />
            </Head>
            <Header />
            <MainTitle />
            <SearchInput />
            <main>{props.children}</main>
        </Fragment>
      </ConfigContextProvider>
  )
}

export default Layout