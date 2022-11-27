import { AppProps } from 'next/app';
import Head from 'next/head';

function ShellApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to shell_4200!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default ShellApp;
