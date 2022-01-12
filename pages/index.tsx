import React from 'react'
import { HomeSlider } from '../src/page-components/home/HomeSlider';

import { Layout } from '../components/layout'


const HomePage = () => {
  return (
    <Layout pageTitle='Mimosa'>
      <div className='h-screen ' style={{ backgroundColor: '#F2F2F2' }}>
        <HomeSlider />
      </div>
    </Layout>
  )
}

export default HomePage
