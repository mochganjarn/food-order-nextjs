import Head from 'next/head'
import Layout from '../components/UI/layout'
import Navbar from '../components/navbar/navbar'
import Banner from '../components/banner/banner'
import ListFood from '../components/list_food/listFood'
import Modal from '../components/modal/modal'
import { useState } from 'react'

export default function Home() {
  const [showModal,setShowModal] = useState(false)
  
  const dismisModalHandler=(value)=>{
    setShowModal(value)
    document.querySelector('body').classList.remove("overflow-hidden")
  }

  const cartClickHandler=()=>{
    setShowModal(true)
    document.querySelector('body').classList.add("overflow-hidden")
  }

  return (
    <>
      <Head>
        <title>GN-Food Cafe</title>
      </Head>
      {showModal ? <Modal onDismisModal={dismisModalHandler}/>:null}
      <Navbar onCartClick={cartClickHandler}/>
      <Layout>
        <Banner/>
        <ListFood/>
      </Layout>
    </>
  )
}