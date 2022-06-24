import Head from "next/head"
import { Footer } from "./Footer"

const Layout = ({children}) => {
  return (
   <>
    <Head>
        <title>Real Estate</title>
    </Head>
    <main>{children}</main>
    <Footer />
   </>
  )
}

export default Layout