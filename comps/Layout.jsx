import Head from "next/head"
import { Footer } from "./Footer"
import { Navbar } from "./Navbar"

const Layout = ({children}) => {
  return (
   <>
    <Head>
        <title>Real Estate</title>
    </Head>

    <Navbar />
    <main>{children}</main>
    <Footer />
   </>
  )
}

export default Layout