import Layout from "../comps/Layout";
import { AppProps } from "next/app";
import "../styles/globals.css";

import NProgress from "nprogress";
import "nprogress/nprogress.css";
import Router from "next/router";
import Provider from "../context/UC";

NProgress.configure({
  minimum: 0.3,
  easing: "ease",
  speed: 800,
  showSpinner: false,
});

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
