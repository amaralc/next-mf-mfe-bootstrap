import { AppProps } from 'next/app';
import Head from 'next/head';

function RemoteApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to remote_4201!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default RemoteApp;
