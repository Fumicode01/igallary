import React, { Fragment } from 'react'
import Header from '../header/Header'
// import MainTitle from '../mainTitle/MainTitle'
// import SearchInput from '../searchInput/SearchInput'
import ConfigContextProvider from '../../context/context'
import Head from 'next/head'
import { QueryClient, QueryClientProvider } from 'react-query'

const Layout = (props:any) => {

    const queryClient = new QueryClient()
  return (
      <ConfigContextProvider>
          <QueryClientProvider client={queryClient}>
                <Head>
                    <title>My Gallary</title>
                    <link rel="shortcut icon" href="/logo.png" />
                </Head>
                <Header />
                <main>{props.children}</main>
          </QueryClientProvider>
      </ConfigContextProvider>
  )
}

export default Layout