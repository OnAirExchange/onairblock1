import '../styles/globals.css'
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { MoralisProvider, useMoralis } from "react-moralis";
import { GunProvider } from '../context/gunContext'
import { CoinMarketProvider } from '../context/context'

function MyApp({ Component, pageProps }) {
  const { initialize, isInitialized } = useMoralis();

  return (
    <MoralisProvider
      initializeOnMount={false}
    >
      <Button
        disabled={isInitialized}
        onClick={() => initialize()}
      >
        Initialize
      </Button>
      <GunProvider>
        <CoinMarketProvider>
          <Component {...pageProps} />
        </CoinMarketProvider>
      </GunProvider>
    </MoralisProvider>
  );
}

export default MyApp;
