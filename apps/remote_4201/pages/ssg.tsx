import dynamic from 'next/dynamic';
const page = import('../realPages/ssg');

const Page = dynamic(() => import('../realPages/ssg'));

// //@ts-ignore
// Page.getInitialProps = async (ctx) => {
//   //@ts-ignore
//   const getInitialProps = (await page).default?.getInitialProps;
//   if (getInitialProps) {
//     //@ts-ignore
//     return getInitialProps(ctx);
//   }
//   return {};
// };

export const getStaticProps = async (ctx) => {
  const asyncGetStaticProps = (await page).getStaticProps;
  if (asyncGetStaticProps) {
    return asyncGetStaticProps(ctx);
  }
  return {};
};

export default Page;
