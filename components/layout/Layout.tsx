import React from 'react'
import { Header } from '../Header'
import AppContextProvider from '../../context/context'
import Head from 'next/head'
import { QueryClient, QueryClientProvider } from 'react-query'

export const Layout = (props:any) => {

    const queryClient = new QueryClient()
  return (
      <AppContextProvider>
          <QueryClientProvider client={queryClient}>
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
          </QueryClientProvider>
      </AppContextProvider>
  )
}
