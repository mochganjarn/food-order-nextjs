import Head from 'next/head'
import Layout from '../components/UI/layout'
import Navbar from '../components/Navbar/navbar'

export default function Home() {
  return (
    <>
      <Head>
        <title>My Food Cafe</title>
      </Head>
      <Navbar/>
      <Layout>
        <div>Hallo</div>
      </Layout>
    </>
  )
}