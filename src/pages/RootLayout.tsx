import { Outlet } from "react-router-dom"

import Footer from "components/Footer"
import Header from "components/Header"

const RootLayout = () => {
  return (
    <>
      <Header />
      <div className='min-h-screen'>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default RootLayout
