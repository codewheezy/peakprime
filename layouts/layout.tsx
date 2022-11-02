import Head from "next/head";
import About from "./about";
import Banner from "./banner";
import Footer from "./footer";

// Components
import Header from "./header";
import Services from "./service";
import TrustUs from "./TrustUs";

const Layout = () => {
  return (
    <div className="relative font-Poppins lg:h-screen">
    <Head>
        <meta charSet="UTF-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Peakprime</title>
        <meta name="description" content="Generated by create next app"/>
        <link rel="icon" href=""/>
      </Head>
      <Header />
      <Banner />
      <Services />
      <TrustUs />
      <About />
      <Footer />
    </div>
  )
}

export default Layout;