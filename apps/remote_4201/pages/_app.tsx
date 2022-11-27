import App from 'next/app';
import dynamic from 'next/dynamic';
import './styles.css';

const page = import('../realPages/_app');

const Page = dynamic(() => import('../realPages/_app'));

//@ts-ignore
Page.getInitialProps = async (ctx) => {
  const appProps = await App.getInitialProps(ctx);

  //@ts-ignore
  const getInitialProps = (await page).default?.getInitialProps;
  if (getInitialProps) {
    return { ...appProps, ...getInitialProps(ctx) };
  }
  return { ...appProps };
};
export default Page;
