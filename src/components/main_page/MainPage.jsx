import React from 'react'
import Layout from '../layout/Layout'

export default function MainPage() {
  return (
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Layout />} />
            <Route path='/location/:id' element={<LocationPage />}/>
          </Routes>
          <Banner />
          <CardList />
          <Footer />
        </div>
  )
}
