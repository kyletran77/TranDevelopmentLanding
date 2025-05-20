import Document from "next/document";
import { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,

        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html lang="en" style={{scrollBehavior:'smooth'}}>
        <Head>
          {/* Favicon Links */}
          <link rel="icon" href="/images/TranDevPRKit/color_tdev_logo.svg" type="image/svg+xml" />
          <link rel="apple-touch-icon" href="/images/TranDevPRKit/color_tdev_logo.svg" />
          <meta name="theme-color" content="#5928e5" />

          {/* Default Open Graph Tags */}
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Tran Development" />
          {/* IMPORTANT: Replace with your actual base URL and ensure logo is a .png or .jpg for best compatibility */}
          <meta property="og:image" content="https://trandev.netlify.app/images/TranDevPRKit/color_tdev_logo.png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          {/* Add a default title and description that can be overridden by individual pages */}
          <meta property="og:title" content="Tran Development" />
          <meta property="og:description" content="Innovative solutions for your business needs." />

          {/*======================== Google Fonts ========================*/}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          {/*----------------------- Inter--------------------------------- */}
          {/* <link
            href="https://fonts.leapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          /> */}
          {/*-------------------------- Archivo Black --------------------------------------------*/}
          <link
            href="https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap"
            rel="stylesheet"
          />
          {/*-------------------------- Plus Jakarta Sans --------------------------------------------*/}
          <link href="https://fonts.googleapis.com/css2?family=Alata&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
          {/*-------------------------- Poppins --------------------------------------------*/}
          <link href="https://fonts.googleapis.com/css2?family=Alata&family=Poppins:wght@400;500;600&display=swap" rel="stylesheet" />

          {/* --------------------------------Syne -------------------------------- */}
          <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700&display=swap" rel="stylesheet"/>
          {/*===================== Google Fonts ============================*/}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
