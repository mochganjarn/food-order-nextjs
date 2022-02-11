import Head from 'next/head'
import Layout from '../components/UI/layout'
import Navbar from '../components/Navbar/navbar'
import Banner from '../components/banner/banner'
import ListFood from '../components/list_food/listFood'

export default function Home() {
  return (
    <>
      <Head>
        <title>GN-Food Cafe</title>
      </Head>
      <Navbar/>
      <Layout>
        <Banner/>
        <ListFood/>
      </Layout>
    </>
  )
}