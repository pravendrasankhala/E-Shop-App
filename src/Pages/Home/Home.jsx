import React from 'react'
import Products from '../../Components/Products/Products.jsx'

const Home = () => {
  return (
    <div className='max-w-[1320px] mx-auto text-center'>
      <h1>Welcome to the redux toolkit store !</h1>
      <section>
        <h3>Products</h3>
        <Products/>
      </section>
    </div>
  )
}

export default Home
