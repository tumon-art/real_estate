import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { Navbar } from "./dls/Navber/Navbar"
import { Footer } from "./Footer"

const Layout = ({children}) => {
  const router = useRouter()
 
  useEffect(()=>{
    const next =  document.getElementById("__next");
    const nav = document.getElementById('navbar');
  },[])

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