import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../components/Theme";
import Layout from "../components/layout";
import GlobalStyle from "../components/globalStyles";
import LoadingScreen from "../components/LoadingScreen";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import Router from 'next/router';
// import NProgress from 'nprogress'; //nprogress module
// import 'nprogress/nprogress.css'; //styles of nprogress


function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Add a shorter timeout for better user experience
    setTimeout(() => setLoading(true), 800);
  }, []);


  // Router.events.on('routeChangeStart', () => NProgress.start());
  //  Router.events.on('routeChangeComplete', () => NProgress.done()); 
  //  Router.events.on('routeChangeError', () => NProgress.done());
  
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        {!loading ? (
          <LoadingScreen />
        ) : (
          <Layout>
            <Component {...pageProps} />
          </Layout>
         )} 
      </ThemeProvider>
    </>
  );
}

export default MyApp;
