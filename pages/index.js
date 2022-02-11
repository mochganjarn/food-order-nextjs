import Head from 'next/head'
import Layout from '../components/UI/layout'
import Navbar from '../components/Navbar/navbar'
import Banner from '../components/banner/banner'

export default function Home() {
  return (
    <>
      <Head>
        <title>GN-Food Cafe</title>
      </Head>
      <Navbar/>
      <Layout>
        <Banner/>
      </Layout>
    </>
  )
}