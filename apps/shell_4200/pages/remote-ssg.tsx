import dynamic from 'next/dynamic';

//@ts-ignore
const page = import('remote_4201/ssg');

//@ts-ignore
const Page = dynamic(() => import('remote_4201/ssg'));

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
