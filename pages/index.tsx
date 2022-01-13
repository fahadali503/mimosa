import React from 'react'
import { HomeSlider } from '../src/page-components/home/HomeSlider';

import { Layout } from '../components/layout'
import WhoAreWe from '../src/page-components/home/WhoAreWe';
import ShopByCollection from '../src/page-components/home/ShopByCollection';


const HomePage = () => {
  return (
    <Layout pageTitle='Mimosa'>
      <div className='h-screen ' style={{ backgroundColor: '#F2F2F2' }}>
        <HomeSlider />
      </div>
      <div>
        <WhoAreWe />
      </div>
      <div className='my-10'>
        <ShopByCollection />
      </div>
    </Layout>
  )
}

export default HomePage
