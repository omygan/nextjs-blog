import Head from 'next/head'
import Script from 'next/script';
import Layout from '../../components/layout';

export async function getStaticProps() {
  return {
    props: {
      a: 132,
      b: 456,
    },
  };
}

export default function FirstPost(props) {
  console.log(props);
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
    </Layout>
  );
}