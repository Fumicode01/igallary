import React from 'react'
import { Header } from '../Header'
import AppContextProvider from '../../context/context'
import Head from 'next/head'

export const Layout = (props:any) => {

  return (
      <AppContextProvider>
            <Head>
                <title>My Gallary</title>
                <link rel="shortcut icon" href="/logo.png" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Noto+Serif:wght@400;700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <Header />
            <main>{props.children}</main>
      </AppContextProvider>
  )
}
