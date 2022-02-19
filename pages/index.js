import Head from 'next/head'
import Layout from '../components/UI/layout'
import Navbar from '../components/navbar/navbar'
import Banner from '../components/banner/banner'
import ListFood from '../components/list_food/listFood'
import Modal from '../components/modal/modal'
import { useEffect, useState } from 'react'
import GlobalContext from '../store/GlobalContext'

export default function Home() {
  const [showModal,setShowModal] = useState(false)
  const [cartFood, setChart] = useState([])

  useEffect(()=>{
    setChart(()=>{
      const cart  = localStorage.getItem("cart")
      if(cart){
        const initvalue = JSON.parse(cart)
        return initvalue
      }else{
        return []
      }
    })
  },[])

  useEffect(()=>{
    localStorage.setItem("cart",JSON.stringify(cartFood))
    
  },[cartFood])


  const dismisModalHandler=()=>{
    setShowModal(false)
    document.querySelector('body').classList.remove("overflow-hidden")
  }

  const cartClickHandler=()=>{
    setShowModal(true)
    document.querySelector('body').classList.add("overflow-hidden")
  }

  const decreaseAmountHandler=(id)=>{
    const index = cartFood.findIndex((element)=> element.id === id)
    const found = cartFood.find(element=> element.id === id)
    found.amount -= 1
    if (found.amount === 0) {
      cartFood.splice(index, 1)
      console.log(cartFood)
      const result = [...cartFood]
      setChart(result)
      return
    }

    cartFood.splice(index,1,found)
    const result = [...cartFood]
    setChart(result)
  }

  const addToCartHandler=(value)=>{
    if(cartFood.length>0){
      const found = cartFood.filter(element => element.id == value.id)
      if (found.length>0){
        found[0].amount+=value.amount
        const index = cartFood.findIndex((element)=> element.id === value.id)
        const result = cartFood.filter(element => element.id != value.id)
        result.splice(index,0,found[0])
        setChart(result)
      }else{
        setChart((prevState)=>{
          return[...prevState,value]
        })
      }
    }else{
      setChart((prevState)=>{
        return[...prevState,value]
      })
    }
  }

  let dummyFood = [
    {
      id:'1',
      name:"Nasgor",
      price:1.5,
      imgName:"food.jpeg"
    },
    {
      id:'2',
      name:"Ayam Geprek",
      price:1.8,
      imgName:"food.jpeg"

    },
    {
      id:'3',
      name:"Pecel",
      price:1.2,
      imgName:"food.jpeg"
    },
    {
      id:'4',
      name:"Batagor",
      price:0.5,
      imgName:"food.jpeg"
    },
    {
      id:'5',
      name:"Cilok",
      price:0.5,
      imgName:"food.jpeg"
    },
    {
      id:'6',
      name:"Basreng",
      price:0.4,
      imgName:"food.jpeg"
    },
  ]

  return (
    <>
      <Head>
        <title>GN-Food Cafe</title>
      </Head>
      <GlobalContext.Provider 
        value={
          {
            cart:cartFood,
            foods:dummyFood,
            showModal:cartClickHandler,
            dismisModal:dismisModalHandler,
            addToCart:addToCartHandler,
            decreaseAmount:decreaseAmountHandler
          }
        }>
        {showModal ? <Modal onDismisModal={dismisModalHandler}/>:null}
        <Navbar/>
        <Layout>
          <Banner/>
          <ListFood/>
        </Layout>
      </GlobalContext.Provider>
    </>
  )
}