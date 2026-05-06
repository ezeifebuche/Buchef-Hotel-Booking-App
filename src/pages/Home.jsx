import React from 'react'
import Hero from '../Components/Hero'
import FeaturedDestination from '../Components/featuredDestination'
import ExclusiveOffer from '../Components/ExclusiveOffer'
import Testimonial from '../Components/Testimonial'
import NewsLetter from '../Components/NewsLetter'
import AllRooms from './AllRooms'
import RoomDetails from './RoomDetails'
import MyBookings from './MyBookings'

const Home = () => {
  return (
    <>
        <Hero/>
        <FeaturedDestination/>
        <ExclusiveOffer/>
        <Testimonial/>
        <NewsLetter/>
        <AllRooms/>
        <RoomDetails/>
    </>
  )
}

export default Home 