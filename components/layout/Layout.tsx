import React from 'react'
import { Header } from '../Header'
import ConfigContextProvider from '../../context/context'
import Head from 'next/head'
import { QueryClient, QueryClientProvider } from 'react-query'

export const Layout = (props:any) => {

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
