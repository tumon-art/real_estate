import Head from "next/head";
import Navbar from "./dls/Navber/Navbar";
import { Footer } from "./Footer";

const Layout = ({ children }: any) => {
  return (
    <>
      <Head>
        <title>Real Estate</title>
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
