import '@/styles/globals.css';
import { ThemeProvider } from "@mui/material";
import theme from "../styles/theme";
import type { AppProps } from 'next/app';
import Layout from '@/components/Layout';
import { SessionProvider } from 'next-auth/react';
 
export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
    <ThemeProvider theme={theme}>
      <Layout >
        <Component {...pageProps} />
      </Layout>
      </ThemeProvider>
     </SessionProvider> 
  )
  
}