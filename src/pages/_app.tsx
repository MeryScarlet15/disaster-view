import Head from 'next/head'

import GlobalStyles from 'src/page-styles/global-styles'
import { ThemeProvider } from "styled-components";

import '../../styles/globals.css'

import { colors } from '../../public/colors/colors'

export function reportWebVitals(metric) {

  const { startTime, value } = metric;

  switch (metric.name) {
    case "FCP":
      console.log("First contentful paint", { startTime, value });
      break;
    case "LCP":
      console.log("Largest Contentful Paint", { startTime, value });
      break;
    case "CLS":
      console.log("Cumulative Layout Shift", { startTime, value });
      break;
    case "FID":

      console.log("First Input Delay", { startTime, value });

      break;
    case "TTFB":
      console.log("Time to First Byte", { startTime, value });
      break;
    default:
      break;
  }
}

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <meta name="robots" content="noindex" />

      <meta name="environment" content={'development'} />

      <meta name="application-name" content="Disaster views" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="default"
      />
      <meta name="apple-mobile-web-app-title" content="Disaster views" />

      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="msapplication-TileColor" content="#2B5797" />
      <meta name="msapplication-tap-highlight" content="no" />
      <meta name="theme-color" content="#fff" />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no,maximum-scale=5, viewport-fit=cover"
      />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600&family=Roboto:wght@400;500&display=swap" rel="stylesheet" />
    </Head>

    <ThemeProvider
      theme={{
        colors
      }}>

      <GlobalStyles />

      <Component {...pageProps} />

    </ThemeProvider>

  </>
}

export default MyApp
