import dynamic from 'next/dynamic';
const page = import('remote_4201/index');

const Page = dynamic(() => import('remote_4201/index'));

//@ts-ignore
Page.getInitialProps = async (ctx) => {
  //@ts-ignore
  const getInitialProps = (await page).default?.getInitialProps;
  if (getInitialProps) {
    //@ts-ignore
    return getInitialProps(ctx);
  }
  return {};
};
export default Page;
