import React from 'react'
import Hero from '../component/hero/Hero'
import Popular from '../component/popular/popular'
import Feature from '../component/feature/Feature'
import Offer from '../component/offer/Offer'
import NewCollection from '../component/NewCollection/NewCollection'
import NewsLetters from '../component/NewsLetters/NewsLetters'

export default function Home() {
  return (
    <>
    <div className="Home">
      <Hero/>
      <Feature/>
      <Popular/>
      <Offer/>
      <NewCollection/>
      <NewsLetters/>
    </div>
    </>
  )
}
