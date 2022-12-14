import Head from 'next/head';
import { Layout } from '../components';

const Home = () => (
  <div>
    <Head>
      <title>Create Next App</title>
      <meta name='description' content='Generated by create next app' />
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <main>
      <Layout />
    </main>
  </div>
);
export default Home;
