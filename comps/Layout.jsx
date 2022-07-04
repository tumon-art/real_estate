import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { Navbar } from "./dls/Navber/Navbar"
import { Footer } from "./Footer"

const Layout = ({children}) => {
  const router = useRouter()
  console.log(router)
  
  useEffect(()=>{
    const next =  document.getElementById("__next");
    const nav = document.getElementById('navbar');
    if(router.asPath === '/') {
      next.style.position='reletive'
      nav.style.position='absolute'
    } else  nav.style.position='relative'
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