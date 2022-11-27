import dynamic from 'next/dynamic';
const page = import('../realPages/index');

const Page = dynamic(() => import('../realPages/index'));

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
