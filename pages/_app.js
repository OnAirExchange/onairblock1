import '../styles/globals.css'
import React from "react"
import ReactDOM from "react-dom"
import { MoralisProvider } from 'react-moralis'
import { GunProvider } from '../context/gunContext'
import { CoinMarketProvider } from '../context/context'

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      serverUrl='https://gqasdf4tkkiu.usemoralis.com:2053/server'
      appId='iNqynN4UftIIabt4cbp1bCys2IefXaabMNImLAyZ16OVVjSxZu3cTxYsKY9oHSU5'
    >
      <GunProvider>
        <CoinMarketProvider>
          <Component {...pageProps} />
        </CoinMarketProvider>
      </GunProvider>
    </MoralisProvider>
  )
}

export default MyApp
