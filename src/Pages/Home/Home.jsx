import React from 'react'
import Banner from './Banner'
import WhyChooseUs from './WhyChooseUs'
import Testimonials from './Testimonials'
import Coverage from './Coverage'
import LatestBooks from './LatestBooks'
import { useLoaderData } from 'react-router'

const Home = () => {
  const latestBookData = useLoaderData();
  console.log(latestBookData)
  return (
    <div className='bg-gray-50 min-h-screen'>
      <Banner></Banner>
      <WhyChooseUs></WhyChooseUs>
      <LatestBooks latestBookData={latestBookData}></LatestBooks>
      <Coverage></Coverage>
      <Testimonials></Testimonials>
    </div>
  )
}

export default Home